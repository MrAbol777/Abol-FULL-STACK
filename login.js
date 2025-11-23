// ===== Authentication Configuration =====
const AUTH_CONFIG = {
    username: 'admin',
    password: '125874Abol',
    sessionKey: 'portfolio_admin_session',
    sessionTimeout: 24 * 60 * 60 * 1000 // 24 hours
};

// ===== Password Hashing (Simple but effective) =====
function hashPassword(password) {
    // Simple hash function for basic security
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

// ===== Check if user is authenticated =====
function isAuthenticated() {
    const session = localStorage.getItem(AUTH_CONFIG.sessionKey);
    if (!session) return false;
    
    try {
        const sessionData = JSON.parse(session);
        const now = new Date().getTime();
        
        // Check if session is expired
        if (now > sessionData.expires) {
            localStorage.removeItem(AUTH_CONFIG.sessionKey);
            return false;
        }
        
        return true;
    } catch (e) {
        localStorage.removeItem(AUTH_CONFIG.sessionKey);
        return false;
    }
}

// ===== Create session =====
function createSession() {
    const expires = new Date().getTime() + AUTH_CONFIG.sessionTimeout;
    const sessionData = {
        authenticated: true,
        expires: expires,
        timestamp: new Date().getTime()
    };
    localStorage.setItem(AUTH_CONFIG.sessionKey, JSON.stringify(sessionData));
}

// ===== Login Form Handler =====
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Clear previous errors
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';
    
    // Validate inputs
    if (!username) {
        showError('لطفاً نام کاربری را وارد کنید');
        usernameInput.focus();
        return;
    }
    
    if (!password) {
        showError('لطفاً رمز عبور را وارد کنید');
        passwordInput.focus();
        return;
    }
    
    // Check credentials
    if (username === AUTH_CONFIG.username && password === AUTH_CONFIG.password) {
        // Create session
        createSession();
        
        // Show success
        errorMessage.style.background = 'rgba(34, 197, 94, 0.1)';
        errorMessage.style.borderColor = 'rgba(34, 197, 94, 0.3)';
        errorMessage.style.color = '#22c55e';
        errorMessage.textContent = '✅ ورود موفق! در حال انتقال...';
        errorMessage.classList.add('show');
        
        // Redirect to admin panel
        setTimeout(() => {
            window.location.href = 'admin.html';
        }, 1000);
    } else {
        showError('نام کاربری یا رمز عبور اشتباه است');
        passwordInput.value = '';
        usernameInput.focus();
    }
});

// Show error message
function showError(message) {
    errorMessage.style.background = 'rgba(239, 68, 68, 0.1)';
    errorMessage.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    errorMessage.style.color = '#ef4444';
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

// ===== Check if already logged in =====
document.addEventListener('DOMContentLoaded', () => {
    if (isAuthenticated()) {
        // Redirect to admin if already logged in
        window.location.href = 'admin.html';
    }
});

// ===== Prevent form autofill issues =====
passwordInput.addEventListener('input', () => {
    errorMessage.classList.remove('show');
});


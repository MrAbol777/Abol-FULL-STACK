// ===== Authentication System =====
const AUTH_CONFIG = {
    username: 'admin',
    password: '125874Abol',
    sessionKey: 'portfolio_admin_session',
    sessionTimeout: 24 * 60 * 60 * 1000 // 24 hours
};

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

// ===== Destroy session (Logout) =====
function destroySession() {
    localStorage.removeItem(AUTH_CONFIG.sessionKey);
}

// ===== Protect page (redirect if not authenticated) =====
function protectPage() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

// ===== Check authentication on page load =====
function initAuth() {
    // Check if we're on admin page
    if (window.location.pathname.includes('admin.html')) {
        protectPage();
    }
    
    // Update navigation based on auth status
    updateNavigation();
}

// ===== Update navigation based on auth status =====
function updateNavigation() {
    const adminLink = document.getElementById('admin-link');
    const logoutLink = document.getElementById('logout-link');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (isAuthenticated()) {
        // Show admin and logout links
        if (adminLink) adminLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'block';
        
        // Add logout handler
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
                    destroySession();
                    window.location.href = 'index.html';
                }
            });
        }
    } else {
        // Hide admin and logout links
        if (adminLink) adminLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'none';
    }
}

// ===== Initialize on DOM load =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}


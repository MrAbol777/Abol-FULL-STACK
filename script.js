// ===== Header Scroll Effect =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    });
});

// ===== Active Nav Link =====
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
const animateElements = document.querySelectorAll('.project-card, .stat-card, .timeline-item, .about__text, .skill-item');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Progress Bar Animation =====
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const percent = progressBar.getAttribute('data-percent');
            const progressFill = progressBar.querySelector('.progress-fill');
            const progressPercent = progressBar.nextElementSibling;
            
            // Animate progress bar
            setTimeout(() => {
                progressFill.style.width = percent + '%';
            }, 200);
            
            // Animate percentage text
            let currentPercent = 0;
            const increment = percent / 50;
            const timer = setInterval(() => {
                currentPercent += increment;
                if (currentPercent >= percent) {
                    currentPercent = percent;
                    clearInterval(timer);
                }
                progressPercent.textContent = Math.round(currentPercent) + '%';
            }, 20);
            
            progressObserver.unobserve(progressBar);
        }
    });
}, {
    threshold: 0.5
});

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ===== Form Validation =====
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

// Validation functions
function validateName(name) {
    if (name.trim().length < 2) {
        nameError.textContent = 'نام باید حداقل 2 کاراکتر باشد';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'ایمیل معتبر نیست';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validateMessage(message) {
    if (message.trim().length < 10) {
        messageError.textContent = 'پیام باید حداقل 10 کاراکتر باشد';
        return false;
    }
    messageError.textContent = '';
    return true;
}

// Real-time validation
nameInput.addEventListener('blur', () => {
    validateName(nameInput.value);
});

emailInput.addEventListener('blur', () => {
    validateEmail(emailInput.value);
});

messageInput.addEventListener('blur', () => {
    validateMessage(messageInput.value);
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    
    let isValid = true;
    
    if (!validateName(name)) isValid = false;
    if (!validateEmail(email)) isValid = false;
    if (!validateMessage(message)) isValid = false;
    
    if (isValid) {
        // Get subject if exists
        const subject = document.getElementById('subject').value.trim();
        
        // Save message to localStorage
        const messageData = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            subject: subject || 'بدون موضوع',
            message: message.trim(),
            date: new Date().toLocaleString('fa-IR'),
            timestamp: new Date().getTime(),
            read: false
        };
        
        // Get existing messages
        let messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        messages.unshift(messageData); // Add to beginning
        
        // Save to localStorage (keep last 100 messages)
        if (messages.length > 100) {
            messages = messages.slice(0, 100);
        }
        localStorage.setItem('portfolio_messages', JSON.stringify(messages));
        
        // Show success message
        formSuccess.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
        
        console.log('Message saved:', messageData);
    }
});

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGlow = document.querySelector('.hero__glow');
    if (heroGlow) {
        heroGlow.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Typing Effect for Hero (Optional) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ===== Load Portfolio Data from LocalStorage =====
function loadPortfolioData() {
    const saved = localStorage.getItem('portfolioData');
    if (!saved) return;
    
    const data = JSON.parse(saved);
    
    // Update Personal Info
    if (data.personal) {
        const heroName = document.querySelector('.hero__name');
        const heroSubtitle = document.querySelector('.hero__subtitle');
        const heroDescription = document.querySelector('.hero__description');
        
        if (heroName && data.personal.name) heroName.textContent = data.personal.name;
        if (heroSubtitle && data.personal.title) heroSubtitle.textContent = data.personal.title;
        if (heroDescription && data.personal.description) heroDescription.textContent = data.personal.description;
    }
    
    // Update About Section
    if (data.about) {
        const aboutParagraphs = document.querySelectorAll('.about__text p');
        if (aboutParagraphs[0] && data.about.paragraph1) aboutParagraphs[0].textContent = data.about.paragraph1;
        if (aboutParagraphs[1] && data.about.paragraph2) aboutParagraphs[1].textContent = data.about.paragraph2;
        
        // Update Stats
        if (data.about.stats) {
            const statNumbers = document.querySelectorAll('.stat-number');
            if (statNumbers[0] && data.about.stats.projects) statNumbers[0].textContent = data.about.stats.projects;
            if (statNumbers[1] && data.about.stats.experience) statNumbers[1].textContent = data.about.stats.experience;
            if (statNumbers[2] && data.about.stats.satisfaction) statNumbers[2].textContent = data.about.stats.satisfaction;
        }
    }
    
    // Update Skills
    if (data.skills && data.skills.length > 0) {
        const skillsContainer = document.querySelector('.skills__container');
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            data.skills.forEach(skill => {
                const skillHTML = `
                    <div class="skill-item">
                        <div class="skill-header">
                            <div class="skill-icon">${skill.icon || '⭐'}</div>
                            <h3 class="skill-name">${skill.name}</h3>
                        </div>
                        <div class="skill-progress">
                            <div class="progress-bar" data-percent="${skill.percent || 0}">
                                <div class="progress-fill"></div>
                            </div>
                            <span class="progress-percent">${skill.percent || 0}%</span>
                        </div>
                    </div>
                `;
                skillsContainer.innerHTML += skillHTML;
            });
            
            // Re-observe progress bars
            const progressBars = skillsContainer.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                progressObserver.observe(bar);
            });
        }
    }
    
    // Update Projects
    if (data.projects && data.projects.length > 0) {
        const projectsContainer = document.querySelector('.projects__container');
        if (projectsContainer) {
            projectsContainer.innerHTML = '';
            data.projects.forEach(project => {
                const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                const projectHTML = `
                    <div class="project-card">
                        <div class="project-image">
                            <div class="project-overlay">
                                <a href="${project.link || '#'}" class="project-link">مشاهده پروژه</a>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description || ''}</p>
                            <div class="project-tags">${tagsHTML}</div>
                        </div>
                    </div>
                `;
                projectsContainer.innerHTML += projectHTML;
            });
        }
    }
    
    // Update Experience
    if (data.experience && data.experience.length > 0) {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            timeline.innerHTML = '';
            data.experience.forEach(exp => {
                const expHTML = `
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">${exp.title}</h3>
                            <span class="timeline-date">${exp.date || ''}</span>
                            <p class="timeline-description">${exp.description || ''}</p>
                        </div>
                    </div>
                `;
                timeline.innerHTML += expHTML;
            });
        }
    }
    
    // Update Contact Info
    if (data.contact) {
        const contactEmail = document.querySelector('a[href^="mailto:"]');
        const contactTelegram = document.querySelector('a[href*="t.me"]');
        const contactGithub = document.querySelector('a[href*="github.com"]');
        
        if (contactEmail && data.contact.email) {
            contactEmail.href = `mailto:${data.contact.email}`;
            contactEmail.querySelector('span:last-child').textContent = data.contact.email;
        }
        if (contactTelegram && data.contact.telegram) {
            contactTelegram.href = data.contact.telegram;
        }
        if (contactGithub && data.contact.github) {
            contactGithub.href = data.contact.github;
        }
    }
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Load portfolio data
    loadPortfolioData();
    
    // Load authentication system
    if (typeof initAuth === 'function') {
        initAuth();
    } else {
        // Load auth.js if not already loaded
        const authScript = document.createElement('script');
        authScript.src = 'auth.js';
        document.head.appendChild(authScript);
        authScript.onload = () => {
            if (typeof initAuth === 'function') {
                initAuth();
            }
        };
    }
    
    // Add fade-in class to hero content
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        heroContent.classList.add('fade-in', 'visible');
    }
    
    // Set initial header state
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    }
});

// ===== Performance: Lazy load images (if you add images later) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}


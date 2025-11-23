// ===== Data Management =====
const portfolioData = {
    personal: {
        name: 'ابوالفضل دوست‌گل',
        title: 'برنامه‌نویس فول‌استک',
        description: 'توسعه‌دهنده فول‌استک با تجربه ساخت وب‌سایت‌های مدرن، فروشگاهی، ربات‌های تلگرامی، پنل مدیریت و سیستم‌های سفارش‌گیری'
    },
    about: {
        paragraph1: 'من یک توسعه‌دهنده فول‌استک هستم که از نوجوانی عاشق برنامه‌نویسی بوده‌ام. با سال‌ها تجربه در ساخت پروژه‌های واقعی، مهارت‌هایم را در زمینه‌های مختلف توسعه وب گسترش داده‌ام.',
        paragraph2: 'تخصص من شامل طراحی و توسعه وب‌سایت‌های فروشگاهی، شخصی و خدماتی، برنامه‌نویسی بک‌اند، پیاده‌سازی ربات تلگرام و APIهای مختلف، طراحی UI/UX و ساخت پنل مدیریت اختصاصی است.',
        stats: {
            projects: '50+',
            experience: '5+',
            satisfaction: '100%'
        }
    },
    skills: [
        { name: 'Python', icon: '🐍', percent: 85 },
        { name: 'React', icon: '⚛️', percent: 80 },
        { name: 'JavaScript', icon: '🟨', percent: 90 },
        { name: 'Node.js', icon: '🟢', percent: 85 },
        { name: 'Express', icon: '📘', percent: 80 },
        { name: 'HTML', icon: '💎', percent: 95 },
        { name: 'CSS', icon: '🎨', percent: 90 },
        { name: 'SQLite', icon: '🗄️', percent: 75 },
        { name: 'Git', icon: '🔧', percent: 85 }
    ],
    projects: [
        {
            title: 'فروشگاه آنلاین',
            description: 'یک پلتفرم فروشگاهی کامل با پنل مدیریت، سیستم پرداخت و مدیریت موجودی',
            tags: ['React', 'Node.js', 'SQLite'],
            link: '#'
        },
        {
            title: 'ربات تلگرام هوشمند',
            description: 'ربات تلگرام با قابلیت‌های پیشرفته شامل پرداخت، مدیریت کاربران و اعلان‌های خودکار',
            tags: ['Node.js', 'Telegram API'],
            link: '#'
        },
        {
            title: 'پنل مدیریت',
            description: 'پنل مدیریت اختصاصی با قابلیت‌های پیشرفته برای مدیریت محتوا و کاربران',
            tags: ['React', 'Express', 'API'],
            link: '#'
        },
        {
            title: 'سیستم سفارش‌گیری',
            description: 'سیستم کامل سفارش‌گیری آنلاین با مدیریت سفارشات و گزارش‌گیری',
            tags: ['JavaScript', 'Node.js', 'SQLite'],
            link: '#'
        }
    ],
    experience: [
        {
            title: 'توسعه‌دهنده فول‌استک',
            date: '2020 - حال حاضر',
            description: 'توسعه وب‌سایت‌های فروشگاهی، شخصی و خدماتی با استفاده از تکنولوژی‌های مدرن'
        },
        {
            title: 'برنامه‌نویس Backend',
            date: '2018 - 2020',
            description: 'پیاده‌سازی API و سیستم‌های بک‌اند با Node.js و Express'
        },
        {
            title: 'توسعه‌دهنده Frontend',
            date: '2016 - 2018',
            description: 'طراحی و توسعه رابط‌های کاربری با HTML, CSS و JavaScript'
        }
    ],
    contact: {
        email: 'your.email@example.com',
        telegram: 'https://t.me/yourusername',
        github: 'https://github.com/yourusername'
    }
};

// ===== Load Data from LocalStorage =====
function loadData() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        Object.assign(portfolioData, JSON.parse(saved));
    }
    populateForms();
}

// ===== Save Data to LocalStorage =====
function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    updatePortfolio();
    showSuccessMessage();
}

// ===== Populate Forms =====
function populateForms() {
    // Personal Info
    document.getElementById('personal-name').value = portfolioData.personal.name;
    document.getElementById('personal-title').value = portfolioData.personal.title;
    document.getElementById('personal-description').value = portfolioData.personal.description;

    // About
    document.getElementById('about-p1').value = portfolioData.about.paragraph1;
    document.getElementById('about-p2').value = portfolioData.about.paragraph2;
    document.getElementById('stat-projects').value = portfolioData.about.stats.projects;
    document.getElementById('stat-experience').value = portfolioData.about.stats.experience;
    document.getElementById('stat-satisfaction').value = portfolioData.about.stats.satisfaction;

    // Skills
    renderSkills();

    // Projects
    renderProjects();

    // Experience
    renderExperience();

    // Contact
    document.getElementById('contact-email').value = portfolioData.contact.email;
    document.getElementById('contact-telegram').value = portfolioData.contact.telegram;
    document.getElementById('contact-github').value = portfolioData.contact.github;
}

// ===== Navigation =====
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.getAttribute('data-section');
        
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show section
        document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(`section-${section}`).classList.add('active');
    });
});

// ===== Save All Button =====
document.getElementById('saveAll').addEventListener('click', () => {
    collectFormData();
    saveData();
});

// ===== Collect Form Data =====
function collectFormData() {
    // Personal
    portfolioData.personal.name = document.getElementById('personal-name').value;
    portfolioData.personal.title = document.getElementById('personal-title').value;
    portfolioData.personal.description = document.getElementById('personal-description').value;

    // About
    portfolioData.about.paragraph1 = document.getElementById('about-p1').value;
    portfolioData.about.paragraph2 = document.getElementById('about-p2').value;
    portfolioData.about.stats.projects = document.getElementById('stat-projects').value;
    portfolioData.about.stats.experience = document.getElementById('stat-experience').value;
    portfolioData.about.stats.satisfaction = document.getElementById('stat-satisfaction').value;

    // Skills (collected in renderSkills)
    collectSkills();

    // Projects (collected in renderProjects)
    collectProjects();

    // Experience (collected in renderExperience)
    collectExperience();

    // Contact
    portfolioData.contact.email = document.getElementById('contact-email').value;
    portfolioData.contact.telegram = document.getElementById('contact-telegram').value;
    portfolioData.contact.github = document.getElementById('contact-github').value;
}

// ===== Skills Management =====
function renderSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = '';
    
    portfolioData.skills.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item-admin';
        skillDiv.innerHTML = `
            <input type="text" value="${skill.icon}" placeholder="ایکون" data-index="${index}" data-field="icon">
            <input type="text" value="${skill.name}" placeholder="نام مهارت" data-index="${index}" data-field="name">
            <input type="number" value="${skill.percent}" min="0" max="100" placeholder="درصد" data-index="${index}" data-field="percent">
            <button class="btn-delete" onclick="deleteSkill(${index})">حذف</button>
        `;
        container.appendChild(skillDiv);
    });
}

function collectSkills() {
    const skills = [];
    document.querySelectorAll('.skill-item-admin').forEach(item => {
        const icon = item.querySelector('[data-field="icon"]').value;
        const name = item.querySelector('[data-field="name"]').value;
        const percent = parseInt(item.querySelector('[data-field="percent"]').value);
        if (name && percent >= 0) {
            skills.push({ icon, name, percent });
        }
    });
    portfolioData.skills = skills;
}

function deleteSkill(index) {
    portfolioData.skills.splice(index, 1);
    renderSkills();
}

document.getElementById('add-skill').addEventListener('click', () => {
    portfolioData.skills.push({ name: 'مهارت جدید', icon: '⭐', percent: 50 });
    renderSkills();
});

// ===== Projects Management =====
function renderProjects() {
    const container = document.getElementById('projects-list');
    container.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item-admin';
        projectDiv.innerHTML = `
            <input type="text" value="${project.title}" placeholder="عنوان پروژه" data-index="${index}" data-field="title">
            <textarea placeholder="توضیحات" data-index="${index}" data-field="description">${project.description}</textarea>
            <input type="url" value="${project.link}" placeholder="لینک پروژه" data-index="${index}" data-field="link">
            <div class="project-tags-input" data-index="${index}">
                ${project.tags.map((tag, tagIndex) => `
                    <span class="tag-input-item">
                        ${tag}
                        <span class="tag-remove" onclick="removeTag(${index}, ${tagIndex})">×</span>
                    </span>
                `).join('')}
                <input type="text" class="tag-input" placeholder="افزودن تگ (Enter)" 
                       onkeypress="if(event.key==='Enter') addTag(${index}, this)">
            </div>
            <button class="btn-delete" onclick="deleteProject(${index})">حذف پروژه</button>
        `;
        container.appendChild(projectDiv);
    });
}

function collectProjects() {
    const projects = [];
    document.querySelectorAll('.project-item-admin').forEach(item => {
        const title = item.querySelector('[data-field="title"]').value;
        const description = item.querySelector('[data-field="description"]').value;
        const link = item.querySelector('[data-field="link"]').value;
        const tagsContainer = item.querySelector('.project-tags-input');
        const tags = Array.from(tagsContainer.querySelectorAll('.tag-input-item'))
            .map(tag => tag.textContent.trim().replace('×', '').trim())
            .filter(tag => tag);
        
        if (title) {
            projects.push({ title, description, link, tags });
        }
    });
    portfolioData.projects = projects;
}

function addTag(projectIndex, input) {
    const tag = input.value.trim();
    if (tag) {
        if (!portfolioData.projects[projectIndex].tags) {
            portfolioData.projects[projectIndex].tags = [];
        }
        portfolioData.projects[projectIndex].tags.push(tag);
        input.value = '';
        renderProjects();
    }
}

function removeTag(projectIndex, tagIndex) {
    portfolioData.projects[projectIndex].tags.splice(tagIndex, 1);
    renderProjects();
}

function deleteProject(index) {
    portfolioData.projects.splice(index, 1);
    renderProjects();
}

document.getElementById('add-project').addEventListener('click', () => {
    portfolioData.projects.push({
        title: 'پروژه جدید',
        description: 'توضیحات پروژه',
        tags: [],
        link: '#'
    });
    renderProjects();
});

// ===== Experience Management =====
function renderExperience() {
    const container = document.getElementById('experience-list');
    container.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item-admin';
        expDiv.innerHTML = `
            <input type="text" value="${exp.title}" placeholder="عنوان شغلی" data-index="${index}" data-field="title">
            <input type="text" value="${exp.date}" placeholder="تاریخ (مثال: 2020 - حال حاضر)" data-index="${index}" data-field="date">
            <textarea placeholder="توضیحات" data-index="${index}" data-field="description">${exp.description}</textarea>
            <button class="btn-delete" onclick="deleteExperience(${index})">حذف تجربه</button>
        `;
        container.appendChild(expDiv);
    });
}

function collectExperience() {
    const experience = [];
    document.querySelectorAll('.experience-item-admin').forEach(item => {
        const title = item.querySelector('[data-field="title"]').value;
        const date = item.querySelector('[data-field="date"]').value;
        const description = item.querySelector('[data-field="description"]').value;
        if (title) {
            experience.push({ title, date, description });
        }
    });
    portfolioData.experience = experience;
}

function deleteExperience(index) {
    portfolioData.experience.splice(index, 1);
    renderExperience();
}

document.getElementById('add-experience').addEventListener('click', () => {
    portfolioData.experience.push({
        title: 'عنوان شغلی جدید',
        date: '2024 - حال حاضر',
        description: 'توضیحات تجربه کاری'
    });
    renderExperience();
});

// ===== Update Portfolio Page =====
function updatePortfolio() {
    // Store data for portfolio page
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

// ===== Load Data Button =====
document.getElementById('loadData').addEventListener('click', () => {
    loadData();
    showSuccessMessage('داده‌ها بارگذاری شدند!');
});

// ===== Reset Data Button =====
document.getElementById('resetData').addEventListener('click', () => {
    if (confirm('آیا مطمئن هستید که می‌خواهید همه داده‌ها را به حالت اولیه بازگردانید؟')) {
        localStorage.removeItem('portfolioData');
        location.reload();
    }
});

// ===== Success Message =====
function showSuccessMessage(message = 'تغییرات با موفقیت ذخیره شد!') {
    const msg = document.getElementById('successMessage');
    msg.textContent = '✅ ' + message;
    msg.classList.add('show');
    setTimeout(() => {
        msg.classList.remove('show');
    }, 3000);
}

// ===== Auto-save on input change =====
document.addEventListener('input', (e) => {
    if (e.target.matches('input, textarea')) {
        // Auto-save after 2 seconds of no typing
        clearTimeout(window.autoSaveTimer);
        window.autoSaveTimer = setTimeout(() => {
            collectFormData();
            updatePortfolio();
        }, 2000);
    }
});

// ===== Messages Management =====
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    return messages;
}

function renderMessages() {
    const messages = loadMessages();
    const messagesList = document.getElementById('messages-list');
    const totalMessages = document.getElementById('total-messages');
    const unreadMessages = document.getElementById('unread-messages');
    const messageBadge = document.getElementById('message-badge');
    
    if (!messagesList) return;
    
    // Update stats
    const unreadCount = messages.filter(m => !m.read).length;
    if (totalMessages) totalMessages.textContent = messages.length;
    if (unreadMessages) unreadMessages.textContent = unreadCount;
    
    // Update badge
    if (messageBadge) {
        if (unreadCount > 0) {
            messageBadge.textContent = unreadCount;
            messageBadge.style.display = 'inline-block';
        } else {
            messageBadge.style.display = 'none';
        }
    }
    
    // Clear list
    messagesList.innerHTML = '';
    
    if (messages.length === 0) {
        messagesList.innerHTML = '<div class="empty-messages"><p>📭 هنوز پیامی دریافت نشده است</p></div>';
        return;
    }
    
    // Render messages
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message-item ${message.read ? '' : 'unread'}`;
        messageDiv.innerHTML = `
            <div class="message-header">
                <div class="message-info">
                    <div class="message-name">${escapeHtml(message.name)}</div>
                    <a href="mailto:${escapeHtml(message.email)}" class="message-email">${escapeHtml(message.email)}</a>
                    <div class="message-date">${escapeHtml(message.date)}</div>
                </div>
            </div>
            <div class="message-subject">${escapeHtml(message.subject)}</div>
            <div class="message-text">${escapeHtml(message.message)}</div>
            <div class="message-actions">
                ${!message.read ? '<button class="btn-message btn-mark-read" onclick="markAsRead(' + message.id + ')">✓ خوانده شد</button>' : ''}
                <button class="btn-message btn-delete-message" onclick="deleteMessage(' + message.id + ')">🗑️ حذف</button>
            </div>
        `;
        messagesList.appendChild(messageDiv);
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function markAsRead(messageId) {
    let messages = loadMessages();
    messages = messages.map(msg => {
        if (msg.id === messageId) {
            msg.read = true;
        }
        return msg;
    });
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));
    renderMessages();
}

function deleteMessage(messageId) {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این پیام را حذف کنید؟')) {
        return;
    }
    
    let messages = loadMessages();
    messages = messages.filter(msg => msg.id !== messageId);
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));
    renderMessages();
}

// Make functions global for onclick handlers
window.markAsRead = markAsRead;
window.deleteMessage = deleteMessage;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    
    // Load messages
    renderMessages();
    
    // Refresh messages button
    const refreshBtn = document.getElementById('refresh-messages');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            renderMessages();
            showSuccessMessage('پیام‌ها بروزرسانی شدند!');
        });
    }
    
    // Clear all messages button
    const clearAllBtn = document.getElementById('clear-all-messages');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (confirm('آیا مطمئن هستید که می‌خواهید همه پیام‌ها را حذف کنید؟ این عمل قابل بازگشت نیست.')) {
                localStorage.removeItem('portfolio_messages');
                renderMessages();
                showSuccessMessage('همه پیام‌ها حذف شدند!');
            }
        });
    }
    
    // Logout button in admin panel
    const logoutBtn = document.getElementById('admin-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('آیا مطمئن هستید که می‌خواهید از پنل خارج شوید؟')) {
                if (typeof destroySession === 'function') {
                    destroySession();
                } else {
                    localStorage.removeItem('portfolio_admin_session');
                }
                window.location.href = 'login.html';
            }
        });
    }
});


/**
 * Language Handling Script
 * Manages language selection, persistence, and DOM updates.
 */

// Global state
let currentLang = localStorage.getItem('heat_lang') || 'en';

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = translations[currentLang][key];

        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Update lang attribute on html tag
    document.documentElement.lang = currentLang;

    // Update language switcher UI if it exists
    updateSwitcherUI();
}

function changeLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem('heat_lang', lang);
    updateContent();
}

function updateSwitcherUI() {
    const btnTr = document.getElementById('lang-tr');
    const btnEn = document.getElementById('lang-en');

    if (btnTr && btnEn) {
        if (currentLang === 'tr') {
            btnTr.classList.add('text-white', 'font-bold');
            btnTr.classList.remove('text-gray-500');
            btnEn.classList.add('text-gray-500');
            btnEn.classList.remove('text-white', 'font-bold');
        } else {
            btnEn.classList.add('text-white', 'font-bold');
            btnEn.classList.remove('text-gray-500');
            btnTr.classList.add('text-gray-500');
            btnTr.classList.remove('text-white', 'font-bold');
        }
    }
}

// Function to get current translation (for JS files)
function getTranslation(key) {
    return translations[currentLang][key] || key;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});

/**
 * Navbar Injection and Management Script
 * Handles dynamic insertion of the navbar and mobile menu,
 * and sets the active state based on the current page.
 */

const navbarHTML = `
    <!-- Navbar -->
    <div class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <nav
            class="glass-card rounded-2xl px-6 py-4 md:px-10 md:py-5 flex justify-between items-center w-full max-w-7xl shadow-2xl shadow-indigo-500/10 transition-all duration-300 hover:border-white/20 hover:bg-white/5">
            <a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span class="text-2xl font-bold text-white tracking-tight">Heat</span>
                <span class="text-2xl font-light text-gray-400">Interactive</span>
            </a>
            <div class="hidden md:flex items-center gap-10">
                <div class="flex gap-8 text-base font-medium text-gray-300">
                    <a href="index.html" class="nav-link transition-colors" data-i18n="nav.home">Ana Sayfa</a>
                    <a href="projects.html" class="nav-link transition-colors" data-i18n="nav.projects">Projeler</a>
                    <a href="aboutus.html" class="nav-link transition-colors" data-i18n="nav.about">Hakkımızda</a>
                    <a href="contact.html" class="nav-link transition-colors" data-i18n="nav.contact">İletişim</a>
                </div>
            </div>

            <!-- Language Switcher & Mobile Menu -->
            <div class="flex items-center gap-4">
                <div class="hidden md:flex items-center gap-2 text-sm">
                    <button onclick="changeLanguage('en')" id="lang-en" class="transition-colors hover:text-white">EN</button>
                    <span class="text-gray-600">|</span>
                    <button onclick="changeLanguage('tr')" id="lang-tr" class="transition-colors hover:text-white">TR</button>
                </div>

                <button
                    class="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-colors"
                    id="mobile-menu-btn">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu"
        class="hidden fixed inset-0 z-40 bg-[#020410]/95 backdrop-blur-2xl pt-32 px-6 md:hidden transition-all duration-300 text-center">
        <div class="flex flex-col space-y-8 text-2xl font-bold">
            <a href="index.html" class="mobile-link text-gray-400 hover:text-white transition-colors" data-i18n="nav.home">Ana Sayfa</a>
            <a href="projects.html" class="mobile-link text-gray-400 hover:text-white transition-colors" data-i18n="nav.projects">Projeler</a>
            <a href="aboutus.html" class="mobile-link text-gray-400 hover:text-white transition-colors" data-i18n="nav.about">Hakkımızda</a>
            <a href="contact.html" class="mobile-link text-gray-400 hover:text-white transition-colors" data-i18n="nav.contact">İletişim</a>
            
            <div class="flex justify-center gap-4 text-xl pt-8 border-t border-white/10">
                <button onclick="changeLanguage('en')" class="text-gray-500">EN</button>
                <span class="text-gray-600">|</span>
                <button onclick="changeLanguage('tr')" class="text-white">TR</button>
            </div>

            <button
                class="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl"
                id="mobile-menu-close">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>
`;

function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active', 'text-white');
            link.classList.remove('text-gray-300'); // Remove default color if needed by design
        } else {
            link.classList.add('hover:text-white'); // Ensure hover effect
            link.classList.remove('active');
        }
    });

    // Mobile links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-indigo-400');
            link.classList.remove('text-gray-400');
        } else {
            link.classList.remove('text-indigo-400');
            link.classList.add('text-gray-400');
        }
    });
}

function initNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) {
        console.error('Navbar placeholder not found!');
        return;
    }

    placeholder.innerHTML = navbarHTML;
    setActiveLink();

    // Event Listeners for Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}

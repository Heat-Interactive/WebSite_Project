/**
 * Navbar Injection and Management Script
 * Revisions:
 * - Logo %5 oranında büyütüldü (h-[5.25rem]).
 * - Padding biraz daha azaltıldı (px-1.5 md:px-2).
 * - Sosyal medya ikonları (Discord, Instagram, X, Reddit, YouTube) eklendi.
 * - Genişlik 1480px olarak güncellendi.
 * - Instagram ve Reddit arasındaki boşluk sorunu düzeltildi (X ikonu görünürlüğü).
 * - Link animasyonları kaldırıldı.
 */

const navbarHTML = `
    <!-- Navbar -->
    <!-- Added border-b border-[#bbbbbb] for the line extending across the site -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#ECECEC] shadow-sm font-sans border-b border-[#bbbbbb]">
        <!-- Updated max-width to 1480px as requested -->
        <div class="flex items-center mx-auto w-full max-w-[1480px] h-24 pr-4 sm:pr-8">
            
            <!-- Logo area (Full height red box) -->
            <!-- Reduced padding further (px-1.5 md:px-2) to allow logo to grow by 5% -->
            <a href="index.html" class="flex-none flex items-center justify-center bg-[#FA3624] px-1.5 md:px-2 h-full hover:opacity-90 transition-opacity mr-auto">
                <!-- Increased logo height to h-[4.25rem] (mobile) and h-[5.25rem] (desktop) -> approx 5% larger than h-20 -->
                <img src="images/main-page/logo.png" alt="Heat Interactive" class="h-[4.25rem] md:h-[5.25rem] w-auto object-contain">
            </a>

            <!-- Navigation Links (Desktop) -->
            <nav class="hidden md:flex items-center h-full">
                
                <!-- Home -->
                <div class="flex items-center h-12">
                    <!-- Wrapped text in a span (.nav-text) to control underline width -->
                    <!-- Removed transition-colors to disable animation -->
                    <a href="index.html" class="nav-link h-full flex items-center justify-center px-6 lg:px-8 text-sm lg:text-base font-extrabold tracking-wide uppercase text-black hover:text-[#FA3624]">
                        <!-- Explicitly set hover:border-transparent to prevent any underline appearing on hover -->
                        <span class="nav-text border-b-4 border-transparent pb-1 hover:border-transparent">Home</span>
                    </a>
                    <!-- Divider -->
                    <span class="h-10 w-[2px] bg-gray-400/80 rounded-full"></span>
                </div>

                <!-- Projects -->
                <div class="flex items-center h-12">
                    <a href="projects.html" class="nav-link h-full flex items-center justify-center px-6 lg:px-8 text-sm lg:text-base font-extrabold tracking-wide uppercase text-black hover:text-[#FA3624]">
                        <span class="nav-text border-b-4 border-transparent pb-1 hover:border-transparent">Projects</span>
                    </a>
                    <span class="h-10 w-[2px] bg-gray-400/80 rounded-full"></span>
                </div>

                <!-- About Us -->
                <div class="flex items-center h-12">
                    <a href="aboutus.html" class="nav-link h-full flex items-center justify-center px-6 lg:px-8 text-sm lg:text-base font-extrabold tracking-wide uppercase text-black hover:text-[#FA3624]">
                        <span class="nav-text border-b-4 border-transparent pb-1 hover:border-transparent">About Us</span>
                    </a>
                    <span class="h-10 w-[2px] bg-gray-400/80 rounded-full"></span>
                </div>

                <!-- Contact -->
                <div class="flex items-center h-12">
                    <a href="contact.html" class="nav-link h-full flex items-center justify-center px-6 lg:px-8 text-sm lg:text-base font-extrabold tracking-wide uppercase text-black hover:text-[#FA3624]">
                        <span class="nav-text border-b-4 border-transparent pb-1 hover:border-transparent">Contact</span>
                    </a>
                    <span class="h-10 w-[2px] bg-gray-400/80 rounded-full"></span>
                </div>

                <!-- Social Media Icons (No dividers between them, no divider at the end) -->
                <!-- Adjusted gap to gap-4 to reduce spacing. Swapped X icon to Twitter icon to ensure visibility and prevent gap issues -->
                <div class="flex items-center h-12 ml-6 gap-4">
                    <a href="#" class="text-black hover:text-[#FA3624] transition-colors" aria-label="Discord">
                        <i class="fa-brands fa-discord text-xl lg:text-2xl"></i>
                    </a>
                    <a href="#" class="text-black hover:text-[#FA3624] transition-colors" aria-label="Instagram">
                        <i class="fa-brands fa-instagram text-xl lg:text-2xl"></i>
                    </a>
                    <a href="#" class="text-black hover:text-[#FA3624] transition-colors" aria-label="X (Twitter)">
                        <!-- Using fa-twitter instead of fa-x-twitter to ensure icon renders and no gap is left -->
                        <i class="fa-brands fa-twitter text-xl lg:text-2xl"></i>
                    </a>
                    <a href="#" class="text-black hover:text-[#FA3624] transition-colors" aria-label="Reddit">
                        <i class="fa-brands fa-reddit-alien text-xl lg:text-2xl"></i>
                    </a>
                    <a href="#" class="text-black hover:text-[#FA3624] transition-colors" aria-label="YouTube">
                        <i class="fa-brands fa-youtube text-xl lg:text-2xl"></i>
                    </a>
                </div>

            </nav>

            <!-- Mobile Menu Button -->
            <div class="flex items-center ml-4 md:hidden">
                <button
                    class="w-12 h-12 rounded-md bg-gray-300 border border-gray-400 flex items-center justify-center text-gray-800 text-2xl hover:bg-[#FA3624] hover:text-white hover:border-[#FA3624] transition-all"
                    id="mobile-menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu"
        class="hidden fixed inset-0 z-40 bg-[#ECECEC] pt-32 px-6 md:hidden flex flex-col items-center">
        
        <!-- Close Button -->
        <button
            class="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 text-2xl hover:bg-[#FA3624] hover:text-white transition-colors"
            id="mobile-menu-close">
            <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="flex flex-col space-y-8 text-center">
            <a href="index.html" class="mobile-link text-2xl font-black uppercase tracking-widest text-gray-800 hover:text-[#FA3624] transition-colors">Home</a>
            <a href="projects.html" class="mobile-link text-2xl font-black uppercase tracking-widest text-gray-800 hover:text-[#FA3624] transition-colors">Projects</a>
            <a href="aboutus.html" class="mobile-link text-2xl font-black uppercase tracking-widest text-gray-800 hover:text-[#FA3624] transition-colors">About Us</a>
            <a href="contact.html" class="mobile-link text-2xl font-black uppercase tracking-widest text-gray-800 hover:text-[#FA3624] transition-colors">Contact</a>
            
            <!-- Mobile Social Links -->
            <div class="flex items-center justify-center gap-6 mt-4">
                <a href="#" class="text-gray-800 hover:text-[#FA3624] transition-colors"><i class="fa-brands fa-discord text-3xl"></i></a>
                <a href="#" class="text-gray-800 hover:text-[#FA3624] transition-colors"><i class="fa-brands fa-instagram text-3xl"></i></a>
                <a href="#" class="text-gray-800 hover:text-[#FA3624] transition-colors"><i class="fa-brands fa-twitter text-3xl"></i></a>
                <a href="#" class="text-gray-800 hover:text-[#FA3624] transition-colors"><i class="fa-brands fa-reddit-alien text-3xl"></i></a>
                <a href="#" class="text-gray-800 hover:text-[#FA3624] transition-colors"><i class="fa-brands fa-youtube text-3xl"></i></a>
            </div>
        </div>
    </div>
`;

function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        const textSpan = link.querySelector('.nav-text');

        // Reset base styles
        link.classList.remove('text-[#FA3624]');
        link.classList.add('text-black');

        if (textSpan) {
            textSpan.classList.remove('border-[#FA3624]');
            textSpan.classList.add('border-transparent');
        }

        if (linkPath === currentPath) {
            // Active state: Red text
            link.classList.remove('text-black');
            link.classList.add('text-[#FA3624]');

            // Active underline: Red border on the text span only
            if (textSpan) {
                textSpan.classList.remove('border-transparent');
                textSpan.classList.add('border-[#FA3624]');
            }
        }
    });

    // Mobile links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-[#FA3624]');
            link.classList.remove('text-gray-800');
        } else {
            link.classList.remove('text-[#FA3624]');
            link.classList.add('text-gray-800');
        }
    });
}

function initNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) {
        console.warn('Navbar placeholder element (id="navbar-placeholder") not found.');
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
            mobileMenu.classList.remove('hidden');
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            // Restore scrolling
            document.body.style.overflow = '';
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
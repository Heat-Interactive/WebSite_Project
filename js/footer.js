/**
 * Footer Injection Script
 */

const footerHTML = `
    <footer class="border-t border-gray-300 bg-white/40 backdrop-blur-md pt-16 pb-8 mt-auto">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="text-center md:text-left">
                    <a href="index.html"
                        class="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2 tracking-tight">Heat
                        Interactive</a>
                    <p class="text-sm text-gray-500 mt-2">© 2025 Heat Interactive.</p>
                </div>
                <div class="flex gap-6">
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#FA3624] hover:bg-gray-50 transition-all" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#FA3624] hover:bg-gray-50 transition-all" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#FA3624] hover:bg-gray-50 transition-all" aria-label="Twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
`;

function initFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) {
        // If no placeholder, append to body
        const footerElement = document.createElement('div');
        footerElement.id = 'footer-placeholder';
        footerElement.innerHTML = footerHTML;
        document.body.appendChild(footerElement);
    } else {
        placeholder.innerHTML = footerHTML;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}

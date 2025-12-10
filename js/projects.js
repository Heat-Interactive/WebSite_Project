// Fetch projects from local data
async function fetchProjects() {
    console.log('🔍 Fetching projects from local data...');

    if (window.PROJECTS_DATA) {
        console.log('✅ Successfully loaded projects from window.PROJECTS_DATA');
        return window.PROJECTS_DATA;
    } else {
        console.error('❌ window.PROJECTS_DATA is undefined. Make sure js/projects-data.js is loaded.');
        return [];
    }
}

// Load and display projects
async function loadProjects() {
    const container = document.getElementById('projects-container');

    if (!container) {
        console.error('Projects container not found');
        return;
    }

    // Show loading state
    container.innerHTML = `<div class="text-gray-400 text-center w-full py-10" data-i18n="projects.loading">${getTranslation('projects.loading')}</div>`;

    // Fetch projects
    const projects = await fetchProjects();

    // Clear container
    container.innerHTML = '';

    if (projects.length === 0) {
        container.innerHTML = `<div class="text-gray-400 text-center w-full py-10" data-i18n="projects.empty">${getTranslation('projects.empty')}</div>`;
        return;
    }

    // Create project elements
    projects.forEach(project => {
        // Create card structure matching the design
        const projectCard = document.createElement('a');
        projectCard.href = project.link || '#';
        projectCard.className = 'glass-card rounded-2xl overflow-hidden group flex flex-col h-full transition-transform duration-300 hover:-translate-y-2';

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'h-64 overflow-hidden relative shrink-0';

        const img = document.createElement('img');
        // Use local path or fallback
        img.src = project.project_thumbnail || 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1600&auto=format&fit=crop';
        img.alt = project.project_name;
        img.className = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110';

        // Handle image error
        img.onerror = () => {
            img.src = 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1600&auto=format&fit=crop';
        };

        imgContainer.appendChild(img);

        // Content Container
        const content = document.createElement('div');
        content.className = 'p-8 flex flex-col flex-grow';

        // Title
        const title = document.createElement('h3');
        title.className = 'text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors';
        title.textContent = project.project_name;

        // Description
        const desc = document.createElement('p');
        desc.className = 'text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed';
        desc.textContent = project.project_description;

        // Footer
        const footer = document.createElement('div');
        footer.className = 'mt-auto flex justify-between items-center pt-4 border-t border-white/5';

        // Icons (Static for now, or dynamic tags if added to JSON)
        const iconsDiv = document.createElement('div');
        iconsDiv.className = 'flex gap-3 text-gray-500';

        // Example: Add icons based on tags if available, else default
        if (project.tags && Array.isArray(project.tags)) {
            project.tags.forEach(tag => {
                // Simple mapping or text for now
                // For now keeping the static icons as per previous design, 
                // but ideally these should be dynamic. 
                // Keeping consistent with previous static icons for visual stability
            });
        }

        iconsDiv.innerHTML = `
            <i class="fa-brands fa-unity hover:text-white transition-colors"></i>
            <i class="fa-solid fa-vr-cardboard hover:text-white transition-colors"></i>
        `;

        // Link Text
        const linkText = document.createElement('span');
        linkText.className = 'text-xs text-indigo-400 font-semibold uppercase tracking-wider group-hover:text-white transition-colors';
        linkText.setAttribute('data-i18n', 'projects.view');
        linkText.textContent = getTranslation('projects.view');

        footer.appendChild(iconsDiv);
        footer.appendChild(linkText);

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(footer);

        projectCard.appendChild(imgContainer);
        projectCard.appendChild(content);

        container.appendChild(projectCard);
    });
}

// Load projects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}

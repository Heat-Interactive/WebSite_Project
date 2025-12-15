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
    container.innerHTML = `<div class="text-gray-400 text-center w-full py-10">Loading projects...</div>`;

    // Fetch projects
    const projects = await fetchProjects();

    // Clear container
    container.innerHTML = '';

    if (projects.length === 0) {
        container.innerHTML = `<div class="text-gray-400 text-center w-full py-10">No projects found.</div>`;
        return;
    }

    // Create project elements
    projects.forEach(project => {
        // Create card structure matching the design
        const projectCard = document.createElement('a');
        projectCard.href = project.link || '#';
        projectCard.className = 'bg-[#EBEBEB] border-2 border-gray-300 rounded-3xl overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300';
        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'h-64 overflow-hidden relative shrink-0 bg-gray-300 border-2 border-gray-300 shadow-md';

        const img = document.createElement('img');
        // Use local path or fallback
        img.src = project.project_thumbnail || 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1600&auto=format&fit=crop';
        img.alt = project.project_name;
        img.className = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105';

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
        title.className = 'text-xl font-bold text-[#FA3624] mb-3';
        title.textContent = project.project_name;

        // Description
        const desc = document.createElement('p');
        desc.className = 'text-black text-sm mb-6 line-clamp-3 font-bold leading-relaxed';
        desc.textContent = project.project_description;

        // Footer
        const footer = document.createElement('div');
        footer.className = 'mt-auto flex justify-between items-center pt-6 border-t-2 border-gray-300';

        // Icons
        const iconsDiv = document.createElement('div');
        iconsDiv.className = 'flex gap-3';

        // Two placeholder icons as per design
        iconsDiv.innerHTML = `
            <div class="w-8 h-8 bg-[#D9D9D9] rounded flex items-center justify-center text-gray-500">
                <i class="fa-solid fa-layer-group text-sm"></i>
            </div>
            <div class="w-8 h-8 bg-[#D9D9D9] rounded flex items-center justify-center text-gray-500">
                <i class="fa-solid fa-cube text-sm"></i>
            </div>
        `;

        // Link Text
        const linkText = document.createElement('span');
        linkText.className = 'text-sm text-[#FA3624] font-bold uppercase tracking-wider group-hover:text-red-700 transition-colors';
        linkText.textContent = 'VIEW PROJECT';

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

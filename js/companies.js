// Supabase Configuration
const SUPABASE_URL = 'https://zbifnmzafevagllhzibk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiaWZubXphZmV2YWdsbGh6aWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzgxODksImV4cCI6MjA4MDM1NDE4OX0.qfsnL7UoMXVEDuIswias-VpmKL2WwS0mpyERr8HSfj4';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch companies from Supabase
async function fetchCompanies() {
    console.log('🔍 Fetching companies from Supabase...');
    console.log('📍 Supabase URL:', SUPABASE_URL);

    try {
        const { data, error } = await supabase
            .from('Companies')
            .select('*')
            .order('Name', { ascending: true });

        if (error) {
            console.error('❌ Error fetching companies:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
            return [];
        }

        console.log('✅ Successfully fetched companies:', data);
        console.log('📊 Number of companies:', data ? data.length : 0);
        return data || [];
    } catch (err) {
        console.error('❌ Unexpected error:', err);
        return [];
    }
}

// Load and display companies
async function loadCompanies() {
    const container = document.getElementById('companies-container');

    if (!container) {
        console.error('Companies container not found');
        return;
    }

    // Show loading state
    container.innerHTML = '<div class="text-gray-400 text-sm">Yükleniyor...</div>';

    // Fetch companies
    const companies = await fetchCompanies();

    // Clear container
    container.innerHTML = '';

    if (companies.length === 0) {
        container.innerHTML = '<div class="text-gray-400 text-sm">Henüz iş ortağı eklenmemiş.</div>';
        return;
    }

    // Create company elements
    companies.forEach(company => {
        const companyDiv = document.createElement('div');
        companyDiv.className = 'flex flex-col items-center gap-4 text-center group'; // Vertical stack, centered

        if (company.Logo) {
            // If logo URL exists, use it
            const img = document.createElement('img');
            img.src = company.Logo;
            img.alt = company.Name;
            img.className = 'w-32 h-32 object-contain transition-all duration-500'; // Increased size, no grayscale
            companyDiv.appendChild(img);
        }

        const nameSpan = document.createElement('span');
        nameSpan.textContent = company.Name;
        nameSpan.className = 'text-2xl font-bold text-white'; // Larger text
        companyDiv.appendChild(nameSpan);

        container.appendChild(companyDiv);
    });
}

// Load companies when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCompanies);
} else {
    loadCompanies();
}

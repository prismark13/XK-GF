// js/app.js

// 1. Import all sections
// Make sure these filenames match EXACTLY what is in your 'js/sections' folder.
// If you haven't created a file yet, comment out the import line with //
import { generalAgreements } from './sections/1_general.js';
import { structure1NT }     from './sections/2_1nt_structure.js'; 
import { structure2NT }     from './sections/3_2nt_structure.js';
import { majorResponses }   from './sections/4_major_responses.js';
import { minorResponses }   from './sections/5_minor_responses.js';
import { clubOpening }      from './sections/6_club_opening.js';
import { weakOpenings }     from './sections/7_weak_openings.js';
import { defensiveBidding } from './sections/8_defensive_bidding.js';
import { competitiveBidding } from './sections/9_competitive_bidding.js';
import { carding }          from './sections/10_carding.js';

console.log('Bridge System App Loaded');

// 2. Select the HTML container
const contentDiv = document.getElementById('system-content');

if (contentDiv) {
    // 3. Define the order of sections to display
    // (Ensure you only include variables you have actually imported above)
    const sections = [
        generalAgreements,
        structure1NT,
        structure2NT,
        majorResponses,
        minorResponses,
        clubOpening,
        weakOpenings,
        defensiveBidding,
        competitiveBidding,
        carding
    ];

    // 4. Inject content into the page
    // We join them with an empty string so they appear one after another
    contentDiv.innerHTML = sections.join('');
    
    // 5. Initialize Search Functionality
    initSearch();
} else {
    console.error("Error: Could not find element with id 'system-content'");
}

// --- Search Logic ---
function initSearch() {
    const searchInput = document.getElementById('search-box');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const allDetails = document.querySelectorAll('details');

        allDetails.forEach(detail => {
            // Search in both the summary (title) and the content
            const summaryText = detail.querySelector('summary').innerText.toLowerCase();
            const fullText = detail.innerText.toLowerCase();
            
            // If the search box is empty, show everything and close tabs
            if (term === '') {
                detail.style.display = 'block';
                detail.removeAttribute('open');
                return;
            }

            // Logic: Does the text contain the search term?
            if (fullText.includes(term)) {
                detail.style.display = 'block';
                // Highlight: If the term is inside the hidden content (not just title), open the tab
                if (!summaryText.includes(term)) {
                    detail.setAttribute('open', '');
                }
            } else {
                detail.style.display = 'none';
            }
        });
    });
}
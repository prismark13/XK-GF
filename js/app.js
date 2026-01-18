// js/app.js

// 1. General
import { generalAgreements } from './sections/1_general.js';

// 2. 1NT Structure
import { structure1NT } from './sections/2_1nt_structure.js';

// 3. 2NT Structure
import { opening2NT } from './sections/3_2nt_structure.js';

// 4. Major Responses
import { majorResponses } from './sections/4_major_responses.js';

// 5. Minor Responses
import { minorResponses } from './sections/5_minor_responses.js';

// 6. Club Opening
import { clubOpening } from './sections/6_club_opening.js';

// 7. Slam Bidding
import { slamBidding } from './sections/7_slam_bidding.js';

// 8. Weak Openings
import { weakBids } from './sections/8_weak_openings.js';

// 9. Defensive Bidding (They Open)
import { defensiveBidding } from './sections/9_defensive_bidding.js';

// 10. Competitive Bidding (We Open)
import { competitiveResponses } from './sections/10_competitive_bidding.js';

// 11. Carding
import { carding } from './sections/11_carding.js';


// Combine them into a single list in the exact numerical order (1-11)
const sections = [
    generalAgreements,      // 1
    structure1NT,           // 2
    opening2NT,             // 3
    majorResponses,         // 4
    minorResponses,         // 5
    clubOpening,            // 6
    slamBidding,            // 7
    weakBids,               // 8
    defensiveBidding,       // 9
    competitiveResponses,   // 10
    carding                 // 11
];

// --- Main Render Logic ---
const contentDiv = document.getElementById('system-content');

if (contentDiv) {
    // Inject all HTML content into the main container
    contentDiv.innerHTML = sections.join('');
} else {
    console.error("Error: Could not find div with id 'system-content' in index.html");
}

// --- Search Functionality ---
const searchBox = document.getElementById('search-box');

if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const detailsElements = document.querySelectorAll('details');

        detailsElements.forEach(detail => {
            const summaryText = detail.querySelector('summary').textContent.toLowerCase();
            const contentText = detail.textContent.toLowerCase();
            
            // 1. If search is empty, show all and close them (default state)
            if (term === "") {
                detail.style.display = "block";
                detail.removeAttribute('open');
            } 
            // 2. If text matches, show the section and force it open
            else if (contentText.includes(term)) {
                detail.style.display = "block";
                detail.setAttribute('open', true);
            } 
            // 3. If no match, hide the section
            else {
                detail.style.display = "none";
            }
        });
    });
}
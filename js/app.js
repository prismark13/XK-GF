// Import all section modules with names matching your screenshot structure
import { generalAgreements } from './sections/1_general.js';
import { structure1NT } from './sections/2_1nt_structure.js';
import { opening2NT } from './sections/3_2nt_structure.js';
import { majorResponses } from './sections/4_major_responses.js';
import { minorResponses } from './sections/5_minor_responses.js';
import { clubOpening } from './sections/6_club_opening.js';
import { slamBidding } from './sections/7_slam_bidding.js';
import { weakBids } from './sections/8_weak_openings.js';
import { defensiveBidding } from './sections/9_defensive_bidding.js';
import { competitiveResponses } from './sections/10_competitive_bidding.js';
import { carding } from './sections/11_carding.js';

// Combine them into a single list in the exact order 1-11
const sections = [
    generalAgreements,      // 1. General
    structure1NT,           // 2. 1NT Structure
    opening2NT,             // 3. 2NT Structure
    majorResponses,         // 4. Major Responses
    minorResponses,         // 5. Minor Responses
    clubOpening,            // 6. Club Opening
    slamBidding,            // 7. Slam Bidding
    weakBids,               // 8. Weak Openings
    defensiveBidding,       // 9. Defensive Bidding (They open)
    competitiveResponses,   // 10. Competitive Bidding (We open)
    carding                 // 11. Carding
];

// Render to the DOM
const contentDiv = document.getElementById('system-content');
contentDiv.innerHTML = sections.join('');

// --- Search Functionality ---
const searchBox = document.getElementById('search-box');

searchBox.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(detail => {
        const text = detail.textContent.toLowerCase();
        // If empty search, reset to default (closed)
        if (term === "") {
            detail.style.display = "block";
            detail.removeAttribute('open');
        } 
        // If match found, show and open
        else if (text.includes(term)) {
            detail.style.display = "block";
            detail.setAttribute('open', true);
        } 
        // No match, hide
        else {
            detail.style.display = "none";
        }
    });
});
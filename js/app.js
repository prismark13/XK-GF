// js/app.js

import { generalAgreements }  from './sections/1_general.js';
import { structure1NT }       from './sections/2_1nt_structure.js'; 
import { structure2NT }       from './sections/3_2nt_structure.js';
import { majorResponses }     from './sections/4_major_responses.js';
// Note: You have '4_majors.js' in your folder too. You can delete that one.
import { minorResponses }     from './sections/5_minor_responses.js';
import { clubOpening }        from './sections/6_club_opening.js';
import { slamBidding }        from './sections/7_slam_bidding.js';
import { weakOpenings }       from './sections/8_weak_openings.js';
import { defensiveBidding }   from './sections/9_defensive_bidding.js';
import { competitiveBidding } from './sections/10_competitive_bidding.js';
import { carding }            from './sections/11_carding.js';

console.log('Bridge System App Loaded');

const contentDiv = document.getElementById('system-content');

if (contentDiv) {
    const sections = [
        generalAgreements,
        structure1NT,
        structure2NT,
        majorResponses,
        minorResponses,
        clubOpening,
        slamBidding,        
        weakOpenings,
        defensiveBidding,
        competitiveBidding,
        carding
    ];

    contentDiv.innerHTML = sections.join('');
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
            const summaryText = detail.querySelector('summary').innerText.toLowerCase();
            const fullText = detail.innerText.toLowerCase();
            
            if (term === '') {
                detail.style.display = 'block';
                detail.removeAttribute('open');
                return;
            }

            if (fullText.includes(term)) {
                detail.style.display = 'block';
                if (!summaryText.includes(term)) {
                    detail.setAttribute('open', '');
                }
            } else {
                detail.style.display = 'none';
            }
        });
    });
}
// js/app.js

import { generalAgreements } from './sections/1_general.js';
import { structure1NT } from './sections/2_1nt_structure.js';  // Matches export
import { structure2NT } from './sections/3_2nt_structure.js';  // Matches export
import { majorResponses } from './sections/4_major_responses.js';
import { minorResponses } from './sections/5_minor_responses.js';
import { clubOpening } from './sections/6_club_opening.js';
import { slamBidding } from './sections/7_slam_bidding.js';
import { weakBids } from './sections/8_weak_openings.js';
import { defensiveBidding } from './sections/9_defensive_bidding.js';
import { competitiveResponses } from './sections/10_competitive_bidding.js';
import { carding } from './sections/11_carding.js';

const sections = [
    generalAgreements,
    structure1NT,
    structure2NT,
    majorResponses,
    minorResponses,
    clubOpening,
    slamBidding,
    weakBids,
    defensiveBidding,
    competitiveResponses,
    carding
];

const contentDiv = document.getElementById('system-content');
if (contentDiv) {
    contentDiv.innerHTML = sections.join('');
} else {
    console.error("Could not find div with id 'system-content'");
}

const searchBox = document.getElementById('search-box');
if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const detailsElements = document.querySelectorAll('details');

        detailsElements.forEach(detail => {
            const text = detail.textContent.toLowerCase();
            if (term === "") {
                detail.style.display = "block";
                detail.removeAttribute('open');
            } else if (text.includes(term)) {
                detail.style.display = "block";
                detail.setAttribute('open', true);
            } else {
                detail.style.display = "none";
            }
        });
    });
}
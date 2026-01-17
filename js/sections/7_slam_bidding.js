export const slamBidding = `
<details>
    <summary><span>Slam Bidding & RKC</span></summary>
    <div class="content">
        
        <div class="subheader-bar">General Tools</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="width: 30%; font-weight: 700; color: #0369a1; padding: 10px;">RKC 1430</td>
                        <td style="padding: 10px;">
                            [cite_start]Standard 1430. (1/4, 0/3, 2 w/o Q, 2 w/ Q)[cite: 372].<br>
                            <strong>Exclusion:</strong> Jump to 5-level void. [cite_start]Steps 3014[cite: 374].
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="font-weight: 700; color: #0369a1; padding: 10px;">Gerber</td>
                        <td style="padding: 10px;">
                            [cite_start]4<span class="suit-c">♣</span> over NT starts Gerber[cite: 88, 177].
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="font-weight: 700; color: #0369a1; padding: 10px;">4NT Quantitative</td>
                        <td style="padding: 10px;">
                            [cite_start]Opener accepts with 5NT (to pick a 4-4 minor fit or bid 6 of a 5-card suit) or passes [cite: 93-94].
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Cuebidding & Controls</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 10px;">
                            <strong>Style:</strong> Up the line (1st or 2nd round). [cite_start]Skipping a suit denies control [cite: 376-377].<br>
                            [cite_start]<em style="font-size:0.9em; color:#555;">(Do not show shortness in partner's suit)[cite: 377].</em>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 10px;">
                            <strong>Last Train:</strong> Suit directly below trump. Shows interest but uncertainty. [cite_start]Promises control in skipped suits [cite: 380-381].
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">
                            <strong>Splinters:</strong><br>
                            &bull; [cite_start]<strong>Direct:</strong> ~12-14 HCP (or 6 losers)[cite: 379].<br>
                            &bull; [cite_start]<strong>Delayed:</strong> Denies control in the 4th suit (e.g., 1<span class="suit-s">♠</span>-2<span class="suit-d">♦</span>; 2<span class="suit-s">♠</span>-4<span class="suit-c">♣</span> denies <span class="suit-h">♥</span> ctl)[cite: 378].
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Non-Serious 3NT (NS3N)</div>
        <div style="padding: 15px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-size: 0.95em;">
            [cite_start]<div style="font-weight: 700; color: #b91c1c; margin-bottom: 6px;">Requirements (All Must be Present) [cite: 365-369]:</div>
            <ul style="margin: 0; padding-left: 20px; margin-bottom: 10px;">
                <li>Game Force.</li>
                <li>8+ Card Major Fit.</li>
                <li>Auction at 3M.</li>
                <li>No Natural NT bid previously.</li>
            </ul>
            <div style="font-weight: 700; color: #0369a1; margin-bottom: 6px;">Meaning:</div>
            "Do you want to try for slam?" (Use/Bypass NS3N to answer).
            <div style="margin-top: 8px; font-style: italic; color: #4b5563;">
                <strong>Serious:</strong> Move aggressively with 3 Keys + Q (or 2+Q with texture). [cite_start]3 Keys (either partner) requires at least NS3N [cite: 370-372].
            </div>
            
            <div style="margin-top: 12px; padding: 8px; background-color: #fff; border-left: 3px solid #b91c1c;">
                <strong>Heart Agreement Exception:</strong><br>
                When Hearts agreed (except via 1<span class="suit-h">♥</span>-2NT), <strong>3<span class="suit-s">♠</span></strong> is NS3N.<br>
                [cite_start]<strong>3NT</strong> shows Spade control (Serious)[cite: 376].
            </div>
        </div>

        <div class="subheader-bar">RKC Responses & Follow-ups</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #e0f2fe; border-bottom: 2px solid #e2e8f0;">
                        <th colspan="2" style="padding: 8px; color: #0369a1; text-align: left;">Key Card Responses (1430)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="nested-key" style="width:70px;">Step 1</td><td class="nested-val"><strong>1 or 4</strong> Keycards.</td></tr>
                    <tr><td class="nested-key" style="width:70px;">Step 2</td><td class="nested-val"><strong>0 or 3</strong> Keycards.</td></tr>
                    <tr><td class="nested-key" style="width:70px;">Step 3</td><td class="nested-val"><strong>2</strong> Keycards (No Queen).</td></tr>
                    <tr><td class="nested-key" style="width:70px;">Step 4</td><td class="nested-val"><strong>2</strong> Keycards (With Queen).</td></tr>
                    
                    [cite_start]<tr style="background-color: #f1f5f9; border-top: 1px solid #e2e8f0;"><td colspan="2" style="font-weight:700; color:#475569; padding: 6px;">With Void [cite: 373-374]:</td></tr>
                    <tr><td class="nested-key">5NT</td><td class="nested-val">2 or 4 Keys + Void.</td></tr>
                    <tr><td class="nested-key">6 Void</td><td class="nested-val">1 or 3 Keys + Void (Odd). (Bid 6T if void higher).</td></tr>
                </tbody>
            </table>
            
            <table style="border-collapse: collapse; width: 100%; border-top: 2px solid #cbd5e1;">
                <thead>
                    <tr style="background-color: #e0f2fe; border-bottom: 2px solid #e2e8f0;">
                        <th colspan="2" style="padding: 8px; color: #0369a1; text-align: left;">Follow-ups (Grand Slam Force)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp" style="width: 30%; font-weight: 700; color: #0369a1; padding: 10px; vertical-align: top;">
                            Queen Ask
                        </td>
                        <td style="padding: 10px; vertical-align: top;">
                            (Next non-Trump Step).<br>
                            [cite_start]<strong>Have Q:</strong> Bid King up line OR Jump in Trump (no Kings)[cite: 383].<br>
                            [cite_start]<strong>No Q:</strong> Bid Trump at cheapest level[cite: 384].
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="col-resp" style="font-weight: 700; color: #0369a1; padding: 10px; vertical-align: top;">
                            King Ask (5KQ)
                        </td>
                        <td style="padding: 10px; vertical-align: top;">
                            <em>(Requires 5 Keys + Q).</em><br>
                            [cite_start]<strong>General:</strong> 2nd non-Trump step (or next step after Q shown) asks for Kings up the line[cite: 385, 387, 391].<br>
                            [cite_start]<strong>Specific:</strong> Higher non-Trump step asks for K/Q in <em>that</em> suit[cite: 388, 392].<br>
                            &rarr; [cite_start]<strong>Reply:</strong> 7 with honor, or showable K, or 6T[cite: 389, 393].
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Interference over RKC</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="width: 30%; font-weight: 700; color: #b91c1c; padding: 10px;">DOPI</td>
                        <td style="padding: 10px;">
                            (Below 5 of Trump) [cite_start][cite: 528-529].<br>
                            <strong>Double:</strong> 1 or 4.<br>
                            <strong>Pass:</strong> 0 or 3.<br>
                            <strong>Step 1:</strong> 2 w/o Q.<br>
                            <strong>Step 2:</strong> 2 w/ Q.
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="font-weight: 700; color: #b91c1c; padding: 10px;">DEPO</td>
                        <td style="padding: 10px;">
                            (At/Above 5 of Trump) [cite_start][cite: 530-531].<br>
                            <strong>Double:</strong> Even Keys.<br>
                            <strong>Pass:</strong> Odd Keys.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp" style="font-weight: 700; color: #b91c1c; padding: 10px;">Over Double</td>
                        <td style="padding: 10px;">
                            Answer Blackwood normally. [cite_start]<strong>Redouble</strong> to play[cite: 533].
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</details>
`;
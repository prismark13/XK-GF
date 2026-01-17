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
                            Standard 1430. (1/4, 0/3, 2 w/o Q, 2 w/ Q).<br>
                            <strong>Exclusion:</strong> Jump to 5-level void. Steps 3014.
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="font-weight: 700; color: #0369a1; padding: 10px;">Gerber</td>
                        <td style="padding: 10px;">
                            4<span class="suit-c">♣</span> over NT starts Gerber.
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="font-weight: 700; color: #0369a1; padding: 10px;">4NT Quantitative</td>
                        <td style="padding: 10px;">
                            Opener accepts with 5NT (to pick a 4-4 minor fit or bid 6 of a 5-card suit) or passes.
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
                            <strong>Style:</strong> Up the line (1st or 2nd round). Skipping a suit denies control.<br>
                            <em style="font-size:0.9em; color:#555;">(Do not show shortness in partner's suit).</em>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 10px;">
                            <strong>Last Train:</strong> Suit directly below trump. Shows interest but uncertainty. Promises control in skipped suits.
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">
                            <strong>Splinters:</strong><br>
                            &bull; <strong>Direct:</strong> ~12-14 HCP (or 6 losers).<br>
                            &bull; <strong>Delayed:</strong> Denies control in the 4th suit (e.g., 1<span class="suit-s">♠</span>-2<span class="suit-d">♦</span>; 2<span class="suit-s">♠</span>-4<span class="suit-c">♣</span> denies <span class="suit-h">♥</span> ctl).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Non-Serious 3NT (NS3N)</div>
        <div style="padding: 15px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-size: 0.95em;">
            <div style="font-weight: 700; color: #b91c1c; margin-bottom: 6px;">Requirements (All Must be Present):</div>
            <ul style="margin: 0; padding-left: 20px; margin-bottom: 10px;">
                <li>Game Force.</li>
                <li>8+ Card Major Fit.</li>
                <li>Auction at 3M.</li>
                <li>No Natural NT bid previously.</li>
            </ul>
            <div style="font-weight: 700; color: #0369a1; margin-bottom: 6px;">Meaning:</div>
            "Do you want to try for slam?" (Use/Bypass NS3N to answer).
            <div style="margin-top: 8px; font-style: italic; color: #4b5563;">
                <strong>Serious:</strong> Move aggressively with 3 Keys + Q (or 2+Q with texture). 3 Keys (either partner) requires at least NS3N.
            </div>
            
            <div style="margin-top: 12px; padding: 8px; background-color: #fff; border-left: 3px solid #b91c1c;">
                <strong>Heart Agreement Exception:</strong><br>
                When Hearts agreed (except via 1<span class="suit-h">♥</span>-2NT), <strong>3<span class="suit-s">♠</span></strong> is NS3N.<br>
                <strong>3NT</strong> shows Spade control (Serious).
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
                    
                    <tr style="background-color: #f1f5f9; border-top: 1px solid #e2e8f0;"><td colspan="2" style="font-weight:700; color:#475569; padding: 6px;">With Void:</td></tr>
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
                            <strong>Have Q:</strong> Bid King up line OR Jump in Trump (no Kings).<br>
                            <strong>No Q:</strong> Bid Trump at cheapest level.
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="col-resp" style="font-weight: 700; color: #0369a1; padding: 10px; vertical-align: top;">
                            King Ask (5KQ)
                        </td>
                        <td style="padding: 10px; vertical-align: top;">
                            <em>(Requires 5 Keys + Q).</em><br>
                            <strong>General:</strong> 2nd non-Trump step (or next step after Q shown) asks for Kings up the line.<br>
                            <strong>Specific:</strong> Higher non-Trump step asks for K/Q in <em>that</em> suit.<br>
                            &rarr; <strong>Reply:</strong> 7 with honor, or showable K, or 6T.
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
                            (Below 5 of Trump).<br>
                            <strong>Double:</strong> 1 or 4.<br>
                            <strong>Pass:</strong> 0 or 3.<br>
                            <strong>Step 1:</strong> 2 w/o Q.<br>
                            <strong>Step 2:</strong> 2 w/ Q.
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td class="col-resp" style="font-weight: 700; color: #b91c1c; padding: 10px;">DEPO</td>
                        <td style="padding: 10px;">
                            (At/Above 5 of Trump).<br>
                            <strong>Double:</strong> Even Keys.<br>
                            <strong>Pass:</strong> Odd Keys.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp" style="font-weight: 700; color: #b91c1c; padding: 10px;">Over Double</td>
                        <td style="padding: 10px;">
                            Answer Blackwood normally. <strong>Redouble</strong> to play.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</details>
`;
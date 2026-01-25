export const majorResponses = `
<details class="cat-nt">
    <summary><span>Responses to 1<span class="suit-h">♥</span> / 1<span class="suit-s">♠</span></span></summary>
    <div class="content">
        
        <div class="subheader-bar">Raises</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                        <th style="width: 15%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Bid</th>
                        <th style="width: 25%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Meaning</th>
                        <th style="padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2M</td>
                        <td style="padding: 14px; vertical-align: top;"><strong>Simple Raise</strong></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>3 Trumps (6-9)</strong> OR <strong>4 Trumps (5-7).</strong><br>
                            (Applies to 2<span class="suit-h">♥</span> over 1<span class="suit-h">♥</span>, and 2<span class="suit-s">♠</span> over 1<span class="suit-s">♠</span>).
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;"><strong>Jacoby 2NT</strong></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Forcing Limit+.</strong> 4+ Trumps.
                            <div style="margin-top: 10px; margin-bottom: 10px; padding: 10px; background-color: #fff1f2; border-left: 4px solid #e11d48; font-size: 0.9em; color: #881337;">
                                <strong>Interference:</strong> Systems off. Bid = Control, Pass = Deny, X = Penalty.
                            </div>
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                <tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Any Minimum.</strong> (3D asks: 3H=No short, 3S=C, 3NT=D, 4C=oM).</td></tr>
                                <tr><td class="nested-key">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>Extras + Shortness.</strong> (3H asks: 3S=C, 3NT=D, 4C=oM).</td></tr>
                                <tr><td class="nested-key">3M</td><td class="nested-val"><strong>Extras (18+).</strong> No Shortness.</td></tr>
                                <tr><td class="nested-key">3NT</td><td class="nested-val"><strong>15-17 Semi-Balanced.</strong> (5422).</td></tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">1NT & Intermediate Distributions (Expert Misfits)</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #fdf2f8; font-weight: 700; color: #9d174d; width: 15%;">2NT</td>
                        <td style="padding: 14px; width: 25%;"><strong>6-4 Puppet</strong></td>
                        <td style="padding: 14px;"><strong>14-16 HCP.</strong> 6-card Major and 4-card minor. <br>Forces 3<span class="suit-c">♣</span>; Opener then Pass or bids 3<span class="suit-d">♦</span> to sign off.</td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #fdf2f8; font-weight: 700; color: #9d174d;">3NT</td>
                        <td style="padding: 14px;"><strong>18-19 Balanced</strong></td>
                        <td style="padding: 14px;">Direct rebid over 1NT. <strong>Systems ON</strong> (Stayman/Transfers).</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Gazzilli Deep Tree (1M - 1S/1NT - 2<span class="suit-c">♣</span>)</div>
        <div class="content" style="padding:10px;">
            <div style="margin-bottom: 15px;">
                <div style="font-weight:700; color:#b91c1c;">Opener's Continuation (After 2<span class="suit-d">♦</span> 8+ Relay):</div>
                <table style="border-collapse: collapse; width: 100%; margin-top: 8px;">
                    <tr style="border-bottom: 1px solid #eee; background-color: #f0fdf4;">
                        <td style="padding: 12px; font-weight: 700; width: 15%;">2M</td>
                        <td style="padding: 12px;"><strong>11-15 HCP.</strong> Natural Min (5M-3C+).
                            <div style="padding: 8px; background: #fff; border: 1px solid #e2e8f0; margin-top: 5px; font-size: 0.9em;">
                                <strong>Resp 2NT = GF Checkback.</strong> <br>
                                &bull; 3C = 11-13 (Min of Min). <br>
                                &bull; 3D = 14-15 (Max of Min) w/ Diamonds. <br>
                                &bull; 3M = 14-15 (Max of Min) 5-3-3-2.
                            </div>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: 700; color: #b91c1c;">2oM</td>
                        <td style="padding: 12px;"><strong>17+ HCP.</strong> 4-cards in other major.
                            <div style="padding: 8px; background: #f8fafc; border: 1px solid #cbd5e1; margin-top: 5px; font-size: 0.9em;">
                                <strong>Resp 2S = Ask Shape.</strong> <br>
                                &bull; 2NT = 5-4-2-2 exactly. <br>
                                &bull; 3C/3D = Natural side suit. <br>
                                &bull; 3H = 5-5 Majors.
                            </div>
                        </td>
                    </tr>
                    <tr><td style="padding: 12px; font-weight: 700; color: #b91c1c;">3m/3M</td><td style="padding: 12px;"><strong>17+ HCP.</strong> Natural 5-5 or 6+ Major (Maximum).</td></tr>
                </table>
            </div>
            <div style="padding: 10px; background: #f1f5f9; border-left: 4px solid #64748b; font-size: 0.9em;">
                <strong>Weak Responses (Non-Relay):</strong> 2M (Preference), 2NT (Escape to minors), 2oM (Weak natural).
            </div>
        </div>

        <div class="subheader-bar">2/1 Game Force</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; width: 15%;">2C / 2D</td>
                        <td style="padding: 14px; width: 25%;"><strong>Game Force</strong></td>
                        <td style="padding: 14px;">
                            <strong>Opener's Rebids:</strong> 2M (Catch-all), 2NT (Bal), 3 New (5-5 or 16+).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Passed Hand: Reverse Drury</div>
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; width: 15%;">2C</td>
                        <td style="padding: 14px; width: 25%;"><strong>Drury</strong></td>
                        <td style="padding: 14px;"><strong>8+ HCP.</strong> 3+ support. <br>Opener 2D=Sub-min, 2M=Min, >2M=Slam Try.</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</details>
`;
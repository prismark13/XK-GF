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
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Simple Raise</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>3 Trumps (6-9)</strong> OR <strong>4 Trumps (5-7).</strong><br>
                            (Applies to 2<span class="suit-h">♥</span> over 1<span class="suit-h">♥</span>, and 2<span class="suit-s">♠</span> over 1<span class="suit-s">♠</span>).
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby 2NT</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Forcing Limit+.</strong> 4+ Trumps.
                            
                            <div style="margin-top: 10px; margin-bottom: 10px; padding: 10px; background-color: #fff1f2; border-left: 4px solid #e11d48; font-size: 0.9em; color: #881337;">
                                <strong>Interference over 2NT:</strong> Systems off.<br>
                                <strong>Bid:</strong> Shows control in their suit.<br>
                                <strong>Pass:</strong> Denies control.<br>
                                <strong>Double:</strong> Penalty.<br>
                                <em>(Ignore their doubles unless they bid a suit).</em>
                            </div>

                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-c">♣</span></td>
                                    <td class="nested-val">
                                        <strong>Any Minimum.</strong> (Could have shortness).<br>
                                        &rarr; Resp 3<span class="suit-d">♦</span> asks:
                                        <div style="padding-left:10px; font-size:0.9em; color:#555;">
                                            3<span class="suit-h">♥</span>: No Short.<br>
                                            3<span class="suit-s">♠</span>: <span class="suit-c">♣</span> Short.<br>
                                            3NT: <span class="suit-d">♦</span> Short.<br>
                                            4<span class="suit-c">♣</span>: oM Short.
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-d">♦</span></td>
                                    <td class="nested-val">
                                        <strong>Extras + Shortness.</strong><br>
                                        &rarr; Resp 3<span class="suit-h">♥</span> asks:
                                        <div style="padding-left:10px; font-size:0.9em; color:#555;">
                                            3<span class="suit-s">♠</span>: <span class="suit-c">♣</span> Short.<br>
                                            3NT: <span class="suit-d">♦</span> Short.<br>
                                            4<span class="suit-c">♣</span>: oM Short.
                                        </div>
                                    </td>
                                </tr>

                                <tr><td class="nested-key" style="width:55px;">3M</td><td class="nested-val"><strong>Extras (18+).</strong> No Shortness.</td></tr>
                                
                                <tr><td class="nested-key" style="width:55px;">3NT</td><td class="nested-val"><strong>Extras (15-17).</strong> Semi-Balanced (5422).</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jump Raise</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Over 1<span class="suit-h">♥</span>: Mixed Raise.</strong> (7) 8-10 HCP.<br>
                            <strong>Over 1<span class="suit-s">♠</span>: Limit Raise.</strong> 10-12 HCP.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Good 1-4</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>13-15 HCP.</strong> 4 Trumps. 1 Outside Control.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">1NT Semi-Forcing</div>
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
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Semi-Forcing</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>6 - 12 HCP.</strong> Can include 3-card sub-minimum raise (up to 6).<br>
                            <em>(See Gazzilli section below for 2<span class="suit-c">♣</span> rebid).</em>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Gazzilli (2<span class="suit-c">♣</span> Rebid)</div>
        <div class="content" style="padding:10px;">
             <div style="padding:15px; background-color:#fff1f2; border-left:4px solid #b91c1c; margin-bottom:15px; color:#7f1d1d;">
                <strong>Triggers (Opener Rebids 2<span class="suit-c">♣</span>):</strong><br>
                1. 1<span class="suit-h">♥</span> &rarr; 1<span class="suit-s">♠</span> &rarr; <strong>2<span class="suit-c">♣</span></strong><br>
                2. 1<span class="suit-h">♥</span> &rarr; 1NT &rarr; <strong>2<span class="suit-c">♣</span></strong><br>
                3. 1<span class="suit-s">♠</span> &rarr; 1NT &rarr; <strong>2<span class="suit-c">♣</span></strong>
            </div>

            <div style="margin-bottom: 15px;">
                <div style="font-weight:700; color:#b91c1c; margin-bottom:4px;">The Binary Switch:</div>
                The 2<span class="suit-c">♣</span> rebid is artificial and forcing. It shows <strong>EITHER:</strong>
                <ul style="margin-top:4px; padding-left:20px; color:#334155;">
                    <li><strong>WEAK (11-15):</strong> Natural Club suit (5M-3<span class="suit-c">♣</span>+).</li>
                    <li><strong>STRONG (16+):</strong> ANY hand of 16+ HCP (Balanced, Single-suited, or Two-suited).</li>
                </ul>
            </div>
            
            <div class="table-wrapper">
                <table style="border-collapse: collapse; width: 100%;">
                    <thead>
                        <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                            <th style="width: 20%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Bid</th>
                            <th style="padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background-color: #fff7ed; border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #c2410c;">2<span class="suit-d">♦</span></td>
                            <td style="padding: 14px;">
                                <strong>The Power Relay (8+ HCP).</strong><br>
                                Artificial & Forcing. "Partner, if you are 16+, we are in Game."<br>
                                <em>(Bid this on ALL 8+ hands).</em>
                            </td>
                        </tr>
                        <tr style="border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #0369a1;">2M</td>
                            <td style="padding: 14px;">
                                <strong>Weak Preference (5-7 HCP).</strong><br>
                                "I prefer your Major to Clubs. I am weak."
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="margin-top:15px; margin-bottom:5px; font-weight:700; color:#475569;">Opener's Reveal (After 2<span class="suit-d">♦</span> Relay):</div>
            <div class="table-wrapper">
                <table style="border-collapse: collapse; width: 100%;">
                    <thead>
                        <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                            <th style="width: 20%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Rebid</th>
                            <th style="padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Definition</th>
                            <th style="width: 30%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Implication</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background-color: #f0fdf4; border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #15803d;">2M</td>
                            <td style="padding: 14px;">
                                <strong>WEAK (11-15).</strong><br>
                                Natural Club suit.<br>
                                "I was just a normal opener."
                            </td>
                            <td style="padding: 14px; font-size: 0.9em; color:#555;">
                                Resp passes with 8-10 HCP.<br>
                                (Only way to stop in partscore).
                            </td>
                        </tr>
                        <tr style="border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #b91c1c;">2<span class="suit-s">♠</span></td>
                            <td style="padding: 14px;">
                                <strong>STRONG (16+). Natural.</strong><br>
                                If 1<span class="suit-s">♠</span> Opened: 4<span class="suit-h">♥</span> (4<span class="suit-s">♠</span>-4<span class="suit-h">♥</span>).<br>
                                If 1<span class="suit-h">♥</span> Opened: 4<span class="suit-s">♠</span> (Reverse).
                            </td>
                            <td style="padding: 14px; font-size: 0.9em; color:#555;">
                                Game Forcing.
                            </td>
                        </tr>
                        <tr style="border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #b91c1c;">2NT</td>
                            <td style="padding: 14px;">
                                <strong>STRONG (18-19). Balanced.</strong><br>
                                Too strong to open 1NT.
                            </td>
                            <td style="padding: 14px; font-size: 0.9em; color:#555;">
                                GF. Systems ON.
                            </td>
                        </tr>
                        <tr style="border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #b91c1c;">3m</td>
                            <td style="padding: 14px;">
                                <strong>STRONG (16+). 5+ Minor.</strong><br>
                                Natural. 5M-5m.
                            </td>
                            <td style="padding: 14px; font-size: 0.9em; color:#555;">
                                Game Forcing.
                            </td>
                        </tr>
                         <tr style="border-bottom: 2px solid #e2e8f0;">
                            <td style="padding: 14px; font-weight: 700; color: #b91c1c;">3M</td>
                            <td style="padding: 14px;">
                                <strong>STRONG (16+). 6+ Major.</strong><br>
                                "Picture" Hand. No second suit.
                            </td>
                            <td style="padding: 14px; font-size: 0.9em; color:#555;">
                                Game Forcing.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="subheader-bar">2/1 Game Force</div>
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
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">
                            2<span class="suit-c">♣</span> / 2<span class="suit-d">♦</span><br>
                            <span style="font-weight:normal; font-size:0.9em;">(2<span class="suit-h">♥</span> over 1<span class="suit-s">♠</span>)</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Game Force</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Opener's Rebids:</strong>
                            <table class="nested-table" style="width: 100%;">
                                <tr>
                                    <td class="nested-key" style="width:55px;">2M</td>
                                    <td class="nested-val"><strong>Catch-all.</strong> NB: Does NOT promise 6 cards.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">2NT</td>
                                    <td class="nested-val"><strong>Balanced.</strong> Stoppers in unbid suits. 12-14 or 17-19.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3 New</td>
                                    <td class="nested-val"><strong>5-5 or 5-4.</strong> Reverse strength (16+).</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3M (Jump)</td>
                                    <td class="nested-val"><strong>Extras.</strong> At most 1 loser opp a stiff.</td>
                                </tr>
                                
                                <tr style="background-color:#f1f5f9;"><td colspan="2" style="font-weight:700; color:#475569; padding-top:6px; padding-bottom:4px;">Responder after 3M Jump:</td></tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3NT</td>
                                    <td class="nested-val">Bad trump support, but slam suitable.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">4<span class="suit-c">♣</span></td>
                                    <td class="nested-val">Attempt to rebid Responder's suit.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">4X</td>
                                    <td class="nested-val">Club cue for M.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Other Responses</div>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Natural</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            (Over 1<span class="suit-h">♥</span>). 4+ Spades. F1.<br>
                            (If GF, denies longer suit).
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Weak Jump</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            (Over 1<span class="suit-h">♥</span>). 6+ Spades. 5-9 HCP.<br>
                            (0-2 Hearts).
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">
                            3<span class="suit-c">♣</span> / 3<span class="suit-d">♦</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Invitational</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>6+ Suit.</strong> 10-12 HCP.<br>
                            Denies 4 cards in other Major.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;">3<span class="suit-h">♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Invitational</strong><br>
                            (Over 1<span class="suit-s">♠</span>)
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>6+ Hearts.</strong> 10-12 HCP.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Preemptive</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            (Applies to 4<span class="suit-h">♥</span> over 1<span class="suit-h">♥</span>, and 4<span class="suit-s">♠</span> over 1<span class="suit-s">♠</span>).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Passed Hand Responses (Reverse Drury)</div>
        <div class="table-wrapper">
             <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #e0f2fe; border-bottom: 2px solid #e2e8f0;">
                        <th colspan="3" style="padding: 8px 14px; text-align: left; color: #0369a1; font-weight: 700;">
                            Applies over: P (P) 1M (P)  OR  P (P) 1M (X)<br>
                            <span style="font-weight:normal; font-size:0.9em; color:#555;">(Off if overcaller bids a suit)</span>
                        </th>
                    </tr>
                    <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                        <th style="width: 15%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Bid</th>
                        <th style="width: 25%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Meaning</th>
                        <th style="padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Reverse Drury</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Good 8+ HCP.</strong> 3+ Trumps.<br>
                            
                            <table class="nested-table" style="width: 100%; margin-top: 8px;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                
                                <tr>
                                    <td class="nested-key" style="width:55px;">2<span class="suit-d">♦</span></td>
                                    <td class="nested-val">
                                        <strong>Solid Opener.</strong> No Slam Interest.<br>
                                        <span style="font-size:0.9em; color:#555;">Responder Rebid:</span><br>
                                        &bull; 2M = Weak Raise.<br>
                                        &bull; Other = Limit Raise+, Game Try.
                                    </td>
                                </tr>

                                <tr>
                                    <td class="nested-key" style="width:55px;">2M</td>
                                    <td class="nested-val"><strong>Minimum / Sub-minimum.</strong> Sign-off.</td>
                                </tr>

                                <tr>
                                    <td class="nested-key" style="width:55px;">> 2M</td>
                                    <td class="nested-val"><strong>Slam Try.</strong> (Except 4M = To Play).</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Weak Raise</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>4 - 7 (bad 8) HCP.</strong> 3-4 pieces.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</details>
`;
export const minorResponses = `
<details>
    <summary><span>Responses to 1<span class="suit-c">♣</span> / 1<span class="suit-d">♦</span></span></summary>
    <div class="content">
        
        <div class="subheader-bar">Direct Responses</div>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">1<span class="suit-d">♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Natural</strong><br>
                            (Over 1<span class="suit-c">♣</span>)
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>4+ Diamonds.</strong> 6+ HCP.<br>
                            Denies a 4-card Major (unless 5+ <span class="suit-d">♦</span> & Inv+).
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Natural</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>4+ Card Suit.</strong> 6+ HCP.<br>
                            Bids up the line.<br>
                            <span style="font-size:0.9em; color:#555;">(1<span class="suit-s">♠</span> promises 5+m, 4<span class="suit-s">♠</span>, <4<span class="suit-h">♥</span>).</span>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Balanced</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>6 - 9 HCP.</strong> No 4-card Major.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Invitational</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>10 - 12 HCP.</strong> No 4-card Major.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Balanced</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>13 - 15 HCP.</strong> No 4-card Major.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Inverted Minors</div>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2m</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Inverted Minor</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Limit Raise+ (10+ HCP).</strong> 5+ Cards.<br>
                            Forces to 3m.<br>
                            
                            <table class="nested-table" style="width: 100%; margin-top: 8px;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid (Stopper Showing):</td></tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">2<span class="suit-d">♦</span></td>
                                    <td class="nested-val"><strong>Diamond Stop.</strong> (> Dead Min).</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">2<span class="suit-h">♥</span></td>
                                    <td class="nested-val"><strong>Heart Stop.</strong> Denies <span class="suit-d">♦</span> Stop.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">2<span class="suit-s">♠</span></td>
                                    <td class="nested-val"><strong>Spade Stop.</strong> Denies <span class="suit-d">♦</span> & <span class="suit-h">♥</span>.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">2NT</td>
                                    <td class="nested-val"><strong>12-14 Bal.</strong> Stoppers in all suits.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3m</td>
                                    <td class="nested-val"><strong>Minimum.</strong> Non-forcing.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Weak Jumps & Other</div>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">
                            2<span class="suit-d">♦</span> / 2<span class="suit-c">♣</span><br>
                            <span style="font-weight:normal; font-size:0.9em;">(2om)</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Special</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>1<span class="suit-d">♦</span> &rarr; 2<span class="suit-c">♣</span>:</strong> Game Force.<br>
                            <strong>1<span class="suit-c">♣</span> &rarr; 2<span class="suit-d">♦</span>:</strong> Weak.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;">
                            2<span class="suit-h">♥</span> / 2<span class="suit-s">♠</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Weak Jump</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>0 - 5 HCP.</strong> 6+ Cards.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3m</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Mixed Raise</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5 - 8 HCP.</strong> 5+ card support.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3om</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Invitational / Other</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>1<span class="suit-d">♦</span> &rarr; 3<span class="suit-c">♣</span>:</strong> Invitational.<br>
                            <strong>1<span class="suit-c">♣</span> &rarr; 3<span class="suit-d">♦</span>:</strong> N/A (or Splinter).
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">3M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Splinter</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            Singleton/Void.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Special Sequences</div>
        <div class="table-wrapper">
             <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="width: 35%; background-color: #f1f5f9; font-weight: 700; color: #334155; padding: 14px; vertical-align: top;">
                             1<span class="suit-c">♣</span> - 1M; 2<span class="suit-c">♣</span> - 2<span class="suit-d">♦</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Artificial Game Force.</strong>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #334155; padding: 14px; vertical-align: top;">
                             1<span class="suit-d">♦</span> - 1<span class="suit-s">♠</span>; 2<span class="suit-d">♦</span> - 2<span class="suit-h">♥</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Artificial Game Force.</strong>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #334155; padding: 14px; vertical-align: top;">
                             1<span class="suit-c">♣</span> - 1<span class="suit-s">♠</span>; 2<span class="suit-c">♣</span> - 2<span class="suit-h">♥</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Weak.</strong> 5<span class="suit-s">♠</span> + 4+<span class="suit-h">♥</span>.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #334155; padding: 14px; vertical-align: top;">
                             1<span class="suit-d">♦</span> - 1<span class="suit-h">♥</span>; 2<span class="suit-d">♦</span> - 2<span class="suit-s">♠</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Artificial Game Force.</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Checkback (1m - 1M - 1NT)</div>
        <div class="table-wrapper">
             <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="background-color: #e0f2fe; border-bottom: 2px solid #e2e8f0;">
                        <td colspan="3" style="padding: 8px 14px; color: #0369a1; font-weight: 700;">
                            Start: 1m &rarr; 1M &rarr; 1NT
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="width:15%; background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-c">♣</span></td>
                        <td style="width:25%; padding: 14px; vertical-align: top;">
                            <strong>Forces 2<span class="suit-d">♦</span></strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            Used for <strong>Weak</strong> (sign-off) or <strong>Invitational</strong> hands.<br>
                            <strong>Continuations (after forced 2<span class="suit-d">♦</span>):</strong>
                            <div style="margin-top:6px; font-size:0.9em;">
                                &bull; <strong>Pass:</strong> Weak with <span class="suit-d">♦</span>.<br>
                                &bull; <strong>2M:</strong> Invitational (5+M). (Op 2N=Max).<br>
                                &bull; <strong>2oM:</strong> 4-5 Inv (if 1<span class="suit-h">♥</span>-1N-2<span class="suit-c">♣</span>-2<span class="suit-d">♦</span>-2<span class="suit-s">♠</span>).<br>
                                &bull; <strong>3<span class="suit-c">♣</span>:</strong> Weak with <span class="suit-c">♣</span>.<br>
                                &bull; <strong>3<span class="suit-d">♦</span>:</strong> Inv with <span class="suit-d">♦</span>.<br>
                                &bull; <strong>3M:</strong> Strongly Inv (6+M).
                            </div>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">2<span class="suit-d">♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Game Force</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Checkback.</strong><br>
                            Opener shows 3-card support for M first.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #334155; padding: 14px; vertical-align: top;">
                            Other
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Specifics</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            &bull; <strong>1m-1<span class="suit-h">♥</span>-1N-2<span class="suit-s">♠</span>:</strong> 4<span class="suit-s">♠</span>-4<span class="suit-h">♥</span> Inv.<br>
                            &bull; <strong>1m-1<span class="suit-s">♠</span>-1N-2<span class="suit-h">♥</span>:</strong> 5<span class="suit-s">♠</span>-4<span class="suit-h">♥</span> (Pass or Correct).<br>
                            &bull; <strong>Jump to 3X:</strong> Slam Try (UPH).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Opener Rebid 2NT (1x - 1y - 2NT)</div>
        <div class="table-wrapper">
             <table style="border-collapse: collapse; width: 100%;">
                <tbody>
                    <tr style="background-color: #e0f2fe; border-bottom: 2px solid #e2e8f0;">
                        <td colspan="3" style="padding: 8px 14px; color: #0369a1; font-weight: 700;">
                            18-19 HCP (Balanced)
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="width:15%; background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">All Suits</td>
                        <td style="width:25%; padding: 14px; vertical-align: top;">
                            <strong>Transfers</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            Responder bids transfer to next higher suit.<br>
                            &bull; Opener <strong>must accept</strong> to <span class="suit-d">♦</span> and Resp's suit (sign-off).<br>
                            &bull; Transfer to <strong>New Suit</strong> = GF.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">
                            1<span class="suit-d">♦</span> - 1N - 2N
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Exceptions</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            &bull; <strong>3<span class="suit-c">♣</span>:</strong> To Play.<br>
                            &bull; <strong>3<span class="suit-d">♦</span>:</strong> To Play.<br>
                            &bull; <strong>3M:</strong> Fragment (Short in oM).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="margin-top: 20px; border-left: 4px solid #8b5cf6; background-color: #f5f3ff; padding: 15px; border-radius: 4px;">
            <div style="font-weight: 700; color: #6d28d9; margin-bottom: 8px;">SPIRAL CONVENTION</div>
            <div style="margin-bottom: 10px; color: #4b5563;">
                <strong>Trigger:</strong> 1m &rarr; 1M &rarr; 2M (Min Opener, 3-4 card support).<br>
                <strong>Bid:</strong> Responder bids <strong>2(M+1)</strong>.
            </div>
            <div style="font-weight: 600; color: #4b5563; margin-bottom: 4px;">Meaning: 11+ HCP Ask. Opener Replies:</div>
            <ul style="list-style-type: none; padding-left: 0; margin: 0; color: #374151;">
                <li style="padding: 4px 0; border-bottom: 1px dashed #ddd;">
                    <span style="font-weight:700; color:#6d28d9; width:60px; display:inline-block;">Step 1</span> 
                    Minimum. <strong>3 pieces</strong> in M.
                </li>
                <li style="padding: 4px 0; border-bottom: 1px dashed #ddd;">
                    <span style="font-weight:700; color:#6d28d9; width:60px; display:inline-block;">Step 2</span> 
                    Non-Minimum. <strong>3 pieces</strong> in M.
                </li>
                <li style="padding: 4px 0; border-bottom: 1px dashed #ddd;">
                    <span style="font-weight:700; color:#6d28d9; width:60px; display:inline-block;">Step 3</span> 
                    Minimum. <strong>4 pieces</strong> in M.
                </li>
                <li style="padding: 4px 0;">
                    <span style="font-weight:700; color:#6d28d9; width:60px; display:inline-block;">Step 4</span> 
                    Non-Minimum. <strong>4 pieces</strong> in M.
                </li>
            </ul>
        </div>

    </div>
</details>
`;
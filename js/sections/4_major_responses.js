export const majorResponses = `
<details>
    <summary><span>Responses to 1<span class="suit-h">♥</span> / 1<span class="suit-s">♠</span></span></summary>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Natural</strong><br>
                            (Over 1<span class="suit-h">♥</span>)
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>4+ Spades.</strong> 6+ HCP.<br>
                            If GF, denies a longer suit (may bypass 1<span class="suit-s">♠</span> with GF values).
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Semi-Forcing</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>6 - 12 HCP.</strong><br>
                            Can include 3-card sub-minimum raise (up to 6).<br>
                            
                            <table class="nested-table" style="width: 100%; margin-top: 8px;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1;">Opener Rebid: 2<span class="suit-c">♣</span></td></tr>
                                <tr>
                                    <td colspan="2" style="padding: 4px 8px; font-size: 0.9em;">
                                        (3+ <span class="suit-c">♣</span>, > bal min).
                                    </td>
                                </tr>
                                <tr style="background-color:#f1f5f9;"><td colspan="2" style="font-weight:700; color:#475569;">Responder:</td></tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">2<span class="suit-s">♠</span></td>
                                    <td class="nested-val"><strong>Limit Raise</strong> in Clubs.</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-c">♣</span></td>
                                    <td class="nested-val"><strong>Courtesy Raise.</strong> Caters to 17-19.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">
                            2<span class="suit-c">♣</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Game Force</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>2+ Clubs.</strong> 13+ HCP.<br>
                            (May have 4<span class="suit-s">♠</span> over 1<span class="suit-h">♥</span> even if short <span class="suit-c">♣</span>).
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">
                            2<span class="suit-d">♦</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Game Force</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5+ Diamonds.</strong> 13+ HCP.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;">2<span class="suit-h">♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <div style="margin-bottom:8px;">
                                <strong>Over 1<span class="suit-h">♥</span>:</strong> Raise
                            </div>
                            <div>
                                <strong>Over 1<span class="suit-s">♠</span>:</strong> Game Force
                            </div>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <div style="margin-bottom:8px;">
                                <strong>3 Hts (6-9)</strong> OR <strong>4 Hts (5-7).</strong>
                            </div>
                            <div style="border-top:1px solid #e2e8f0; padding-top:6px;">
                                <strong>5+ Hearts.</strong> 13+ HCP. Natural.
                            </div>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                             <div style="margin-bottom:8px;">
                                <strong>Over 1<span class="suit-h">♥</span>:</strong> Weak Jump
                            </div>
                            <div>
                                <strong>Over 1<span class="suit-s">♠</span>:</strong> Raise
                            </div>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <div style="margin-bottom:8px;">
                                <strong>6+ Spades.</strong> 5-9 HCP. (0-2 <span class="suit-h">♥</span>).
                            </div>
                            <div style="border-top:1px solid #e2e8f0; padding-top:6px;">
                                <strong>3 Sps (6-9)</strong> OR <strong>4 Sps (5-7).</strong>
                            </div>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby 2NT</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Forcing Limit+.</strong> 4+ Trumps.
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
                            <div style="margin-bottom:8px;">
                                <strong>Over 1<span class="suit-h">♥</span>:</strong> Mixed
                            </div>
                            <div>
                                <strong>Over 1<span class="suit-s">♠</span>:</strong> Invitational
                            </div>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <div style="margin-bottom:8px;">
                                <strong>(7) 8 - 10 HCP.</strong> 4+ Hearts.
                            </div>
                            <div style="border-top:1px solid #e2e8f0; padding-top:6px;">
                                <strong>6+ Hearts.</strong> 10-12 HCP.
                            </div>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                             <div style="margin-bottom:8px;">
                                <strong>Over 1<span class="suit-h">♥</span>:</strong> Splinter
                            </div>
                            <div>
                                <strong>Over 1<span class="suit-s">♠</span>:</strong> Limit Raise
                            </div>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <div style="margin-bottom:8px;">
                                <strong>Shortness (S).</strong> Min GF.
                            </div>
                            <div style="border-top:1px solid #e2e8f0; padding-top:6px;">
                                <strong>4+ Spades.</strong> Limit Raise values.
                            </div>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Good 1-4</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>13-15 HCP.</strong> 4 Trumps.<br>
                            1 Outside Control.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">
                            4<span class="suit-c">♣</span> / 4<span class="suit-d">♦</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Splinter</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            Singleton/Void.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;">4<span class="suit-h">♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Over 1<span class="suit-h">♥</span>:</strong> Preempt<br>
                            <strong>Over 1<span class="suit-s">♠</span>:</strong> Splinter
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Over 1<span class="suit-s">♠</span> shows Heart Shortness.
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Preempt</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Weak.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
export const structure2NT = `
<details>
    <summary><span>2NT Structure (20 - 21)</span></summary>
    <div class="content">
        <div class="table-wrapper">
            <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                        <th style="width: 15%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Bid</th>
                        <th style="width: 25%; padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Meaning</th>
                        <th style="padding: 12px; text-align: left; color: #64748b; font-weight: 700;">Continuations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Stayman</strong><br>
                            Asks for 4+ card Major.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-d">♦</span></td>
                                    <td class="nested-val"><strong>No 4M.</strong> (Follow-ups below)</td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td>
                                    <td class="nested-val"><strong>4+ Hearts.</strong></td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td>
                                    <td class="nested-val"><strong>4+ Spades.</strong></td>
                                </tr>

                                <tr style="background-color:#f1f5f9;"><td colspan="2" style="font-weight:700; color:#475569; padding-top:6px; padding-bottom:4px;">Responder over 3<span class="suit-d">♦</span> (Smolen):</td></tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td>
                                    <td class="nested-val"><strong>5<span class="suit-s">♠</span> + 4<span class="suit-h">♥</span>.</strong></td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td>
                                    <td class="nested-val"><strong>5<span class="suit-h">♥</span> + 4<span class="suit-s">♠</span>.</strong></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-d">3♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby Transfer</strong><br>
                            Transfer to <span class="suit-h">Hearts</span> (5+).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Accept.</strong></td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-h">3♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby Transfer</strong><br>
                            Transfer to <span class="suit-s">Spades</span> (5+).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Accept.</strong></td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Relay to 3NT</strong><br>
                            For Minor Slam Tries.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">3NT</td><td class="nested-val"><strong>Forced.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Club One-Suiter</strong><br>
                            Game Forcing.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Natural.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;"><span class="suit-d">4♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Diamond One-Suiter</strong><br>
                            Game Forcing.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Natural.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-h">4♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Minors 5-5+</strong><br>
                            Shortness in <span class="suit-h">Hearts</span> (0-1).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Game Forcing.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Minors 5-5+</strong><br>
                            Shortness in <span class="suit-s">Spades</span> (0-1).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Game Forcing.
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Quantitative</strong><br>
                            Invite to 6NT.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">Pass</td><td class="nested-val"><strong>Minimum.</strong></td></tr>
                                <tr><td class="nested-key" style="width:55px;">6NT</td><td class="nested-val"><strong>Accept.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
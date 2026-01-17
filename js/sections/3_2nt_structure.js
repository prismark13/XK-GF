export const majorResponses = `
<details>
    <summary><span>Responses to 1<span class="suit-h">♥</span> / 1<span class="suit-s">♠</span></span></summary>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">1NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Semi-Forcing</strong><br>
                            6 - 12 HCP. Can have 3-card support (for Weak Raise).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">Pass</td><td class="nested-val"><strong>Minimum.</strong> Balanced.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2m</td><td class="nested-val"><strong>Natural.</strong> 3+ cards.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2M</td><td class="nested-val"><strong>Minimum.</strong> 6+ cards.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2oM</td><td class="nested-val"><strong>Reverse.</strong> 16+ HCP.</td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">
                            2<span class="suit-c">♣</span> / 2<span class="suit-d">♦</span><br>
                            <span style="font-weight:normal; font-size:0.9em;">(Also 2<span class="suit-h">♥</span> over 1<span class="suit-s">♠</span>)</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>2/1 Game Force</strong><br>
                            13+ HCP. Natural (2<span class="suit-c">♣</span> can be 2+ cards).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">2M</td><td class="nested-val"><strong>Catch-all.</strong> No extras promised.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2NT</td><td class="nested-val"><strong>Balanced.</strong> 12-14 or 18-19.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">Jump</td><td class="nested-val"><strong>Solid Suit / Splinter.</strong></td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="background-color: #e0f2fe; border-bottom: 2px solid #e2e8f0;">
                        <td colspan="3" style="padding: 8px 14px; color: #0369a1; font-weight: 700;">Major Suit Raises</td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Constructive Raise</strong><br>
                            3-4 Trumps. 8 - 10 HCP.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Non-forcing.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3M</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Mixed Raise</strong><br>
                            4+ Trumps. 7 - 9 HCP (Comp/Shape).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             Preemptive / Competitive.
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby 2NT</strong><br>
                            4+ Trumps. Limit Raise+.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Any Minimum.</strong> (Resp 3<span class="suit-d">♦</span> asks).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>Extras.</strong> Unspecified Shortness.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Extras.</strong> No Shortness.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Club Shortness.</strong> (Low).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3NT</td><td class="nested-val"><strong>Diamond Shortness.</strong> (Mid).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Other Major Shortness.</strong> (High).</td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">
                            3X / 4X
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Splinters / Special</strong><br>
                            Game Forcing.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">3m</td><td class="nested-val"><strong>Inv.</strong> 6+ suit, denies 4 oM.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Splinter.</strong> (Over 1<span class="suit-h">♥</span>). Singleton <span class="suit-s">♠</span>.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3NT</td><td class="nested-val"><strong>13-15.</strong> Balanced.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">4m</td><td class="nested-val"><strong>Splinter.</strong> Singleton m.</td></tr>
                            </table>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</details>
`;
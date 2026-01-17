export const clubOpening = `
<details>
    <summary><span>2<span class="suit-b">♣</span> Strong Opening</span></summary>
    <div class="content">
        
        <div class="subheader-bar">Responses to 2<span class="suit-b">♣</span></div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th style="width: 15%">Bid</th>
                        <th style="width: 20%">Meaning</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="suit-r">2♦</span></td>
                        <td><strong>Waiting</strong></td>
                        <td>Artificial. Majority of hands (0+ HCP).</td>
                    </tr>
                    <tr>
                        <td>2<span class="suit-r">♥</span>/2<span class="suit-b">♠</span><br>3<span class="suit-b">♣</span>/3<span class="suit-r">♦</span></td>
                        <td><strong>Positive</strong></td>
                        <td>8+ HCP. Good 5+ suit (2 of top 3 honors).</td>
                    </tr>
                    <tr>
                        <td>2NT</td>
                        <td><strong>Balanced</strong></td>
                        <td>8-10 HCP. Rare (prefer 2<span class="suit-r">♦</span>).</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Opener's Rebids (after 2<span class="suit-b">♣</span> - 2<span class="suit-r">♦</span>)</div>
        <div class="table-wrapper">
            <table>
                <tbody>
                    <tr style="border-bottom: 2px solid #eee;">
                        <td style="width: 15%"><strong>2NT</strong></td>
                        <td style="width: 20%"><strong>22-24 Bal</strong></td>
                        <td>
                            <strong>System ON</strong> (4-Way Transfers):
                            <div style="margin-top: 4px; font-size: 0.9em;">
                                3<span class="suit-b">♣</span>&rarr;<span class="suit-r">♥</span> &nbsp;|&nbsp; 
                                3<span class="suit-r">♦</span>&rarr;<span class="suit-b">♠</span> &nbsp;|&nbsp; 
                                3<span class="suit-r">♥</span>&rarr;<span class="suit-b">♣</span> &nbsp;|&nbsp; 
                                3<span class="suit-b">♠</span>&rarr;<span class="suit-r">♦</span>
                            </div>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #eee;">
                        <td><span class="suit-r"><strong>2♥</strong></span></td>
                        <td><strong>Kokish Relay</strong></td>
                        <td>
                            Shows <span class="suit-r">♥</span> <strong>OR</strong> 25+ Balanced.<br>
                            <strong>Resp 2<span class="suit-b">♠</span> forced.</strong> Opener rebids:
                            <table class="nested-table" style="margin-top:5px;">
                                <tr>
                                    <td class="nested-key">2NT</td>
                                    <td class="nested-val"><strong>25+ Bal.</strong> (Transfers ON).</td>
                                </tr>
                                <tr>
                                    <td class="nested-key">3<span class="suit-r">♥</span></td>
                                    <td class="nested-val">
                                        <strong>Natural <span class="suit-r">♥</span> (6+). GF.</strong>
                                        <div style="font-size: 0.85em; margin-top:2px; color:#555;">
                                            3<span class="suit-b">♠</span> (Nat), 3NT (Non-Serious), 4m (Cue), 4<span class="suit-r">♥</span> (Fast Arrival).
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nested-key">3m</td>
                                    <td class="nested-val">Natural <span class="suit-r">♥</span> + Minor (5-4). GF.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>2<span class="suit-b">♠</span></td>
                        <td><strong>Natural</strong></td>
                        <td>
                            5+ Spades. GF.<br>
                            <em style="font-size:0.9em">3<span class="suit-b">♣</span> is 2nd Negative (0-3 HCP).</em>
                        </td>
                    </tr>
                    <tr>
                        <td>3<span class="suit-b">♣</span></td>
                        <td><strong>Natural</strong></td>
                        <td>
                            5+ Clubs. GF.<br>
                            <em style="font-size:0.9em">3<span class="suit-r">♦</span> is 2nd Negative (0-3 HCP).</em>
                        </td>
                    </tr>
                    <tr>
                        <td>3<span class="suit-r">♦</span></td>
                        <td><strong>Natural</strong></td>
                        <td>
                            5+ Diamonds. GF.<br>
                            <em style="font-size:0.9em">3<span class="suit-r">♥</span> is 2nd Negative (0-3 HCP).</em>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
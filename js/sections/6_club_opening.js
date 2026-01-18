export const clubOpening = `
<details>
    <summary><span>2<span class="suit-c">♣</span> Strong Opening</span></summary>
    <div class="content">
        
        <div class="subheader-bar">Responses to 2<span class="suit-c">♣</span></div>
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
                        <td><span class="suit-d">2♦</span></td>
                        <td><strong>Waiting</strong></td>
                        <td>Artificial. Majority of hands (0+ HCP).</td>
                    </tr>
                    <tr>
                        <td>2<span class="suit-h">♥</span>/2<span class="suit-s">♠</span><br>3<span class="suit-c">♣</span>/3<span class="suit-d">♦</span></td>
                        <td><strong>Positive</strong></td>
                        <td>8+ HCP. Good 5+ suit (2 of top 3 honors).</td>
                    </tr>
                    <tr>
                        <td>2NT</td>
                        <td><strong>Balanced</strong></td>
                        <td>8-10 HCP. Rare (prefer 2<span class="suit-d">♦</span>).</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Opener's Rebids (after 2<span class="suit-c">♣</span> - 2<span class="suit-d">♦</span>)</div>
        <div class="table-wrapper">
            <table>
                <tbody>
                    <tr style="border-bottom: 2px solid #eee;">
                        <td style="width: 15%"><strong>2NT</strong></td>
                        <td style="width: 20%"><strong>22-24 Bal</strong></td>
                        <td>
                            <strong>Systems ON.</strong><br>
                            Continue as if opening 2NT (Stayman, Transfers, etc.).
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #eee;">
                        <td><span class="suit-h"><strong>2♥</strong></span></td>
                        <td><strong>Kokish Relay</strong></td>
                        <td>
                            Shows <span class="suit-h">♥</span> <strong>OR</strong> 25+ Balanced.<br>
                            <strong>Resp 2<span class="suit-s">♠</span> forced.</strong> Opener rebids:
                            <table class="nested-table" style="margin-top:8px; border-left: 3px solid #cbd5e1;">
                                <tr>
                                    <td class="nested-key">2NT</td>
                                    <td class="nested-val">
                                        <strong>25+ Bal.</strong> GF.<br>
                                        <strong>Systems ON.</strong> Continue as if opening 2NT.
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nested-key">3<span class="suit-c">♣</span></td>
                                    <td class="nested-val">
                                        <strong>5+ <span class="suit-h">♥</span> (21+ HCP).</strong><br>
                                        &rarr; Resp 3<span class="suit-d">♦</span>: 2nd Negative (may pass 3<span class="suit-h">♥</span>).<br>
                                        &rarr; Other: Natural GF.
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nested-key">3<span class="suit-d">♦</span></td>
                                    <td class="nested-val">
                                        <strong>5+ <span class="suit-h">♥</span> & 4+ <span class="suit-d">♦</span>. GF (25+).</strong><br>
                                        <div style="font-size:0.9em; margin-top:2px;">
                                            3<span class="suit-h">♥</span>: Punt.<br>
                                            3<span class="suit-s">♠</span>/3NT: Natural.<br>
                                            4<span class="suit-c">♣</span>: <span class="suit-h">♥</span> Raise. 4<span class="suit-d">♦</span>: <span class="suit-d">♦</span> Raise.
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nested-key">3<span class="suit-h">♥</span></td>
                                    <td class="nested-val">
                                        <strong>5+ <span class="suit-h">♥</span> & 4+ <span class="suit-c">♣</span>. GF (25+).</strong><br>
                                        <div style="font-size:0.9em; margin-top:2px;">
                                            3<span class="suit-s">♠</span>/3NT: Natural.<br>
                                            4<span class="suit-c">♣</span>: <span class="suit-c">♣</span> Raise. 4<span class="suit-d">♦</span>: <span class="suit-h">♥</span> Raise.
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nested-key">3<span class="suit-s">♠</span></td>
                                    <td class="nested-val">
                                        <strong>5+ <span class="suit-h">♥</span> & 4 <span class="suit-s">♠</span>. GF (25+).</strong><br>
                                        <div style="font-size:0.9em; margin-top:2px;">
                                            3NT: Natural.<br>
                                            4<span class="suit-c">♣</span>: Strong <span class="suit-h">♥</span> Raise. 4<span class="suit-d">♦</span>: Strong <span class="suit-s">♠</span> Raise.<br>
                                            4<span class="suit-h">♥</span>: Weak <span class="suit-h">♥</span> Raise. 4<span class="suit-s">♠</span>: Weak <span class="suit-s">♠</span> Raise.
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>2<span class="suit-s">♠</span></td>
                        <td><strong>Natural</strong></td>
                        <td>
                            5+ Spades. GF.<br>
                            <em style="font-size:0.9em">3<span class="suit-c">♣</span> is 2nd Negative (0-3 HCP).</em>
                        </td>
                    </tr>
                    <tr>
                        <td>3<span class="suit-c">♣</span></td>
                        <td><strong>Natural</strong></td>
                        <td>
                            5+ Clubs. GF.<br>
                            <em style="font-size:0.9em">3<span class="suit-d">♦</span> is 2nd Negative (0-3 HCP).</em>
                        </td>
                    </tr>
                    <tr>
                        <td>3<span class="suit-d">♦</span></td>
                        <td><strong>Natural</strong></td>
                        <td>
                            5+ Diamonds. GF.<br>
                            <em style="font-size:0.9em">3<span class="suit-h">♥</span> is 2nd Negative (0-3 HCP).</em>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
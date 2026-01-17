export const majorResponses = `
<details>
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
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;">
                            Splinters
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Shortness (GF)</strong>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Over 1<span class="suit-h">♥</span>:</strong> 3<span class="suit-s">♠</span>, 4<span class="suit-c">♣</span>, 4<span class="suit-d">♦</span>.<br>
                            <strong>Over 1<span class="suit-s">♠</span>:</strong> 4<span class="suit-c">♣</span>, 4<span class="suit-d">♦</span>, 4<span class="suit-h">♥</span>.<br>
                            (12-14 HCP or 6 losers).
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
                            <strong>6 - 12 HCP.</strong> Can include 3-card sub-minimum raise.<br>
                            <div style="margin-top: 6px; padding: 6px; background-color: #f0f9ff; border-radius: 4px;">
                                <strong>Opener's 2<span class="suit-c">♣</span> Rebid (17+ check):</strong><br>
                                Resp 2<span class="suit-s">♠</span> = Limit Raise in <span class="suit-c">♣</span>.<br>
                                Resp 3<span class="suit-c">♣</span> = Courtesy Raise.
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;">
                            2<span class="suit-h">♥</span>
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Game Force</strong><br>
                            (Over 1<span class="suit-s">♠</span>)
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5+ Hearts.</strong> 13+ HCP. Natural.
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
    </div>
</details>
`;
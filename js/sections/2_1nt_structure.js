export const structure1NT = `
<details>
    <summary><span>1NT Structure (15 - 17)</span></summary>
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
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Stayman</strong><br>
                            Has 4+ card Major.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2M</td><td class="nested-val"><strong>4-card Major.</strong></td></tr>
                                <tr><td class="nested-key" style="width:55px;">2<span class="suit-d">♦</span></td><td class="nested-val"><strong>No Major.</strong> (Responder's follow-ups below):</td></tr>
                                
                                <tr style="background-color:#f1f5f9;"><td colspan="2" style="font-weight:700; color:#475569; padding-top:6px; padding-bottom:4px;">Over 2<span class="suit-d">♦</span>:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2<span class="suit-h">♥</span></td><td class="nested-val"><strong>Garbage.</strong> Weak, short <span class="suit-d">♦</span>. (Drop dead).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2NT</td><td class="nested-val"><strong>Invitational.</strong></td></tr>
                                <tr><td class="nested-key" style="width:55px;">3m</td><td class="nested-val"><strong>Natural.</strong> Game Forcing.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3M</td><td class="nested-val"><strong>Smolen.</strong> 5oM + 4M. Game Forcing.</td></tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-d">2♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby Transfer</strong><br>
                            Transfer to <span class="suit-h">Hearts</span> (5+).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2<span class="suit-h">♥</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit.</td></tr>

                                <tr style="background-color:#f1f5f9;"><td colspan="2" style="font-weight:700; color:#475569; padding-top:6px; padding-bottom:4px;">Over 2<span class="suit-h">♥</span>:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2<span class="suit-s">♠</span></td><td class="nested-val"><strong>Natural.</strong> Shows 5+ <span class="suit-s">♠</span> (5-5 Majors). Inv+.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2NT</td><td class="nested-val"><strong>Invitational.</strong> Balanced (5 Hearts).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3m</td><td class="nested-val"><strong>Natural.</strong> GF (5 Hearts + 4+ Minor).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Invitational.</strong> 6+ Hearts.</td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-h">2♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby Transfer</strong><br>
                            Transfer to <span class="suit-s">Spades</span> (5+).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Rebid:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2<span class="suit-s">♠</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit.</td></tr>

                                <tr style="background-color:#f1f5f9;"><td colspan="2" style="font-weight:700; color:#475569; padding-top:6px; padding-bottom:4px;">Over 2<span class="suit-s">♠</span>:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">2NT</td><td class="nested-val"><strong>Invitational.</strong> Balanced (5 Spades).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3m</td><td class="nested-val"><strong>Natural.</strong> GF (5 Spades + 4+ Minor).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Natural.</strong> 5+ <span class="suit-h">♥</span> (5-5 Majors). GF.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Invitational.</strong> 6+ Spades.</td></tr>
                            </table>
                        </td>
                    </tr>

                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Range Ask / Clubs</strong><br>
                            Bal Inv OR Clubs.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">2NT</td><td class="nested-val"><strong>Minimum.</strong></td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Maximum.</strong></td></tr>
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">GF Club Rebids (Over 2NT / 3<span class="suit-c">♣</span>):</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3X</td><td class="nested-val"><strong>Shortness.</strong> Strong Club suit.</td></tr>
                                <tr><td class="nested-key" style="width:55px;">4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Natural.</strong> Forcing, no shortness.</td></tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Diamonds or Minors</strong><br>
                            Diamonds (Weak/GF)<br>or Minors (Weak).
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Forced.</strong> (Bad Diamonds/Weak Minors).</td></tr>
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">GF Diamonds (Over 3<span class="suit-c">♣</span>):</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>Natural.</strong> Good Diamonds (Inv+).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">3M/4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Diamond suit.</td></tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Puppet Stayman</strong><br>
                            Asks for 5-card Major.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener 3<span class="suit-d">♦</span> (No 5M):</td></tr>
                                <tr><td class="nested-key" style="width:55px;">Resp 3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Has 4 Spades.</strong> <br>&rarr; Opener 3<span class="suit-s">♠</span> (4S) / 3NT (No 4S).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">Resp 3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Has 4 Hearts.</strong> <br>&rarr; Opener 3NT (To Play) / 4<span class="suit-h">♥</span> (To Play).</td></tr>
                                
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Shows 5M:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">Op 3<span class="suit-h">♥</span></td><td class="nested-val"><strong>5 Hearts.</strong> <br>&rarr; Resp 3<span class="suit-s">♠</span> (Agrees <span class="suit-h">♥</span>, Slam Try).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">Op 3<span class="suit-s">♠</span></td><td class="nested-val"><strong>5 Spades.</strong> <br>&rarr; Resp 4<span class="suit-h">♥</span> (Agrees <span class="suit-s">♠</span>, Slam Try).</td></tr>

                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener 3NT:</td></tr>
                                <tr><td class="nested-key" style="width:55px;">Meaning</td><td class="nested-val"><strong>4=5=2=2.</strong> <br>(Resp 4-level bids are Transfers).</td></tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;"><span class="suit-d">3♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5-5 Minors</strong><br>
                            Game Forcing.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">3M</td><td class="nested-val"><strong>Stopper.</strong></td></tr>
                                <tr><td class="nested-key" style="width:55px;">4m</td><td class="nested-val"><strong>Set Suit.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    
                     <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-h">3♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5-5 Majors</strong><br>
                            Invitational.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                           <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">Pass</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                                <tr><td class="nested-key" style="width:55px;">4M</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    
                     <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5-5 Majors</strong><br>
                            Game Forcing.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">4M</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Gerber</strong><br>
                            Ace Asking.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <table class="nested-table" style="width: 100%;">
                                <tr>
                                    <td class="nested-key" style="width:55px;">4<span class="suit-d">♦</span></td><td class="nested-val" style="padding-right:15px;"><strong>0 or 4 Aces.</strong></td>
                                    <td class="nested-key" style="width:55px;">4<span class="suit-h">♥</span></td><td class="nested-val"><strong>1 Ace.</strong></td>
                                </tr>
                                <tr>
                                    <td class="nested-key" style="width:55px;">4<span class="suit-s">♠</span></td><td class="nested-val" style="padding-right:15px;"><strong>2 Aces.</strong></td>
                                    <td class="nested-key" style="width:55px;">4NT</td><td class="nested-val"><strong>3 Aces.</strong></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-d">4♦</span> / <span class="suit-h">4♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Texas Transfer</strong><br>
                            Transfer to <span class="suit-h">♥</span> / <span class="suit-s">♠</span>.
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key" style="width:55px;">Step</td><td class="nested-val"><strong>Sign Off.</strong> No Slam Interest.</td></tr>
                            </table>
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
                                <tr><td class="nested-key" style="width:55px;">5NT</td><td class="nested-val"><strong>Pick a Slam.</strong> (Minors or 6NT).</td></tr>
                                <tr><td class="nested-key" style="width:55px;">6X</td><td class="nested-val"><strong>5-card Suit.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Vs Interference</div>
        <div class="table-wrapper">
             <table>
                <thead>
                    <tr><th style="width: 20%">Context</th><th style="width: 20%">Our Call</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vs 2<span class="suit-c">♣</span></td>
                        <td><strong>Double</strong></td>
                        <td><strong>Stayman.</strong> Systems On.</td>
                    </tr>
                    <tr>
                        <td>Vs Suit</td>
                        <td><strong>2NT</strong></td>
                        <td><strong>Lebensohl.</strong> Relay to 3<span class="suit-c">♣</span>. (Weak or GF w/ Stop).</td>
                    </tr>
                    <tr>
                        <td>Vs Suit</td>
                        <td><strong>Double</strong></td>
                        <td><strong>Negative.</strong> Takeout (4+ oM).</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
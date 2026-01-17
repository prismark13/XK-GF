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
                            [cite_start]Has 4+ card Major. [cite: 36]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">2<span class="suit-d">♦</span></td><td class="nested-val"><strong>No Major.</strong> [cite: 97]</td></tr>
                                [cite_start]<tr><td class="nested-key">2M</td><td class="nested-val"><strong>4-card Major.</strong> [cite: 106, 118]</td></tr>
                                <tr><td class="nested-key">3M</td><td class="nested-val"><strong>Smolen.</strong> (After 2<span class="suit-d">♦</span>). [cite_start]5oM + 4M, GF. [cite: 103, 104]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-d">2♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby Transfer</strong><br>
                            [cite_start]Shows 5+ <span class="suit-h">Hearts</span>. [cite: 37]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">2<span class="suit-h">♥</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit). [cite: 38]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit. [cite: 39]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-h">2♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Jacoby Transfer</strong><br>
                            [cite_start]Shows 5+ <span class="suit-s">Spades</span>. [cite: 40]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">2<span class="suit-s">♠</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit). [cite: 41]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit. [cite: 42]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Range Ask / Clubs</strong><br>
                            [cite_start]Bal Inv OR Clubs. [cite: 43]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">2NT</td><td class="nested-val"><strong>Minimum.</strong> [cite: 44]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Maximum.</strong> [cite: 45]</td></tr>
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">GF Club Rebids (Over 2NT / 3<span class="suit-c">♣</span>):</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-d">♦</span>/<span class="suit-h">♥</span>/<span class="suit-s">♠</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Club suit. [cite: 47]</td></tr>
                                [cite_start]<tr><td class="nested-key">4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Natural.</strong> Forcing, no shortness. [cite: 48]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">2NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Diamonds or Minors</strong><br>
                            [cite_start]Diamonds (Weak/GF)<br>or Minors (Weak). [cite: 49]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Forced.</strong> (Bad Diamonds/Weak Minors). [cite: 50]</td></tr>
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">GF Diamonds (Over 3<span class="suit-c">♣</span>):</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>Natural.</strong> Good Diamonds (Inv+). [cite: 52]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-h">♥</span>/<span class="suit-s">♠</span>/4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Diamond suit. [cite: 53]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Puppet Stayman</strong><br>
                            [cite_start]Asks for 5-card Major. [cite: 54]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener 3<span class="suit-d">♦</span> (No 5M)[cite: 55]:</td></tr>
                                <tr><td class="nested-key" style="padding-left:10px;">Resp 3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Has 4 Spades.</strong> <br>&rarr; [cite_start]Opener 3<span class="suit-s">♠</span> (4S) / 3NT (No 4S). [cite: 56, 57, 58]</td></tr>
                                <tr><td class="nested-key" style="padding-left:10px;">Resp 3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Has 4 Hearts.</strong> <br>&rarr; [cite_start]Opener 3NT (To Play) / 4<span class="suit-h">♥</span> (To Play). [cite: 59, 60, 61]</td></tr>
                                
                                <tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener Shows 5M:</td></tr>
                                <tr><td class="nested-key" style="padding-left:10px;">Opener 3<span class="suit-h">♥</span></td><td class="nested-val"><strong>5 Hearts.</strong> <br>&rarr; [cite_start]Resp 3<span class="suit-s">♠</span> (Agrees <span class="suit-h">♥</span>, Slam Try). [cite: 62, 63]</td></tr>
                                <tr><td class="nested-key" style="padding-left:10px;">Opener 3<span class="suit-s">♠</span></td><td class="nested-val"><strong>5 Spades.</strong> <br>&rarr; [cite_start]Resp 4<span class="suit-h">♥</span> (Agrees <span class="suit-s">♠</span>, Slam Try). [cite: 65, 67]</td></tr>

                                [cite_start]<tr style="background-color:#e0f2fe;"><td colspan="2" style="font-weight:700; color:#0369a1; padding-top:6px; padding-bottom:4px;">Opener 3NT[cite: 68]:</td></tr>
                                [cite_start]<tr><td class="nested-key" style="padding-left:10px;">Meaning</td><td class="nested-val"><strong>4=5=2=2.</strong> <br>(Resp 4-level bids are Transfers). [cite: 69]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #d97706; padding: 14px; vertical-align: top;"><span class="suit-d">3♦</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5-5 Minors</strong><br>
                            [cite_start]Game Forcing. [cite: 70]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">3M</td><td class="nested-val"><strong>Stopper.</strong> [cite: 71, 72]</td></tr>
                                [cite_start]<tr><td class="nested-key">4m</td><td class="nested-val"><strong>Set Suit.</strong> [cite: 74, 75]</td></tr>
                            </table>
                        </td>
                    </tr>
                     <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-h">3♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5-5 Majors</strong><br>
                            [cite_start]Invitational. [cite: 76]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                           <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key">Pass</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                                [cite_start]<tr><td class="nested-key">4M</td><td class="nested-val"><strong>To Play.</strong> [cite: 77, 85, 86]</td></tr>
                            </table>
                        </td>
                    </tr>
                     <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">3<span class="suit-s">♠</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>5-5 Majors</strong><br>
                            [cite_start]Game Forcing. [cite: 81]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                            <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">4M</td><td class="nested-val"><strong>To Play.</strong> [cite: 85, 86]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4<span class="suit-c">♣</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Gerber</strong><br>
                            [cite_start]Ace Asking. [cite: 88]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key">4<span class="suit-d">♦</span></td><td class="nested-val"><strong>0 or 4 Aces.</strong></td></tr>
                                <tr><td class="nested-key">4<span class="suit-h">♥</span></td><td class="nested-val"><strong>1 Ace.</strong></td></tr>
                                <tr><td class="nested-key">4<span class="suit-s">♠</span></td><td class="nested-val"><strong>2 Aces.</strong></td></tr>
                                <tr><td class="nested-key">4NT</td><td class="nested-val"><strong>3 Aces.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #e53e3e; padding: 14px; vertical-align: top;"><span class="suit-d">4♦</span> / <span class="suit-h">4♥</span></td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Texas Transfer</strong><br>
                            [cite_start]Transfer to <span class="suit-h">♥</span> / <span class="suit-s">♠</span>. [cite: 89, 91]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <table class="nested-table" style="width: 100%;">
                                [cite_start]<tr><td class="nested-key">Step</td><td class="nested-val"><strong>Sign Off.</strong> No Slam Interest. [cite: 89, 91]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp" style="background-color: #f1f5f9; font-weight: 700; color: #0369a1; padding: 14px; vertical-align: top;">4NT</td>
                        <td style="padding: 14px; vertical-align: top;">
                            <strong>Quantitative</strong><br>
                            [cite_start]Invite to 6NT. [cite: 93]
                        </td>
                        <td style="padding: 14px; vertical-align: top;">
                             <table class="nested-table" style="width: 100%;">
                                <tr><td class="nested-key">Pass</td><td class="nested-val"><strong>Minimum.</strong></td></tr>
                                [cite_start]<tr><td class="nested-key">5NT</td><td class="nested-val"><strong>Pick a Slam.</strong> (Minors or 6NT). [cite: 93]</td></tr>
                                [cite_start]<tr><td class="nested-key">6X</td><td class="nested-val"><strong>5-card Suit.</strong> [cite: 94]</td></tr>
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
                        [cite_start]<td><strong>Stayman.</strong> Systems On. [cite: 96, 509]</td>
                    </tr>
                    <tr>
                        <td>Vs Suit</td>
                        <td><strong>2NT</strong></td>
                        <td><strong>Lebensohl.</strong> Relay to 3<span class="suit-c">♣</span>. (Weak or GF w/ Stop)[cite_start]. [cite: 515]</td>
                    </tr>
                    <tr>
                        <td>Vs Suit</td>
                        <td><strong>Double</strong></td>
                        [cite_start]<td><strong>Negative.</strong> Takeout (4+ oM). [cite: 512, 513]</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
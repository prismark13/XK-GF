export const structure1NT = `
<details>
    <summary><span>1NT Structure (15 - 17)</span></summary>
    <div class="content">
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th style="width: 15%">Bid</th>
                        <th style="width: 25%">Meaning</th>
                        <th>Continuations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">2<span class="suit-c">♣</span></td>
                        <td>
                            <strong>Stayman</strong><br>
                            [cite_start]Has 4+ card Major. [cite: 36]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr><td class="nested-key">2<span class="suit-d">♦</span></td><td class="nested-val"><strong>No Major.</strong> [cite: 97]</td></tr>
                                [cite_start]<tr><td class="nested-key">2M</td><td class="nested-val"><strong>4-card Major.</strong> [cite: 106, 118]</td></tr>
                                <tr><td class="nested-key">3M</td><td class="nested-val"><strong>Smolen.</strong> (After 2<span class="suit-d">♦</span>). [cite_start]5oM + 4M, GF. [cite: 103, 104]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">2♦</span></td>
                        <td>
                            <strong>Jacoby Transfer</strong><br>
                            [cite_start]Shows 5+ <span class="suit-h">Hearts</span>. [cite: 37]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr><td class="nested-key">2<span class="suit-h">♥</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit). [cite: 38]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit. [cite: 39]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-h">2♥</span></td>
                        <td>
                            <strong>Jacoby Transfer</strong><br>
                            [cite_start]Shows 5+ <span class="suit-s">Spades</span>. [cite: 40]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr><td class="nested-key">2<span class="suit-s">♠</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit). [cite: 41]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit. [cite: 42]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2<span class="suit-s">♠</span></td>
                        <td>
                            <strong>Range Ask / Clubs</strong><br>
                            [cite_start]Bal Inv OR Clubs. [cite: 43]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr><td class="nested-key">2NT</td><td class="nested-val"><strong>Minimum.</strong> [cite: 44]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Maximum.</strong> [cite: 45]</td></tr>
                                <tr style="background-color:#f0f9ff;"><td colspan="2" style="font-weight:bold; color:#0369a1; padding-top:8px;">GF Club Rebids (Over 2NT / 3<span class="suit-c">♣</span>):</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-d">♦</span>/<span class="suit-h">♥</span>/<span class="suit-s">♠</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Club suit. [cite: 47]</td></tr>
                                [cite_start]<tr><td class="nested-key">4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Natural.</strong> Forcing, no shortness. [cite: 48]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2NT</td>
                        <td>
                            <strong>Diamonds or Minors</strong><br>
                            [cite_start]Diamonds (Weak/GF)<br>or Minors (Weak). [cite: 49]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Forced.</strong> (Bad Diamonds/Weak Minors). [cite: 50]</td></tr>
                                <tr style="background-color:#f0f9ff;"><td colspan="2" style="font-weight:bold; color:#0369a1; padding-top:8px;">GF Diamonds (Over 3<span class="suit-c">♣</span>):</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>Natural.</strong> Good Diamonds (Inv+). [cite: 52]</td></tr>
                                [cite_start]<tr><td class="nested-key">3<span class="suit-h">♥</span>/<span class="suit-s">♠</span>/4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Diamond suit. [cite: 51]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">3<span class="suit-c">♣</span></td>
                        <td>
                            <strong>Puppet Stayman</strong><br>
                            [cite_start]Asks for 5-card Major. [cite: 54]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr style="background-color:#f8fafc"><td colspan="2" style="font-weight:600; padding-top:5px;">Opener 3<span class="suit-d">♦</span> (No 5M): [cite: 55]</td></tr>
                                [cite_start]<tr><td class="nested-key" style="padding-left:10px;">Resp 3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Has 4 Spades.</strong> [cite: 56] <br>&rarr; [cite_start]Opener 3<span class="suit-s">♠</span> (4S) [cite: 57] [cite_start]/ 3NT (No 4S)[cite: 58].</td></tr>
                                [cite_start]<tr><td class="nested-key" style="padding-left:10px;">Resp 3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Has 4 Hearts.</strong> [cite: 59] <br>&rarr; [cite_start]Opener 3NT (To Play) [cite: 60] [cite_start]/ 4<span class="suit-h">♥</span> (To Play)[cite: 61].</td></tr>
                                
                                <tr style="background-color:#f8fafc"><td colspan="2" style="font-weight:600; padding-top:5px;">Opener Shows 5M:</td></tr>
                                [cite_start]<tr><td class="nested-key" style="padding-left:10px;">Opener 3<span class="suit-h">♥</span></td><td class="nested-val"><strong>5 Hearts.</strong> [cite: 62] <br>&rarr; [cite_start]Resp 3<span class="suit-s">♠</span> (Agrees <span class="suit-h">♥</span>, Slam Try)[cite: 63].</td></tr>
                                [cite_start]<tr><td class="nested-key" style="padding-left:10px;">Opener 3<span class="suit-s">♠</span></td><td class="nested-val"><strong>5 Spades.</strong> [cite: 65] <br>&rarr; [cite_start]Resp 4<span class="suit-h">♥</span> (Agrees <span class="suit-s">♠</span>, Slam Try)[cite: 67].</td></tr>

                                <tr style="background-color:#f8fafc"><td colspan="2" style="font-weight:600; padding-top:5px;">Opener 3NT:</td></tr>
                                [cite_start]<tr><td class="nested-key" style="padding-left:10px;">Meaning</td><td class="nested-val"><strong>4=5=2=2.</strong> [cite: 68] [cite_start]<br>(Resp 4-level bids are Transfers [cite: 69]).</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">3♦</span></td>
                        <td>
                            <strong>5-5 Minors</strong><br>
                            [cite_start]Game Forcing. [cite: 70]
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">3M</td><td class="nested-val"><strong>Stopper.</strong></td></tr>
                                [cite_start]<tr><td class="nested-key">4m</td><td class="nested-val"><strong>Set Suit.</strong> [cite: 74, 75]</td></tr>
                            </table>
                        </td>
                    </tr>
                     <tr>
                        <td class="col-resp"><span class="suit-h">3♥</span></td>
                        <td>
                            <strong>5-5 Majors</strong><br>
                            [cite_start]Invitational. [cite: 76]
                        </td>
                        <td>
                           <table class="nested-table">
                                <tr><td class="nested-key">Pass</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                                [cite_start]<tr><td class="nested-key">4M</td><td class="nested-val"><strong>To Play.</strong> [cite: 77, 85]</td></tr>
                            </table>
                        </td>
                    </tr>
                     <tr>
                        <td class="col-resp">3<span class="suit-s">♠</span></td>
                        <td>
                            <strong>5-5 Majors</strong><br>
                            [cite_start]Game Forcing. [cite: 81]
                        </td>
                        <td>
                            <table class="nested-table">
                                [cite_start]<tr><td class="nested-key">4M</td><td class="nested-val"><strong>To Play.</strong> [cite: 85, 86]</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">4<span class="suit-c">♣</span></td>
                        <td>
                            <strong>Gerber</strong><br>
                            [cite_start]Ace Asking. [cite: 88]
                        </td>
                        <td>
                             <table class="nested-table">
                                <tr><td class="nested-key">4<span class="suit-d">♦</span></td><td class="nested-val"><strong>0 or 4.</strong></td></tr>
                                <tr><td class="nested-key">4<span class="suit-h">♥</span></td><td class="nested-val"><strong>1.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">4♦</span> / <span class="suit-h">4♥</span></td>
                        <td>
                            <strong>Texas Transfer</strong><br>
                            [cite_start]Transfer to <span class="suit-h">♥</span> / <span class="suit-s">♠</span>. [cite: 89, 91]
                        </td>
                        <td>
                             <table class="nested-table">
                                <tr><td class="nested-key">Step</td><td class="nested-val"><strong>Sign Off.</strong> No Slam Interest.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">4NT</td>
                        <td>
                            <strong>Quantitative</strong><br>
                            [cite_start]Invite to 6NT. [cite: 93]
                        </td>
                        <td>
                             <table class="nested-table">
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
                        [cite_start]<td><strong>Stayman.</strong> Systems On. [cite: 509]</td>
                    </tr>
                    <tr>
                        <td>Vs Suit</td>
                        <td><strong>2NT</strong></td>
                        <td><strong>Lebensohl.</strong> Relay to 3<span class="suit-c">♣</span>. (Weak or GF w/ Stop)[cite_start]. [cite: 515]</td>
                    </tr>
                    <tr>
                        <td>Vs Suit</td>
                        <td><strong>Double</strong></td>
                        [cite_start]<td><strong>Negative.</strong> Takeout (4+ oM). [cite: 512]</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
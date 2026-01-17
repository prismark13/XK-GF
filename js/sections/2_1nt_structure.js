export const structure1NT = `
<details>
    <summary><span>1NT Structure (15 - 17) [cite: 2]</span></summary>
    <div class="content">
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Resp</th><th class="col-meaning">Meaning</th><th class="col-cont">Continuations</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">2<span class="suit-c">&clubs;</span></td>
                        <td><strong>Stayman</strong></td>
                        <td>
                            Promises 4-card Major. [cite: 36]<br>
                            <strong>Smolen:</strong> 1N-2C-2D-3M = 5oM + 4M, GF. [cite: 103, 104]
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">2&diams;</span></td>
                        <td><strong>Jacoby Tfer</strong></td>
                        <td>
                            Transfer to <span class="suit-h">Hearts</span> (5+). [cite: 37]<br>
                            <strong>2<span class="suit-h">&hearts;</span></strong> = Normal Accept. [cite: 38]<br>
                            <strong>3<span class="suit-h">&hearts;</span></strong> = Super Accept. [cite: 39]
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-h">2&hearts;</span></td>
                        <td><strong>Jacoby Tfer</strong></td>
                        <td>
                            Transfer to <span class="suit-s">Spades</span> (5+). [cite: 40]<br>
                            <strong>2<span class="suit-s">&spades;</span></strong> = Normal Accept. [cite: 41]<br>
                            <strong>3<span class="suit-s">&spades;</span></strong> = Super Accept. [cite: 42]
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2<span class="suit-s">♠</span></td>
                        <td><strong>Range / Clubs</strong></td>
                        <td>
                            Either Balanced Inv OR Clubs (Weak or Strong). <br>
                            <strong>2NT</strong> = Min.<br>
                            <strong>3<span class="suit-c">&clubs;</span></strong> = Max. [cite: 44, 45]
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2NT</td>
                        <td><strong>Diamonds</strong></td>
                        <td>
                            Diamonds (Weak or Strong) OR Both Minors Weak. [cite: 49]<br>
                            <strong>3<span class="suit-c">&clubs;</span></strong> = Forced (Diamonds worse than Qxx). [cite: 50]<br>
                            <strong>3<span class="suit-d">&diams;</span></strong> = Qxx or better diamonds. [cite: 52]
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">3<span class="suit-c">&clubs;</span></td>
                        <td><strong>Puppet</strong></td>
                        <td>
                            Puppet Stayman. Asks for 5-card Major. <br>
                            (With 2 4-card majors, responder starts with 2<span class="suit-c">&clubs;</span>). 
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">4<span class="suit-c">&clubs;</span></td>
                        <td><strong>Gerber</strong></td>
                        <td>Ace Asking. [cite: 88]</td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">4&diams;</span></td>
                        <td><strong>Texas</strong></td>
                        <td>
                            Transfer to <span class="suit-h">Hearts</span>. Sign off or RKC. [cite: 89]
                        </td>
                    </tr>
                     <tr>
                        <td class="col-resp"><span class="suit-h">4&hearts;</span></td>
                        <td><strong>Texas</strong></td>
                        <td>
                            Transfer to <span class="suit-s">Spades</span>. Sign off or RKC. [cite: 91]
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Vs Interference</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Situation</th><th class="col-meaning">Agreement</th><th class="col-cont">Detail</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">Vs 2<span class="suit-c">&clubs;</span></td>
                        <td><strong>Systems On</strong></td>
                        <td><strong>Dbl</strong> = Stayman. Systems on. [cite: 509]</td>
                    </tr>
                    <tr>
                        <td class="col-resp">Vs Suit</td>
                        <td><strong>Lebensohl</strong></td>
                        <td>
                            (Transfer Lebensohl variant implied by "Sep '25" update).<br>
                            <strong>2NT</strong> = Puppet to 3<span class="suit-c">&clubs;</span>. [cite: 515]<br>
                            <strong>Dbl (1-suiter)</strong> = Takeout. [cite: 512]<br>
                            <strong>Dbl (2-suiter)</strong> = Penalty interest. [cite: 513]
                        </td>
                    </tr>
                     <tr>
                        <td class="col-resp">Vs Penalty X</td>
                        <td><strong>Runouts</strong></td>
                        <td>
                            <strong>Pass</strong> = Forces Rdbl (scramble). [cite: 483]<br>
                            <strong>Rdbl</strong> = 5+ card suit (single suiter).<br>
                            <strong>Suit Bid</strong> = Lower of 2 touching suits (4+). [cite: 484, 485]
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
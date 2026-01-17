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
                            Has 4+ card Major.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">2<span class="suit-d">♦</span></td><td class="nested-val"><strong>No Major.</strong></td></tr>
                                <tr><td class="nested-key">2M</td><td class="nested-val"><strong>4-card Major.</strong></td></tr>
                                <tr><td class="nested-key">3M</td><td class="nested-val"><strong>Smolen.</strong> (After 2<span class="suit-d">♦</span>). 5oM + 4M, GF.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">2♦</span></td>
                        <td>
                            <strong>Jacoby Transfer</strong><br>
                            Shows 5+ <span class="suit-h">Hearts</span>.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">2<span class="suit-h">♥</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit).</td></tr>
                                <tr><td class="nested-key">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-h">2♥</span></td>
                        <td>
                            <strong>Jacoby Transfer</strong><br>
                            Shows 5+ <span class="suit-s">Spades</span>.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">2<span class="suit-s">♠</span></td><td class="nested-val"><strong>Accept.</strong> Min or Max (no fit).</td></tr>
                                <tr><td class="nested-key">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>Super Accept.</strong> Max + 4-card fit.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2<span class="suit-s">♠</span></td>
                        <td>
                            <strong>Range Ask / Clubs</strong><br>
                            Bal Inv OR Clubs.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">2NT</td><td class="nested-val"><strong>Minimum.</strong></td></tr>
                                <tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Maximum.</strong></td></tr>
                                <tr><td colspan="2" style="padding-top:6px; border-bottom:none;"><strong>GF Club Rebids (Over 2NT / 3<span class="suit-c">♣</span>):</strong></td></tr>
                                <tr><td class="nested-key">3<span class="suit-d">♦</span>/<span class="suit-h">♥</span>/<span class="suit-s">♠</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Club suit.</td></tr>
                                <tr><td class="nested-key">4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Natural.</strong> Forcing, no shortness.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2NT</td>
                        <td>
                            <strong>Diamonds or Minors</strong><br>
                            Weak or Strong 1-Suiter.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">3<span class="suit-c">♣</span></td><td class="nested-val"><strong>Forced.</strong> (Bad Diamonds).</td></tr>
                                <tr><td colspan="2" style="padding-top:6px; border-bottom:none;"><strong>GF Diamond Rebids (Over 3<span class="suit-c">♣</span>):</strong></td></tr>
                                <tr><td class="nested-key">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>Natural.</strong> Good Diamonds (Inv+).</td></tr>
                                <tr><td class="nested-key">3<span class="suit-h">♥</span>/<span class="suit-s">♠</span>/4<span class="suit-c">♣</span></td><td class="nested-val"><strong>Shortness.</strong> Strong Diamond suit.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">3<span class="suit-c">♣</span></td>
                        <td>
                            <strong>Puppet Stayman</strong><br>
                            Asks for 5-card Major.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">3<span class="suit-d">♦</span></td><td class="nested-val"><strong>No 5M.</strong> (Responder bids:)</td></tr>
                                <tr><td style="padding-left:15px;" class="nested-key">3<span class="suit-h">♥</span></td><td class="nested-val">Shows <strong>4 Spades</strong>. &rarr; 3<span class="suit-s">♠</span> (4S) / 3NT (No 4M).</td></tr>
                                <tr><td style="padding-left:15px;" class="nested-key">3<span class="suit-s">♠</span></td><td class="nested-val">Shows <strong>4 Hearts</strong>. &rarr; 3NT / 4<span class="suit-h">♥</span>.</td></tr>
                                <tr><td class="nested-key">3<span class="suit-h">♥</span></td><td class="nested-val"><strong>5 Hearts.</strong> &rarr; 3<span class="suit-s">♠</span> (Slam Try) / 3NT.</td></tr>
                                <tr><td class="nested-key">3<span class="suit-s">♠</span></td><td class="nested-val"><strong>5 Spades.</strong> &rarr; 3NT / 4<span class="suit-h">♥</span> (Slam Try).</td></tr>
                                <tr><td class="nested-key">3NT</td><td class="nested-val"><strong>4=5=2=2.</strong> Resp 4-level bids are Transfers.</td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-d">3♦</span></td>
                        <td>
                            <strong>5-5 Minors</strong><br>
                            Game Forcing.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">3M</td><td class="nested-val"><strong>Stopper.</strong></td></tr>
                                <tr><td class="nested-key">4m</td><td class="nested-val"><strong>Set Suit.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                     <tr>
                        <td class="col-resp"><span class="suit-h">3♥</span></td>
                        <td>
                            <strong>5-5 Majors</strong><br>
                            Invitational.
                        </td>
                        <td>
                           <table class="nested-table">
                                <tr><td class="nested-key">Pass</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                                <tr><td class="nested-key">4M</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                     <tr>
                        <td class="col-resp">3<span class="suit-s">♠</span></td>
                        <td>
                            <strong>5-5 Majors</strong><br>
                            Game Forcing.
                        </td>
                        <td>
                            <table class="nested-table">
                                <tr><td class="nested-key">4M</td><td class="nested-val"><strong>To Play.</strong></td></tr>
                                <tr><td class="nested-key">Cue</td><td class="nested-val"><strong>Slam Try.</strong></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">4<span class="suit-c">♣</span></td>
                        <td>
                            <strong>Gerber</strong><br>
                            Ace Asking.
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
                            Transfer to <span class="suit-h">♥</span> / <span class="suit-s">♠</span>.
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
                            Invite to 6NT.
                        </td>
                        <td>
                             <table class="nested-table">
                                <tr><td class="nested-key">Pass</td><td class="nested-val"><strong>Minimum.</strong></td></tr>
                                <tr><td class="nested-key">5NT</td><td class="nested-val"><strong>Pick a Slam.</strong> (Minors or 6NT).</td></tr>
                                <tr><td class="nested-key">6X</td><td class="nested-val"><strong>5-card Suit.</strong></td></tr>
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
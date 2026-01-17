export const slamBidding = `
<details>
    <summary><span>Slam Bidding</span></summary>
    <div class="content">
        
        <div class="subheader-bar">Keycard (RKC 1430)</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Bid</th><th class="col-meaning">Meaning</th><th class="col-cont">Notes</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">4NT</td>
                        <td><strong>RKC 1430</strong></td>
                        <td>
                            <strong>5<span class="suit-c">♣</span></strong> = 1 or 4.<br>
                            <strong>5<span class="suit-d">♦</span></strong> = 0 or 3.<br>
                            <strong>5<span class="suit-h">♥</span></strong> = 2 w/o Queen.<br>
                            <strong>5<span class="suit-s">♠</span></strong> = 2 w/ Queen.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">Void Resp</td>
                        <td><strong>Void Showing</strong></td>
                        <td>
                            <strong>5NT</strong> = Even Keycards (2 or 4) + Void.<br>
                            <strong>6 of Void</strong> = Odd Keycards (1 or 3) + Void.<br>
                            (If void is higher than trump suit, bid 6 Trumps).
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">Queen Ask</td>
                        <td><strong>Next Step</strong></td>
                        <td>
                            Next non-trump step asks for Queen.<br>
                            <strong>Return to Trump</strong> = No Queen.<br>
                            <strong>Bid New Suit</strong> = Queen + King in that suit (or extra length).
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">Interference</td>
                        <td><strong>DOPI / DEPO</strong></td>
                        <td>
                            <strong>Below 5-Trump:</strong> Dbl=0/3, Pass=1/4 (DOPI).<br>
                            <strong>Above 5-Trump:</strong> Dbl=Even, Pass=Odd (DEPO).
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">Exclusion</td>
                        <td><strong>0-3-1-4</strong></td>
                        <td>Jump to 5-Level in void suit (after fit). Asks keys excluding that suit.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Control Bidding & Serious 3NT</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Concept</th><th class="col-meaning">Agreement</th><th class="col-cont">Detail</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">Cue Bids</td>
                        <td><strong>Italian</strong></td>
                        <td>
                            1st or 2nd Round Control (Ace, King, Singleton, Void).<br>
                            Bid up the line. Skipping a suit denies control.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">Serious 3NT</td>
                        <td><strong>Non-Serious</strong></td>
                        <td>
                            <strong>Context:</strong> 8+ card Major fit, GF, 3M reached.<br>
                            <strong>3NT</strong> = Non-Serious (Minimum/Bad trumps).<br>
                            <strong>Cue Bid</strong> = Serious Slam Try (Extras).<br>
                            <em>Note:</em> If <span class="suit-h">♥</span> agreed, 3<span class="suit-s">♠</span> is Non-Serious.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">Last Train</td>
                        <td><strong>Uncertainty</strong></td>
                        <td>
                            Cuebidding the suit directly below trump suit (e.g., 4<span class="suit-d">♦</span> when <span class="suit-h">♥</span> are trumps).<br>
                            Shows slam interest but holding back (uncertainty).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</details>
`;
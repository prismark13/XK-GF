export const competitiveBidding = `
<details>
    <summary><span>Competitive Agreements</span></summary>
    <div class="content">
        <div class="subheader-bar">Doubles</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Type</th><th class="col-meaning">Limit</th><th class="col-cont">Notes</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">Negative</td>
                        <td><strong>7<span class="suit-h">♥</span></strong></td>
                        <td>Shows unbid suits (usually Majors).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">Support</td>
                        <td><strong>2<span class="suit-s">♠</span></strong></td>
                        <td>Shows exactly 3-card support.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">Responsive</td>
                        <td><strong>4<span class="suit-d">♦</span></strong></td>
                        <td>After T/O Double and Raise.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Free Bids</div>
        <div class="table-wrapper">
            <table>
                <tbody>
                    <tr>
                        <td class="col-resp">2/1</td>
                        <td><strong>Game Force</strong></td>
                        <td>In competition, 2/1 is still GF (unless Passed Hand).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">New Suit</td>
                        <td><strong>Forcing</strong></td>
                        <td>Generally Forcing (F1) by unpassed hand.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
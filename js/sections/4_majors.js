export const majors = `
<details>
    <summary><span>Major Suit Openings</span></summary>
    <div class="content">
        <div class="badge-block">
            <div class="badge-label">Style</div>
            <div class="badge-desc">5-Card Majors. 10+ HCP (Rule of 20).</div>
        </div>
        <div class="badge-block">
            <div class="badge-label">1NT Response</div>
            <div class="badge-desc">Semi-Forcing (6-12).</div>
        </div>
        <div class="badge-block">
            <div class="badge-label">2/1</div>
            <div class="badge-desc">Game Forcing (100%).</div>
        </div>

        <div class="subheader-bar">Responses to 1<span class="suit-h">♥</span> / 1<span class="suit-s">♠</span></div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Bid</th><th class="col-meaning">Meaning</th><th class="col-cont">Notes</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">1NT</td>
                        <td><strong>Semi-Forcing</strong></td>
                        <td>Can be passed. May include 3-card sub-minimum raise.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2/1</td>
                        <td><strong>Game Force</strong></td>
                        <td>
                            <strong>1<span class="suit-s">♠</span>-2<span class="suit-h">♥</span></strong> promises 5+ hearts.<br>
                            <strong>1M-2<span class="suit-c">♣</span></strong> can be 2+ clubs (balanced GF).
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2M</td>
                        <td><strong>Constructive</strong></td>
                        <td>3-card support (6-9) OR 4-card support (5-7).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2NT</td>
                        <td><strong>Jacoby+</strong></td>
                        <td>Forcing Raise (Limit or Better). 4+ Trumps.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">3<span class="suit-c">♣</span></td>
                        <td><strong>Courtesy Raise</strong></td>
                        <td>Limit Raise strength. Caters to opener having 17+.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">3M</td>
                        <td><strong>Mixed Raise</strong></td>
                        <td>4+ Trumps, 7-9 HCP.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">Splinters</td>
                        <td><strong>Shortness</strong></td>
                        <td>
                            <strong>3<span class="suit-s">♠</span></strong> (over 1<span class="suit-h">♥</span>) = Singleton/Void, GF.<br>
                            <strong>4m</strong> = Singleton/Void, GF.<br>
                            <strong>3NT</strong> = Good 1-4-4-4 shape (1 outside control).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
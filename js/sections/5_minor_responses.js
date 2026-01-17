export const minorResponses = `
<details>
    <summary><span>Minor Suit Openings</span></summary>
    <div class="content">
        <div class="badge-block">
            <div class="badge-label">Inverted</div>
            <div class="badge-desc">2m = 10+ Inv+. 3m = Weak.</div>
        </div>
        <div class="badge-block">
            <div class="badge-label">Jump Shifts</div>
            <div class="badge-desc">UPH: 2-Level = Weak. 3-Level = Inv.</div>
        </div>

        <div class="subheader-bar">Responses to 1m</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Resp</th><th class="col-meaning">Meaning</th><th class="col-cont">Notes</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">1M</td>
                        <td><strong>Natural</strong></td>
                        <td>4+ Cards.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">1NT</td>
                        <td><strong>Balanced</strong></td>
                        <td>6-9 HCP (Standard).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2m</td>
                        <td><strong>Inverted</strong></td>
                        <td>10+ HCP, 5+ Support. Forces to 3m.</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2(m+1)</td>
                        <td><strong>Artificial GF</strong></td>
                        <td>
                            <strong>1<span class="suit-c">♣</span>-2<span class="suit-d">♦</span></strong> or <strong>1<span class="suit-d">♦</span>-2<span class="suit-h">♥</span></strong>.<br>
                            Artificial Game Force.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2H/2S</td>
                        <td><strong>Weak</strong></td>
                        <td>(Over 1<span class="suit-c">♣</span>). 6+ Suit, 0-5 HCP.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Spiral Raises (1m - 1M - ?)</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Rebid</th><th class="col-meaning">Meaning</th><th class="col-cont">Continuations</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp">2M</td>
                        <td><strong>Min Raise</strong></td>
                        <td>Minimum (11-14). Usually 4 trumps (could be 3).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2(M+1)</td>
                        <td><strong>Spiral</strong></td>
                        <td>
                            <strong>Artificial Ask (11+).</strong><br>
                            <strong>Step 1:</strong> Min, 3 trumps.<br>
                            <strong>Step 2:</strong> Max, 3 trumps.<br>
                            <strong>Step 3:</strong> Min, 4 trumps.<br>
                            <strong>Step 4:</strong> Max, 4 trumps.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
export const clubOpening = `
<details>
    <summary><span>Strong 2<span class="suit-c">♣</span></span></summary>
    <div class="content">
        <div class="subheader-bar">Responses</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th class="col-resp">Resp</th><th class="col-meaning">Meaning</th><th class="col-cont">Notes</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-resp"><span class="suit-d">2♦</span></td>
                        <td><strong>Waiting</strong></td>
                        <td>Standard Waiting (includes negatives).</td>
                    </tr>
                    <tr>
                        <td class="col-resp"><span class="suit-h">2♥</span></td>
                        <td><strong>Double Neg</strong></td>
                        <td>Immediate negative (Bust).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2<span class="suit-s">♠</span></td>
                        <td><strong>5+ Hearts</strong></td>
                        <td>Positive Transfer to Hearts (GF).</td>
                    </tr>
                    <tr>
                        <td class="col-resp">2NT</td>
                        <td><strong>5+ Spades</strong></td>
                        <td>Positive Transfer to Spades (GF).</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subheader-bar">Kokish Relay (After 2♦)</div>
        <div class="table-wrapper">
            <table>
                <tbody>
                    <tr>
                        <td class="col-resp">2<span class="suit-h">♥</span></td>
                        <td><strong>Kokish</strong></td>
                        <td>
                            <strong>Either</strong> Hearts (Natural) <strong>OR</strong> 25+ Balanced.<br>
                            Responder forces <strong>2<span class="suit-s">♠</span></strong>.
                        </td>
                    </tr>
                    <tr>
                        <td class="col-resp">2NT</td>
                        <td><strong>22-24 Bal</strong></td>
                        <td>Standard 2NT Systems apply.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</details>
`;
let x = '<img src="pepo.png" width="150" height="150">'
let o = '<img src="cat.jpg" width="150" height="150">'
// Function that defines wich player it is.
let pseudo, team;
let catColor        = "red";
let pepoColor       = "green";
let bot             = "Bot";
let informations    = {
    pseudo1: pseudo,
    team1: team,
    pseudo2: pseudo,
    team2, team
};

function Botgame() {
    document.body.innerHTML = `
    <div>
        <h1 style="color: #FFFFFF; font-size: 60px;">🧬 Tic Tac Toe 🎡</h3>

            <label style="color: #FFFFFF; font-size: 60px;">Quel ton pseudo ?</label>
            <div class="marge-1"></div>
            <input placeholder="ex: Ace" style="font-size: 35px;" type="text" id="pseudo" maxlength="24">

            <div class="marge-2"></div>

            <label style="color: #FFFFFF; font-size: 60px;">Choisi ton équipe</label>
            <div class="marge-1"></div>
            <select style="color: #000000; font-size: 40px;" name="team" id="team">
                <option value="Pepo">Pepo</option>
                <option value="Cat">Cat</option>
            </select>

            <div class="marge-2"></div>

            <button onclick="joinGame();" style="font-size: 60px; color: green;">Join Game</button>
    </div>`;
}

function joinGame() {
    pseudo  = document.getElementById("pseudo").value;
    team    = document.getElementById("team").value;

    game()
}

function showCells() {
    document.body.innerHTML = `
    <body>
    <h5 style="position:absolute; right:0; left: 0; top:0; color: #FFFFFF; font-size: 60px;">[<span style="color: ${team === "Pepo" ? pepoColor : catColor};">${team}</span>] <strong>${pseudo}</strong> vs [<span style="color: ${team === "Pepo" ? catColor : pepoColor};"">${(team == "Pepo" ? "Cat" : "Pepo")}</span>] Bot</h5>


        <div id="board">

        <br>
        <div class="marge-2"></div>
        
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        </div>
    </body>`;
}

function wichplayer(numb) {
    if (numb)
        return x;
    else
        return o;
}

// Reset board when someone wins/lose or when its equality.
function resetboard(allcells) {
    for (let i = 0; i < 9; i++) {
        allcells[i].innerHTML = '';
    }
}
// Checks if there is an winner.
function checkstatus(allcells) {
    // X <img src="pepo.png" width="150" height="150"> wins.

    // HORIZONTAL
    if (allcells[0].innerHTML == x && allcells[1].innerHTML == x && allcells[2].innerHTML == x)
        return x;
    if (allcells[3].innerHTML == x && allcells[4].innerHTML == x && allcells[5].innerHTML == x)
        return x;
    if (allcells[6].innerHTML == x && allcells[7].innerHTML == x && allcells[8].innerHTML == x)
        return x;

    // VERTICAL
    if (allcells[0].innerHTML == x && allcells[4].innerHTML == x && allcells[8].innerHTML == x)
        return x;
    if (allcells[2].innerHTML == x && allcells[4].innerHTML == x && allcells[6].innerHTML == x)
        return x;
    if (allcells[0].innerHTML == x && allcells[3].innerHTML == x && allcells[6].innerHTML == x)
        return x;

    // DIAGONAL
    if (allcells[1].innerHTML == x && allcells[4].innerHTML == x && allcells[7].innerHTML == x)
        return x;
    if (allcells[2].innerHTML == x && allcells[5].innerHTML == x && allcells[8].innerHTML == x)
        return x;

    // O <img src="cat.jpg" width="150" height="150"> wins.

    // HORIZONTAL
    if (allcells[0].innerHTML == o && allcells[1].innerHTML == o && allcells[2].innerHTML == o)
        return o;
    if (allcells[3].innerHTML == o && allcells[4].innerHTML == o && allcells[5].innerHTML == o)
        return o;
    if (allcells[6].innerHTML == o && allcells[7].innerHTML == o && allcells[8].innerHTML == o)
        return o;

    // VERTICAL
    if (allcells[0].innerHTML == o && allcells[4].innerHTML == o && allcells[8].innerHTML == o)
        return o;
    if (allcells[2].innerHTML == o && allcells[4].innerHTML == o && allcells[6].innerHTML == o)
        return o;
    if (allcells[0].innerHTML == o && allcells[3].innerHTML == o && allcells[6].innerHTML == o)
        return o;

    // DIAGONAL
    if (allcells[1].innerHTML == o && allcells[4].innerHTML == o && allcells[7].innerHTML == o)
        return o;
    if (allcells[2].innerHTML == o && allcells[5].innerHTML == o && allcells[8].innerHTML == o)
        return o;

    for (let cell of allcells)
        if (!cell.innerHTML)
            return;

    return 'eq';
}

function game() {
    showCells();
    let cells   = document.getElementsByClassName('cell');
    let players = true;

    for (let cell of cells) {
        cell.onclick = () => {

            // If cell has content then don't change the case.
            if (cell.innerHTML)
                return

            cell.innerHTML = wichplayer(players);

            // Checks the status of the cases.
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    switch (checkstatus(cells)) {
                        case x:
                            alert(`pepo ${team == "Pepo" ? pseudo : bot} a gagné`);
                            setTimeout(() => resetboard(cells), 300);
                            break;

                        case o:
                            alert(`cat ${team == "Cat" ? pseudo : bot} a gagné`);
                            setTimeout(() => resetboard(cells), 300);
                            break;

                        case 'eq':
                            requestAnimationFrame(() => {
                                alert("C'est égalité la prochaine fois nik le cat")
                                setTimeout(() => resetboard(cells), 300);
                            });
                            break;
                    }
                });
            });

            //Change the turn for the other player.
            players = !players;
        }
    }

}

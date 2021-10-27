let x = '<img src="pepo.png" width="150" height="150">'
let o = '<img src="cat.jpg" width="150" height="150">'
// Function that defines wich player it is.

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
    // Checks if pepo wins.

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

    // Checks if cat wins.

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

    for (let cell of cells)
        if (!cell.innerHTML)
            return;

    return 'eq';
}

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
                        alert("Yes le pepo a gagné");
                        setTimeout(() => resetboard(cells), 300);
                        break;

                    case o:
                        alert("le Cat a gagné ce fdp");
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

import { getRanking } from "./utils.js";

let position = [];
var ranking = getRanking();
// ['AlppZCuZL4CXReBgSWHI', 'Usuario1', 0]

function repeat(r) {
    for (var i = 0; i < position.length; i++) {
        if (position[i][0] === r) {
            return false;
        }
    }
    return true;
}

function rerun() {
    for (var i = 0; i < ranking.length; i++) {
        if (repeat(ranking[i][1])) {
            position.push([ranking[i][1], ranking[i][2]]);
        }
    }
}

for (var i = 0; i < ranking.length; i++) {
    let aux = ["",""];
    for (var j = 0; j < ranking.length; j++) {
        if (repeat(ranking[j][1])) {
            aux[1] < ranking[j][2] ? aux = [ranking[j][1], ranking[j][2]]: aux = aux;
        }
    }

    if (repeat(aux[0]) && aux[0] !== "") {
        position.push(aux);
    }
}
rerun();


for (var i = 0; i < 5; i++){
    var rank = document.getElementById(`pos${i + 1}`);
    rank.innerHTML = `<p><strong>${position[i][0]}<br><br>Con ${position[i][1]} puntos</storng></p>`;
}
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
<<<<<<< HEAD
console.log(position)

for (var i = 0; i < 5; i++){
    var rank = document.getElementById(`pos${i + 1}`);
    try {
        if (i < 3) {
            rank.innerHTML = `<p><strong>${position[i][0]}<br><br>Con ${position[i][1]} puntos</storng></p>`;
        } else {
            rank.innerHTML = `<p><strong>${position[i][0]}</strong></p><p><strong>Con ${position[i][1]} puntos</storng></p>`;
        }
    } catch {
        rank.innerHTML = `<p><strong>Aún nadie a conquistado este puesto<br>aun puede ser tuyo</strong></p>`;
    }
=======


for (var i = 0; i < 5; i++){
    var rank = document.getElementById(`pos${i + 1}`);
    rank.innerHTML = `<p><strong>${position[i][0]}<br>${position[i][1]}</storng></p>`;
>>>>>>> 2d7ee3191249910a35ed27a762df6d488a7a3acb
}
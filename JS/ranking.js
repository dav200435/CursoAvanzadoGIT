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

for (var i = 0; i < ranking.length; i++) {
    var aux = ["", ""];
    var aux2 = ["", ""]
    for (var j = 0; j < ranking.length; j++) {
        if (repeat(ranking[j][1])) {
            aux[1] < ranking[j][2] ? aux = [ranking[j][1], ranking[j][2]]: aux = aux;
        }
    }

    if (repeat(aux[0])) {
        position.push(aux);
    }
}

console.log(position)
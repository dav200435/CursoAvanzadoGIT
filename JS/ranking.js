import { getRanking } from "./utils.js";

let position = [];
var ranking = getRanking();
// ['AlppZCuZL4CXReBgSWHI', 'Usuario1', 0]

for (var i = 0; i < ranking.length - 1; i++) {
    if (position[i] != position[i + 1]) {
        if (ranking[i][2] < ranking[i + 1][2]) {
            position.push(ranking[i + 1][1]);
        } else {
            position.push(ranking[i][1]);
        }
    }
}

console.log(position)
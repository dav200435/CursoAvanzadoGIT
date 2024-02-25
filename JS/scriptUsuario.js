import { registro, ranking, getUsers } from "./utils.js";

var usuarios = getUsers();
// ['cqXYZ0Zr4kmfnpOGYBVn', 'Usuario1', '12']

function enviarRegistro() {
    var userID = randomID();
    var noExiste = false;
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('task-title').value;
        var password = document.getElementById('task-description').value;
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i][1] === username) {
                noExiste = false;
            } else {
                noExiste = true;
            }
          }
        
        if (noExiste == true) {
            registro(username, password, userID);
            ranking(userID, randomID());
        } else {
            alert("Nombre de usuario ya existente");
        }
    });
}

function enviarInicioSesion() {
    var correcto = false;
    var posicion = 0;
    document.getElementById('task-form1').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('task-title1').value;
        var password = document.getElementById('task-description1').value;
        console.log(username)
        console.log(password)
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i][1] === username && usuarios[i][2] === password) {
                correcto = true;
                posicion = i;
            } else {
                correcto = false;
            }
          }

        if (correcto) {
            localStorage.userId = usuarios[posicion][0];
            localStorage.loggedIn = true;
        } else {
            alert("Nombre o contraseña incorrectas");
        }
    });
}

function randomID() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

enviarRegistro();
enviarInicioSesion();
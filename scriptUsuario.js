function iniciarSesion() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginForm').style.display = 'none';

        document.getElementById('usuario').style.display = 'block';
        document.getElementById('nombreUsuario').innerText = username;
    } else {
        alert('Por favor, ingrese un nombre de usuario y una contraseña.');
    }
}

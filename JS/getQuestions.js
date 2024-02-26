import { getRanking , ranking } from "./utils.js";
import { getPreguntas } from "./utils.js";

let correctAnswersCount = 0;

async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=8&type=multiple');
    const data = await response.json();
    return data.results;
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//esto no funciona
export function sendInfo() {
    console.log("¡La función sendInfo() se ha llamado!");
    const id =`/Users/${localStorage.getItem(userId)}`;
    for (var i=0; i<getRanking().length;i++){
        if (getRanking()[i][2]== id){
            var points = correctAnswersCount+getRanking()[i][1];
            ranking(localStorage.getItem(userId) ,getRanking()[i][0], points)
        }
    }
    correctAnswersCount=0;
    restartGame();
}

async function displayQuestions() {
    const preguntasExternas = await getQuestions();
    const preguntasLocales = getPreguntas();

    // Obtener dos preguntas aleatorias de las preguntas locales
    const preguntasLocalesAleatorias = shuffleArray(preguntasLocales).slice(0, 2);

    const preguntasExternasAleatorias = shuffleArray(preguntasExternas);
    const preguntas = preguntasExternasAleatorias.concat(preguntasLocalesAleatorias);     

    const questionsContainer = document.getElementById('questions');
    
    preguntas.forEach((pregunta, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${pregunta[4] || pregunta.question}</p>`;
        
        const opciones = pregunta[3] ? pregunta[3] : [...pregunta.incorrect_answers, pregunta.correct_answer];
        const respuestaCorrecta = pregunta[1] ? pregunta[1] : pregunta.correct_answer;
        
        // Asegúrate de tener 4 opciones por pregunta
        while (opciones.length < 4) {
            opciones.push(respuestaCorrecta); // Sustituir la opción adicional por la respuesta correcta
        }
        
        const shuffledOptions = shuffleArray(opciones);
        
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                if (option === respuestaCorrecta) {
                    button.style.backgroundColor = "green";
                } else {
                    button.style.backgroundColor = "red";
                }

                // Deshabilitar todos los botones después de la selección
                const allButtons = questionElement.querySelectorAll('button');
                allButtons.forEach(btn => {
                    btn.disabled = true;
                });
            });
            questionElement.appendChild(button);
        });
        
        questionsContainer.appendChild(questionElement);
    });
}

function restartGame() {
    document.getElementById('questions').innerHTML = ''; 
    document.getElementById('correct-count').textContent = '0'; 
    correctAnswersCount=0;
    displayQuestions();
}

function checkSession() {
  const loggedIn = localStorage.getItem('loggedIn');
  if (!loggedIn) {
    // Si la sesión no está iniciada, redirigir al usuario al documento de inicio de sesión
    window.location.href = "Login.html";
  }else{
    displayQuestions();
  }
}

// Llamar a la función para verificar la sesión al cargar la página
checkSession();
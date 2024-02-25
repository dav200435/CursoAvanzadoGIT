import { getPreguntas } from "../JS/utils.js";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function displayQuestions() {
    const preguntasExternas = await getQuestions(); // Corrección aquí
    const preguntasLocales = getPreguntas();

    const preguntasExternasAleatorias = shuffleArray(preguntasExternas);
    const preguntas = preguntasExternasAleatorias.concat(preguntasLocales.slice(0, 2));     

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

// Función para obtener preguntas de la API
async function getQuestions() { // Corrección aquí
    const response = await fetch('https://opentdb.com/api.php?amount=8&type=multiple');
    const data = await response.json();
    return data.results;
}

// Llamar a la función para mostrar las preguntas cuando la página se cargue
displayQuestions();
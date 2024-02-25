<<<<<<< HEAD:algo.js
import { getPreguntas } from "utils.js";
=======
var correctAnswersCount = 0;

async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=8&type=multiple');
    const data = await response.json();
    return data.results;
}
>>>>>>> 2d7ee3191249910a35ed27a762df6d488a7a3acb:pruebas/pruebas.js

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function displayQuestions() {
<<<<<<< HEAD:algo.js
    const preguntasExternas = await getQuestions();
    const preguntasLocales = getPreguntas();

    const preguntasExternasAleatorias = shuffleArray(preguntasExternas);
    const preguntas = preguntasExternasAleatorias.concat(preguntasLocales.slice(0, 2));

    const questionsContainer = document.getElementById('questions');

    preguntas.forEach((pregunta, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = <p>${index + 1}. ${pregunta[4] || pregunta.question}</p>;

        const opciones = pregunta[3] ? pregunta[3] : [...pregunta.incorrect_answers, pregunta.correct_answer];
        const respuestaCorrecta = pregunta[1] ? pregunta[1] : pregunta.correct_answer;

        while (opciones.length < 4) {
            opciones.push(respuestaCorrecta);
        }

        const shuffledOptions = shuffleArray(opciones);

        shuffledOptions.forEach(option => {
=======
    const questions = await getQuestions();
    const questionsContainer = document.getElementById('questions');
    const correctCountElement = document.getElementById('correct-count');

    questionsContainer.innerHTML = ''; 
    correctAnswersCount = 0; 
    totalQuestions = questions.length;

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        const answers = [...question.incorrect_answers, question.correct_answer];
        const shuffledAnswers = shuffleArray(answers);

        shuffledAnswers.forEach(answer => {
>>>>>>> 2d7ee3191249910a35ed27a762df6d488a7a3acb:pruebas/pruebas.js
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                if (option === respuestaCorrecta) {
                    button.style.backgroundColor = "green";
                    correctAnswersCount++;
                    correctCountElement.textContent = correctAnswersCount;
                } else {
                    button.style.backgroundColor = "red";
                    
                }
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

<<<<<<< HEAD:algo.js
async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=8&type=multiple');
    const data = await response.json();
    return data.results;
=======
function restartGame() {
    document.getElementById('questions').innerHTML = ''; 
    document.getElementById('correct-count').textContent = '0'; 
    displayQuestions();
}

function sendinfo(){
    
>>>>>>> 2d7ee3191249910a35ed27a762df6d488a7a3acb:pruebas/pruebas.js
}

displayQuestions();
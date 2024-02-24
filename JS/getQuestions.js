function questionsApi() {
    return fetch("https://opentdb.com/api.php?amount=8&type=multiple")
        .then(response => response.json())
        .then(data => {
            const processedData = data.results.map(result => {
                return {
                    category: result.category,
                    type: result.type,
                    difficulty: result.difficulty,
                    question: result.question,
                    correctAnswer: result.correct_answer,
                    incorrectAnswers: result.incorrect_answers
                };
            });
            mostrarTodasLasPreguntas(processedData);
        });
}

function mostrarTodasLasPreguntas(preguntas) {
    const questionContainer = document.getElementById('question-container');

    preguntas.forEach(pregunta => {
        const questionElement = document.createElement("h2");
        questionElement.textContent = pregunta.question;
        questionContainer.appendChild(questionElement);

        const allAnswers = pregunta.incorrectAnswers.concat(pregunta.correctAnswer);
        const shuffledAnswers = shuffleArray(allAnswers);

        shuffledAnswers.forEach(answer => {
            const answerButton = document.createElement("button");
            answerButton.textContent = answer;
            answerButton.addEventListener("click", () => {
                if (answer === pregunta.correctAnswer) {
                    answerButton.style.backgroundColor = 'green'; 
                    preguntasAcertadas++;
                    console.log("¡Respuesta correcta!");
                }else{
                    answerButton.style.backgroundColor = 'red'; 
                }
                document.getElementById('contador-aciertos').textContent = `Preguntas acertadas: ${preguntasAcertadas}`;
                const buttons = document.querySelectorAll('button');
                buttons.forEach(button => {
                    button.style.display = 'none';
                });
            });
            questionContainer.appendChild(answerButton);
            questionContainer.appendChild(document.createElement("br"));
        });
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var preguntasAcertadas = 0;

window.onload = function() {
    questionsApi();
};
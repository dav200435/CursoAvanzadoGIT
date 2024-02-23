// Función para obtener preguntas de la API
async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=8&type=multiple');
    const data = await response.json();
    return data.results;
}

// Función para mezclar un array en un orden aleatorio
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para mostrar preguntas y respuestas en botones
async function displayQuestions() {
    const questions = await getQuestions();
    const shuffledQuestions = shuffleArray(questions);
    const questionsContainer = document.getElementById('questions');
    
    shuffledQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
        
        const answers = [...question.incorrect_answers, question.correct_answer];
        const shuffledAnswers = shuffleArray(answers);
        
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => {
                if (answer === question.correct_answer) {
                    button.style.backgroundColor = "green";
                } else {
                    button.style.backgroundColor = "red";
                }
            });
            questionElement.appendChild(button);
        });
        
        questionsContainer.appendChild(questionElement);
    });
}

// Llamar a la función para mostrar las preguntas cuando la página se cargue
displayQuestions();
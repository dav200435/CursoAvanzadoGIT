let correctAnswersCount = 0;
let totalQuestions = 0;

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

//hay veces que no funciona ya que falla la peticion con la api de preguntas si reinicias deveria funcionar
async function displayQuestions() {
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
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => {
                if (answer === question.correct_answer) {
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

                if (correctAnswersCount === totalQuestions) {
                    document.getElementById('restart-btn').style.display = 'block'; 
                }
            });
            questionElement.appendChild(button);
        });

        questionsContainer.appendChild(questionElement);
    });
}

function restartGame() {
    document.getElementById('questions').innerHTML = ''; 
    document.getElementById('correct-count').textContent = '0'; 
    displayQuestions();
}

function sendInfo(){
    correctAnswersCount;


    correctAnswersCount=0;
    restartGame();
}


if(localStorage.loggedIn){
    displayQuestions();
}

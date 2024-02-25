//import { getRanking , ranking } from "./utils"; 
//si se descomenta esta linea da el siguiente error: Se bloqueó la carga de un módulo de “http://127.0.0.1:5500/JS/utils” debido a un tipo MIME no permitido (“text/html”).game.html
//Ha fallado la carga del módulo con origen "http://127.0.0.1:5500/JS/utils".

function sendInfo(){
    correctAnswersCount;
    /*
    const id = localStorage.getItem(userId);
    for (var i=0; i<getRanking().length;i++){
        if (id === getRanking()[i][0]){
            var currentCorrect = getRanking()[i][2];
            correctAnswersCount += currentCorrect;
            ranking(getRanking()[i][1],id,correctAnswersCount);
        }
    }
    Esto se comenta ya que corresponde al codigo del error de arriba y necesito que el boton funcione por lo menos
    */
    correctAnswersCount=0;
    restartGame();
}

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

//hay veces que no funciona ya que falla la peticion con la api de preguntas si reinicias deveria funcionar
async function displayQuestions() {
    var questions = await getQuestions();
    const questionsContainer = document.getElementById('questions');
    const correctCountElement = document.getElementById('correct-count');

    questionsContainer.innerHTML = ''; 
    const totalQuestions = questions.length;

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
document.getElementById('restart-btn').addEventListener('click', sendInfo);
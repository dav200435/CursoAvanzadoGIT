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
            start(processedData);
        });
}

function start(questionData){

    const questionContainer = document.getElementById('question-container');
    var question = document.createElement("h2");
    question.appendChild(questionData.question);
    var answer1 = createElement("input");
    answer1.type="button";
    answer1.name=""

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
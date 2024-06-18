const quizContainer = document.getElementById('quizContainer');
const quizForm = document.getElementById('quizForm');
const resultContainer = document.getElementById('resultContainer');

questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionElement.appendChild(questionText);

    question.options.forEach(option => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option');

        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        optionInput.id = `question${index}_${option}`;

        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = optionInput.id;
        optionLabel.textContent = option;

        optionContainer.appendChild(optionInput);
        optionContainer.appendChild(optionLabel);
        questionElement.appendChild(optionContainer);
    });

    quizContainer.appendChild(questionElement);
});

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });

    resultContainer.textContent = `You scored ${score} out of ${questions.length}.`;
});

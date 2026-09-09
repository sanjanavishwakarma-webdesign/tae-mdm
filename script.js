// ==========================================
// ONLINE EXAM PORTAL
// WD-T1-131
// ==========================================


// ==========================================
// QUESTIONS
// ==========================================

const questions = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "C++",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is used to make web pages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },

    {
        question: "Which CSS property changes the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    },

    {
        question: "Which keyword can be used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        answer: 0
    },

    {
        question: "Which HTML tag is used to insert an image?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        answer: 1
    },

    {
        question: "Which method prints output to the browser console?",
        options: [
            "console.log()",
            "print()",
            "display()",
            "console.write()"
        ],
        answer: 0
    },

    {
        question: "Which framework is being used for styling this project?",
        options: [
            "Bootstrap",
            "Tailwind CSS",
            "Bulma",
            "Materialize"
        ],
        answer: 1
    }

];


// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let flaggedQuestions =
    new Array(questions.length).fill(false);

let timeLeft = 30 * 60;

let examSubmitted = false;


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    const question = questions[currentQuestion];


    // Question number

    document.getElementById("questionNumber")
        .textContent = currentQuestion + 1;


    // Question text

    document.getElementById("questionText")
        .textContent = question.question;


    // Progress bar

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar")
        .style.width = progress + "%";


    // Options container

    const optionsContainer =
        document.getElementById("optionsContainer");

    optionsContainer.innerHTML = "";


    // Create options

    question.options.forEach((option, index) => {

        const optionDiv =
            document.createElement("div");


        optionDiv.className =
            "flex items-center gap-3 p-4 " +
            "border-2 rounded-xl cursor-pointer " +
            "transition hover:bg-blue-50 hover:border-blue-400";


        // Selected option

        if (userAnswers[currentQuestion] === index) {

            optionDiv.classList.add(
                "bg-blue-50",
                "border-blue-500"
            );

        } else {

            optionDiv.classList.add(
                "border-gray-200"
            );

        }


        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;
        radio.className - "w-5 h-5 accent-blue-600";
        if(userAnswers[currentQuestion] === index) {
            radio.checked = true;
        }
        const span = document.createElement("span");
        span.className = "text=gray-700 font-medium";
        span.textContent = option;
        optionDiv.appendChild(radio);
        optionDiv.appendChild(span);


        // Select answer

        optionDiv.addEventListener(
            "click",
            function () {

                userAnswers[currentQuestion] = index;

                loadQuestion();

            }
        );


        optionsContainer.appendChild(optionDiv);

    });


    updateFlagButton();

    updateNavigation();

    updateQuestionGrid();

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

}


// ==========================================
// PREVIOUS QUESTION
// ==========================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


// ==========================================
// GO TO QUESTION
// ==========================================

function goToQuestion(index) {

    currentQuestion = index;

    loadQuestion();

}


// ==========================================
// FLAG QUESTION
// ==========================================

function toggleFlag() {

    flaggedQuestions[currentQuestion] =
        !flaggedQuestions[currentQuestion];


    updateFlagButton();

    updateQuestionGrid();

}


// ==========================================
// FLAG BUTTON
// ==========================================

function updateFlagButton() {

    const flagBtn =
        document.getElementById("flagBtn");


    if (flaggedQuestions[currentQuestion]) {

        flagBtn.textContent =
            "⚑ Remove Flag";

        flagBtn.classList.remove(
            "border-yellow-400",
            "text-yellow-600"
        );

        flagBtn.classList.add(
            "bg-yellow-100",
            "border-yellow-500",
            "text-yellow-700"
        );

    } else {

        flagBtn.textContent =
            "⚑ Flag for Review";

        flagBtn.classList.remove(
            "bg-yellow-100",
            "border-yellow-500",
            "text-yellow-700"
        );

        flagBtn.classList.add(
            "border-yellow-400",
            "text-yellow-600"
        );

    }

}


// ==========================================
// QUESTION NAVIGATION GRID
// ==========================================

function updateQuestionGrid() {

    const grid =
        document.getElementById("questionGrid");


    grid.innerHTML = "";


    questions.forEach((question, index) => {

        const button =
            document.createElement("button");


        button.textContent = index + 1;


        button.className =
            "w-11 h-11 rounded-lg " +
            "font-bold border-2 " +
            "transition hover:scale-105";


        // Current question

        if (index === currentQuestion) {

            button.classList.add(
                "border-blue-600",
                "ring-2",
                "ring-blue-200"
            );

        }


        // Flagged

        if (flaggedQuestions[index]) {

            button.classList.add(
                "bg-yellow-400",
                "border-yellow-500",
                "text-yellow-900"
            );

        }


        // Answered

        else if (userAnswers[index] !== null) {

            button.classList.add(
                "bg-green-500",
                "border-green-500",
                "text-white"
            );

        }


        // Not answered

        else {

            button.classList.add(
                "bg-gray-100",
                "border-gray-300",
                "text-gray-700"
            );

        }


        button.onclick = function () {

            goToQuestion(index);

        };


        grid.appendChild(button);

    });

}


// ==========================================
// PREVIOUS / NEXT BUTTONS
// ==========================================

function updateNavigation() {

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");


    // Previous

    prevBtn.disabled =
        currentQuestion === 0;


    // Next

    nextBtn.disabled =
        currentQuestion === questions.length - 1;

}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    const timer =
        document.getElementById("timer");


    const interval =
        setInterval(function () {

            if (examSubmitted) {

                clearInterval(interval);

                return;

            }


            const minutes =
                Math.floor(timeLeft / 60);


            const seconds =
                timeLeft % 60;


            timer.textContent =
                String(minutes).padStart(2, "0")
                + ":"
                + String(seconds).padStart(2, "0");


            // Timer warning

            if (timeLeft <= 60) {

                timer.classList.add(
                    "animate-pulse"
                );

            }


            // Time over

            if (timeLeft <= 0) {

                clearInterval(interval);

                submitExam(true);

                return;

            }


            timeLeft--;

        }, 1000);

}


// ==========================================
// SUBMIT EXAM
// ==========================================

function submitExam(autoSubmit = false) {

    if (examSubmitted) return;


    if (!autoSubmit) {

        const confirmation =
            confirm(
                "Are you sure you want to submit the exam?"
            );


        if (!confirmation) {

            return;

        }

    }


    examSubmitted = true;


    let score = 0;


    // Calculate score

    questions.forEach(function (question, index) {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });


    // Display score

    document.getElementById("score")
        .textContent =
        score + " / " + questions.length;


    // Show result modal

    const modal =
        document.getElementById("resultModal");


    modal.classList.remove("hidden");

    modal.classList.add("flex");

}


// ==========================================
// CLOSE RESULT
// ==========================================

function closeResult() {

    const modal =
        document.getElementById("resultModal");


    modal.classList.add("hidden");

    modal.classList.remove("flex");

}


// ==========================================
// START APPLICATION
// ==========================================

loadQuestion();

startTimer();

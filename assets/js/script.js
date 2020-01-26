$(document).ready(function () {
    var time = 15;
    var quizNum = 0;
    var correctAnswers = 0;
    var intervalId;

    const questionOne =
    {
        question: '<div id="question">What is the name of the Sensei that taught Naruto how to use "Rasengan"?</div>',
        choice1: '<div class="option">Kakashi</div>',
        choice2: '<div id="answer">Jiraya</div>',
        choice3: '<div class="option">Iruka</div>',
        choice4: '<div class="option">Minato</div>',
    }

    const questionTwo =
    {
        question: '<div id="question">Who did Naruto end up dating?</div>',
        choice1: '<div class="option">Tsunade</div>',
        choice2: '<div class="option">Sakura</div>',
        choice3: '<div class="option">Tenten</div>',
        choice4: '<div id="answer">Hinata</div>',
    }

    const questionThree =
    {
        question: '<div id="question">What is the name of the character that eats alot to enhance his powers?</div>',
        choice1: '<div id="answer">Choji</div>',
        choice2: '<div class="option">Naruto</div>',
        choice3: '<div class="option">Itachi</div>',
        choice4: '<div class="option">Boruto</div>',
    }

    const questionFour =
    {
        question: '<div id="question">Which character resembles the same features as the famous real-life martial artist, "Bruce Lee"?</div>',
        choice1: '<div class="option">Guy</div>',
        choice2: '<div class="option">Sasuke</div>',
        choice3: '<div id="answer">Rock</div>',
        choice4: '<div class="option">Gaara</div>',
    }

    const questionFive =
    {
        question: '<div id="question">What is the name of the Nine-Tailed Fox that is sealed in Narutos body?</div>',
        choice1: '<div class="option">Shukaku</div>',
        choice2: '<div id="answer">Kurama</div>',
        choice3: '<div class="option">Isobu</div>',
        choice4: '<div class="option">Matatabi</div>',
    }

    const questionSix =
    {
        question: '<div id="question">In what year was the Naruto Manga published?</div>',
        choice1: '<div class="option">1994</div>',
        choice2: '<div id="answer">1997</div>',
        choice3: '<div class="option">2001</div>',
        choice4: '<div class="option">2007</div>',
    }

    const questionSeven =
    {
        question: '<div id="restart">Restart Quiz?</div>',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
    }

    const triviaQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

    function timeConverter(t) {
        const minutes = Math.floor(t / 15);
        const seconds = t - (minutes * 15);
        if (seconds < 0) {
            seconds = "0" + seconds;
        }
        return seconds;
    };

    function timeStart() {
        time = 15;
        clearInterval(intervalId);
        intervalId = setInterval(timesUp, 1000);
    }

    function timesUp() {
        time -= 1;
        const translateTime = timeConverter(time);
        $("#time").html(translateTime + " seconds");
        if (time === 0) {
            $("#results").html("Times up! You are too slow to be a Ninja! <br> <img src='https://media1.tenor.com/images/9df512e6a2bce6011493459ccf0cde56/tenor.gif?itemid=5283911'>")
            quizNum += 1;
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1000);
            setTimeout(timeStart, 1500);
        }
    }

    function displayQuiz(display) {
        $("#results").html(display.question + display.choice1 + display.choice2 + display.choice3 + display.choice4);
        $("#correctNum").html(correctAnswers + '/6 Correct Answers')
    }

    function showNextQuestion() {
        quizNum += 1;

        if (quizNum === (triviaQuestions.length - 1)) {
            clearInterval(intervalId);
            displayQuiz(triviaQuestions[quizNum]);
            showCorrectAnswer();
            showWrongAnswer();
            resetGame();
        }
        else {
            timeStart();
            displayQuiz(triviaQuestions[quizNum]);
            showCorrectAnswer();
            showWrongAnswer();
            resetGame();
        }
    }

    function showCorrectAnswer() {
        $("#answer").on("click", function () {
            $("#results").html('You are a Looney Toon! <br> <img src="./assets/css/images2.jpeg">')
            correctAnswers += 1;
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1500);
        });
    }

    function showWrongAnswer() {
        $(".option").on("click", function () {
            
            $("#results").html('Incorrect! You are not worth to be a Looney Toon LOL! <br> <img src ="./assets/css/images.jpeg">')
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1500);
        })
    }

    //This starts the game once button is clicked.
    $("#startGameButton").on("click", function () {
        displayQuiz(triviaQuestions[quizNum]);
        timeStart();
        showCorrectAnswer();
        showWrongAnswer();
        resetGame();
    })

    function resetGame() {
        $("#restart").on("click", function () {
            correctAnswers = 0;
            quizNum = 0;
            displayQuiz(triviaQuestions[quizNum]);
            clearInterval(intervalId);
            timeStart();
            showCorrectAnswer();
            showWrongAnswer();
            resetGame();
        })
    }


});
$(document).ready(function () {
    var time = 10;
    var quizNum = 0;
    var correctAnswers = 0;
    var intervalId;

    const questionOne =
    {
        question: '<div id="question">"Who are Donald Ducks nephews"?</div>',
        choice1: '<div class="option">Dewey, Louie, and Jack</div>',
        choice2: '<div id="answer">Huey, Dewey, and Louie</div>',
        choice3: '<div class="option">Chewy, Huey, and Louie</div>',
        choice4: '<div class="option">Dewey, Huey, and Chop-Suey</div>',
    }

    const questionTwo =
    {
        question: '<div id="question">Garfields favortie food is?</div>',
        choice1: '<div class="option">Spaghetti</div>',
        choice2: '<div class="option">Ravioli</div>',
        choice3: '<div class="option">Pizza</div>',
        choice4: '<div id="answer">Lasagna</div>',
    }

    const questionThree =
    {
        question: '<div id="question">"Which weapon does Raphael use in the Teenage Mutant Ninja Turtles?</div>',
        choice1: '<div id="answer">Sai</div>',
        choice2: '<div class="option">Nunchuc</div>',
        choice3: '<div class="option">Katana</div>',
        choice4: '<div class="option">Bo Staff</div>',
    }

    const questionFour =
    {
        question: '<div id="question">What was the familys dog named on The Jetsons"?</div>',
        choice1: '<div class="option">Comet</div>',
        choice2: '<div class="option">Spacely</div>',
        choice3: '<div id="answer">Astro</div>',
        choice4: '<div class="option">Pluto</div>',
    }

    const questionFive =
    {
        question: '<div id="question">What famous cartoon character always said "Ill gladly pay you Tuesday for a hamburger today?</div>',
        choice1: '<div class="option">Hamburglar</div>',
        choice2: '<div id="answer">Wimpy</div>',
        choice3: '<div class="option">Garfield </div>',
        choice4: '<div class="option">Fat Albert</div>',
    }

    const questionSix =
    {
        question: '<div id="question">In which Nickelodeon classic can Eliza communicate with animals?</div>',
        choice1: '<div id="answer">The Wild Thornberrys</div>',
        choice2: '<div class="option">Rugrats</div>',
        choice3: '<div class="option">Danny Phantom</div>',
        choice4: '<div class="option">As Told by Ginger</div>',
    }

    const questionSeven =
    {
        question: '<div id="question">Which character was not a turtle, in the Teenage Mutant Ninja Turtles?</div>',
        choice1: '<div class="option">Raphael</div>',
        choice2: '<div id="answer">Splinter</div>',
        choice3: '<div class="option">Donatello</div>',
        choice4: '<div class="option">Leonardo</div>',
    }

    const questionEight =
    {
        question: '<div id="question">On the Simpsons what musical instrument does Lisa Simpson play?</div>',
        choice1: '<div class="option">Flute</div>',
        choice2: '<div class="option">Trumpet</div>',
        choice3: '<div class="option">Drums</div>',
        choice4: '<div id="answer">Saxophone</div>',
    }

    const questionNine =
    {
        question: '<div id="question">Where did the Snorks live?</div>',
        choice1: '<div class="option">At the garbage dump</div>',
        choice2: '<div id="answer">Under the Sea</div>',
        choice3: '<div class="option">In the mountains</div>',
        choice4: '<div class="option">In the woods</div>',
    }

    const questionTen =
    {
        question: '<div id="question">What instrument does Squidward Tentacles play?</div>',
        choice1: '<div class="option">Violin</div>',
        choice2: '<div class="option">Harmonica</div>',
        choice3: '<div class="option">Piano</div>',
        choice4: '<div id="answer">Clarinet</div>',
    }

    const questionEleven =
    {
        question: '<div id="question">What cartoon that originally aired in the US in 1981 features an evil wizard Gargamel and his cat Azrael?</div>',
        choice1: '<div class="option">Inspector Gadget</div>',
        choice2: '<div class="option">Johnny Quest</div>',
        choice3: '<div class="option">Strawberry Shortcake</div>',
        choice4: '<div id="answer">The Smurfs</div>',
    }

    const questionTwelve =
    {
        question: '<div id="question">In the cartoon Fairly Odd Parents, Timmys pet goldfish are really what?</div>',
        choice1: '<div class="option">Crackers</div>',
        choice2: '<div id="answer">Fairies</div>',
        choice3: '<div class="option">Sharks</div>',
        choice4: '<div class="option">Pixies</div>',
    }

    const questionThirteen =
    {
        question: '<div id="question">In the MTV cartoon Beavis and Butthead , what was the name of Beavis Spanish alter ego?</div>',
        choice1: '<div class="option">The Great Jose</div>',
        choice2: '<div id="answer">The Great Cornholio</div>',
        choice3: '<div class="option">The Great Juilo</div>',
        choice4: '<div class="option">The Great Hector </div>',
    }

    const questionFourteen =
    {
        question: '<div id="question">In the cartoon Spongebob Squarepants, Plankton is always out to steal what?</div>',
        choice1: '<div class="option">Money</div>',
        choice2: '<div class="option">Jellyfish Fields</div>',
        choice3: '<div class="option">A Boat</div>',
        choice4: '<div id="answer">The Secret Formula</div>',
    }

    const questionFifteen =
    {
        question: '<div id="question">In the Disney Channel cartoon Phineas and Ferb, Perry is the boys pet _?</div>',
        choice1: '<div class="option">Dog</div>',
        choice2: '<div class="option">Turtle</div>',
        choice3: '<div id="answer">Platypus</div>',
        choice4: '<div class="option">Frog</div>',
    }

    const questionSixteen =
    {
        question: '<div id="restart">Restart Quiz?</div>',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
    }

    const triviaQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve, questionThirteen, questionFourteen, questionFifteen, questionSixteen];

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return seconds;
    };

    function timeStart() {
        time = 10;
        clearInterval(intervalId);
        intervalId = setInterval(timesUp, 1000);
    }

    function timesUp() {
        time -= 1;
        var translateTime = timeConverter(time);
        $("#time").html(translateTime + " seconds");
        if (time === 0) {
            $("#results").html("Times up! You are too slow to be a Toon Head LOL! <br> <img src='https://media1.tenor.com/images/9df512e6a2bce6011493459ccf0cde56/tenor.gif?itemid=5283911'>")
            quizNum += 0;
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 5000);
            setTimeout(timeStart, 1000);
        }
    }

    function displayQuiz(display) {
        $("#results").html(display.question + display.choice1 + display.choice2 + display.choice3 + display.choice4);
        $("#correctNum").html(correctAnswers + '/15 Correct Answers')
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
            $("#results").html('You are a Toon Head! <br> <img src="./assets/css/images2.jpeg">')
            correctAnswers += 1;
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1000);
        });
    }

    function showWrongAnswer() {
        $(".option").on("click", function () {
            
            $("#results").html('Incorrect! you are not worth to be a Toon Head LOL! <br> <img src ="./assets/css/images.jpeg">')
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1000);
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
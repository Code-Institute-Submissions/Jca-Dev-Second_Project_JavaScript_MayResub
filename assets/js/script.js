(function(){
    
    function buildQuiz(){

      const output = [];
  
      theQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
          
            // open box of answers and display as a radio list
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // move the answer box contents formed as a radio and the questions into the output box
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      //  display the output box to the user
      quizBox.innerHTML = output.join('');
    }

//--------Slides---------------------------------------------------------------------------------------------------------------
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

//----Questions--------------------------------------------------------------------------------------------------------------------
    const submitButton = document.getElementById('submit');
    const resultsBox = document.getElementById('results');
    const quizBox = document.getElementById('quiz');
    const theQuestions = [
      {
        question: "What part of a car brings it to a stop?",
        answers: {
          a: "wheels",
          b: "breaks",
          c: "engine",
        },
        correctAnswer: "b"
      },
      {
        question: "Which one of these is NOT a car brand",
        answers: {
          a: "Bitter",
          b: "Porsche",
          c: "Dunt", 
        },
        correctAnswer: "c"
      },
      {
        question: "Does a diesel engine have Glow Plugs or Spark Plugs?",
        answers: {
          a: "Spark Plugs",
          b: "Glow Plugs",
          c: "Neither"
        },
        correctAnswer: "b"
      },
      {
        question: "a",
        answers: {
          a: "a",
          b: "a",
          c: "a"
        },
        correctAnswer: "a"
      },
      {
        question: "a",
        answers: {
          a: "a",
          b: "a",
          c: "a"
        },
        correctAnswer: "a"
      },
      {
        question: "a",
        answers: {
          a: "a",
          b: "a",
          c: "a"
        },
        correctAnswer: "a"
      }
    ];

//---------------------------------------------------------------------------------------------------------------------------------  
function showResults(){
  
  // get the answer box contents and put them into an answer container
  const answerContainers = quizBox.querySelectorAll('.answers');

  // create a box the holds the users answers
  let numCorrect = 0;

  theQuestions.forEach( (currentQuestion, questionNumber) => {

    // find users selected answer
    const answerPlate = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerPlate.querySelector(selector) || {}).value;

    
    if(userAnswer === currentQuestion.correctAnswer){
      // Put correct answer into the box of user answers
      numCorrect++;
      answerContainers[questionNumber].style.border = 'solid 2px green';
    }
    else{
      // show the user they are incorrect
      answerContainers[questionNumber].style.border = 'solid 2px red';
    }
  });

  // display total correct answers
  resultsBox.innerHTML = `${numCorrect} out of ${theQuestions.length}`;

  // message depending on how the user did
  if(numCorrect === 6) {
    alert("CONGRATULATIONS! \nYou are an automotive quiz champion! \nThanks for playing.");
  }
  else{
    alert("Good Try! \nMaybe you will do better next time? \nThanks for playing.");
    document.getElementById("circle").innerText = "Why dont you go back through and see what you got wrong? By using the Previous Button";
  }

}

//---------------------------------------------------------------------------------------------------------------------------------
    buildQuiz();
  
    // slides
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);
  
// ----------------Event listeners-----------------------------------------------------------------------------------------------
    submitButton.addEventListener('click', showResults);
    nextButton.addEventListener("click", showNextSlide);
    previousButton.addEventListener("click", showPreviousSlide);
  })();
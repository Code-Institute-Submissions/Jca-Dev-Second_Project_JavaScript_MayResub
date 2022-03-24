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


    });    
    buildQuiz();
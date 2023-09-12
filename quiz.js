const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  options: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");



const { correctAnswer, options, answers, question } = questionObj;

let score = 0;

// Manipulating the DOM
//setting question text content
questionEl.textContent = question;

const shuffledOptions = shuffleOptions(options);

// Populating the Option div with the buttons
shuffledOptions.forEach((opt) => {
  // Creating Button and appending it to the opt div
  const btn = document.createElement('button');
  btn.textContent = opt;
  optionsEl.appendChild(btn);

  // Handling the event on btn
  btn.addEventListener("click", () => {
    if (opt === correctAnswer) {
      score++;
    }
    else {
      score = score - 0.25;
    }
    
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = 'Quiz Completed!!';
    optionsEl.textContent = '';
  });
});


  // shuffling 
  function shuffleOptions(options){
    for(let i = options.length-1; i>=0; i--){
      const j = Math.floor(Math.random()*i+1);
      [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
  }

  

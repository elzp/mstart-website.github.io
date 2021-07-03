const gbColor ="#201212";

export const defaultformStyle = {
  background: gbColor,
  height: "100vh",
  width: "50vw",
  border: "1px solid red",
  margin: "0 0 0 0",
  top: "0px",
  left: "0px",
  display: "none",
  position: "fixed",
};

export const parametersOfSlideForm = (animationDuration, animationName, displayVar)=>{
    return {
      "animation-duration": `${animationDuration}s`,
      "animation-name": animationName,
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
      display: displayVar
}};

//// verification code
// set of questions
const questions = {
  1: { 
    question: 'question 1',
    answers: ["bad answer1", "good answer", "bad answer2"],
    goodAnswer: 2,
  },
  2: { 
    question: 'question 2',
    answers: ["good answer", "bad answer2", "bad answer1"],
    goodAnswer: 1,
  },
  3: { 
    question: 'question 3',
    answers: ["bad answer1", "bad answer2", "good answer"],
    goodAnswer: 3,
  },
  4: { 
    question: 'question 4',
    answers: ["bad answer1", "good answer", "bad answer2"],
    goodAnswer: 2,
  },
  5: { 
    question: 'question 5',
    answers: ["bad answer1", "bad answer2", "good answer"],
    goodAnswer: 3,
  },
  6: { 
    question: 'question 6',
    answers: ["bad answer1", "bad answer2", "good answer"],
    goodAnswer: 3,
  }
};
// array with keys in question object
const indexesArray = Object.keys(questions).map(it=>+it);

// get question with answers

export const getQuestion = (
  askedQuestions //array
) => {
  let question = { 
    question: '',
    answers: ["", "", ""],
    goodAnswer: "",
  };
  let answeredQuestions = askedQuestions;
  if(askedQuestions.length===5){
    // If user answered 5 questions and didn't get 3 good answers <=> user isn't considered as a person.
    answeredQuestions = new Array(4);
    return {question, askedQuestions: answeredQuestions}; 
  }
  
  //// choose different question every time

  // get random number 
  let random = 1;
  let notAskedQuestions = [];

  if (askedQuestions === []){
    notAskedQuestions = indexesArray;
    random = Math.ceil(Math.random()*notAskedQuestions.length);

  }else{
    // get  questions which haven't been asked
    notAskedQuestions = indexesArray.filter(
      it=>
      // checks if number of question isn't in askedQuestions array
      askedQuestions.every(it2=>it!==it2) 
    )

    random = Math.ceil(Math.random()*notAskedQuestions.length);
  }

  // choose id of question
  const idOfChoosenQuestion = notAskedQuestions[random-1];
 
  answeredQuestions =[...answeredQuestions, idOfChoosenQuestion];
  question = questions[idOfChoosenQuestion];

  return {question, askedQuestions: answeredQuestions};
}

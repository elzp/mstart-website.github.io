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

// get question with answers

export const getQuestion = (
  askedQuestions //array
) => {
  let question = { 
    question: '',
    answers: ["", "", ""],
    goodAnswer: "",
  };
  
  if(askedQuestions.length>5){
    // If user answered 5 questions and didn't get 3 good answers <=> user isn't considered as a person.
    askedQuestions = new Array(4);
    return {question, askedQuestions}; 
  }

  const idOfChoosenQuestion = Math.ceil(Math.random()*(6-askedQuestions.length));
  askedQuestions.push(idOfChoosenQuestion);
  question = questions[idOfChoosenQuestion];

  return {question, askedQuestions};
}

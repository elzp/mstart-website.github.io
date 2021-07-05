const gbColor ="#e9f4f3";
const borderColor = "#262d35";

export const defaultformStyle = {
  //"background-image": './form-bg-mikhail-nilov.png',
  background: gbColor,
  height: "100vh",
  width: "50vw",
  "border-left": `1px solid ${borderColor}`,
  margin: 0,
  padding: 0,
  top: "0px",
  left: "0px",
  display: "none",
  position: "fixed",
};

export const parametersOfSlideForm = (animationDuration, animationName, displayVar)=>{
    return {
      animationDuration: `${animationDuration}s`,
      animationName: animationName,
      WebkitAnimationFillMode: "forwards",
      animationFillMode: "forwards",
      display: displayVar
}};

//// verification code
// set of questions
const questions = {
  1: { 
    question: 'Which instrument doesn\'t have strings?',
    answers: ["guitar", "trumpet", "harp"],
    goodAnswer: 2,
  },
  2: { 
    question: 'To which instrument you have to blow to play it?',
    answers: ["trumpet", "piano", "drum"],
    goodAnswer: 1,
  },
  3: { 
    question: 'Which instrument doesn\'t have keys?',
    answers: ["accordion", "piano", "guitar"],
    goodAnswer: 3,
  },
  4: { 
    question: 'Which of below isn\'t a name of singing voice?',
    answers: ["alto", "Freddie Mercury", "soprano"],
    goodAnswer: 2,
  },
  5: { 
    question: 'Which band usually perform pop songs?',
    answers: ["Rammstein", "Mettalica", "Panic in the Disco"],
    goodAnswer: 3,
  },
  6: { 
    question: 'Which artist/band originated in \'90s?',
    answers: ["Birdy", "Billie Eilish", "Nirvana"],
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

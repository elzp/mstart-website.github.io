import cd4 from './4young-heart.jpg';
import cd3 from './3beautiful-lies.jpg';
import cd2 from './2fire-within.jpg';
import cd1 from './/1birdy.jpg';

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



//for Discography component
export const infoAboutCds = [
  [cd4, "Young heart", "2021", `
  1. The Witching Hour Intro,
2. Voyager,
3. Loneliness,
4. The Otherside,
5. Surrender,
6. Nobody Knows Me Like You Do,
7. River Song,
8. Second Hand News,
9. Deepest Lonely,
10. Lighthouse,
11. Chopin Waltz In A Minor Interlude,
12. Evergreen,
13. Little Blue,
14. Celestial Dancers,
15. New Moon,
16. Young Heart`],
  [cd3, "Beautiful Lies", "2016", 
  `1. Growing Pains,
  2. Shadow,
  3. Keeping Your Head Up,
  4. Deep End,
  5. Wild Horses,
  6. Growing Pains,
  7. Lost It All,
  8. Silhouette,
  9. Lifted,
  10. Take My Heart,
  11. Hear You Calling,
  12. Words,
  13. Save Yourself,
  14. Unbroken`], 
  [cd2, "Fire Within", "2012", `
  1. Wings,
  2. Heart of Gold,
  3. Light Me Up,
  4. Words as Weapons,
  5. All You Never Say,
  6. Strange Birds,
  7. Maybe	Birdy,
  8. No Angel,
  9. All About You,
  10. Standing in the Way of the Light,
  11. Shine`
 ],
  [cd1, "Birdy", "2011",`
  1. 1901	Birdy,
  2. Skinny Love,
  3. People Help the People,	
  4. White Winter Hymnal,
  5. The District Sleeps Alone Tonight,
  6. I'll Never Forget You,
  7. Young Blood,
  8. Shelter,
  9. Fire and Rain,
  10. Without a Word,
  11. Terrible Love`]]
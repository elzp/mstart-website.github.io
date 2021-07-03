import './../../dist/App.css';
import React, { useEffect, useState } from 'react';
import { getQuestion } from './../../functionsAndVars';

function Verification(props) {

    const [questionData, setQuestionData] =useState(getQuestion([]));//props.firstQuestion);

    const {question: {question, answers, goodAnswer}, askedQuestions} = questionData;

    const handleAnswering = (event) => {

      const newQuestion = getQuestion(askedQuestions);
      const {question:{question: textOfQuestion}} =  newQuestion;
      if(textOfQuestion !==''){
        setQuestionData(newQuestion);
      }

    }



  return (
    <div 
    className ="verification"
    >
        <h4>We must check if you're a person ;)</h4>
        <h6>Please answer 3 questions.</h6>
        <div className="question">
            text of: {question}
        </div>
        {answers.map((item, index) =><div key={index}>
        <button className="questionsAnswer"
        onClick={(event, item)=>handleAnswering(event)}
        value={item}
        >{item}</button>
        </div>)}
    </div>

  );
}

export default Verification;

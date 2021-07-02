import './../../dist/App.css';
import React, { useState } from 'react';
import { getQuestion } from './../../functionsAndVars';

function Verification(props) {
    // const question ={ question: 'First Question',
    //                 answers: ['1', '2', '3']
    // }  
    const [questionData, setQuestionData] =useState(props.firstQuestion);
    const {question, askedQuestions, answers, goodAnswer} = questionData;


  return (
    <div 
    className ="verification"
    >
        <h4>We must check if you're a person ;)</h4>
        <h6>Please answer 3 questions.</h6>
        <div className="question">
            {question.question}
        </div>
        {question.answers.map((item) =><div key={item}>
        <button className="questionsAnswer"
        >{item}</button>
        </div>)}
    </div>

  );
}

export default Verification;

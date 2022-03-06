import './../../dist/App.css';
import React, { useEffect, useState } from 'react';
import { getQuestion } from './../../functionsAndVars';

function Verification(props) {
    const { setvisibilityOfVerification, setDataFromFormWasSend, setVisibilityOfForm } = props;

    const [questionData, setQuestionData] =useState(getQuestion([]));
    const [numberOfGoodQuestions, setNumberOfGoodQuestions] = useState(0);
    const [text, settext] = useState('');
    const [visibilityOfRestartButton, setVisibilityOfRestartButton] = useState(false);
    const {question: {question: questionText, answers}, askedQuestions} = questionData;
    const errorText = 'You had 5 chances and you did\'t get 3 good answers.';
    const sendText = 'Your\'e message was send. Verification tab will close after about 3 seconds.';

    const handleAnswering = (event) => {
      const goodAnswerObject = answers.filter(it=>it.isGood===true);
      const {answer} = goodAnswerObject[0];
      if(event.target.value === answer){
        setNumberOfGoodQuestions(numberOfGoodQuestions+1);
      }

      const newQuestion = getQuestion(askedQuestions);
      const {question:{question: textOfQuestion}} =  newQuestion;
      if(textOfQuestion !==''){
        setQuestionData(newQuestion);
      }
      else{ 
        if(text !== sendText) {
        // user exceeded limit of 5 questions and didn't answered with 3 good answers
          settext(errorText);
        }
       }
    }

    // handling getting 3 good answers
    useEffect(()=>{
      if(numberOfGoodQuestions===3){
        settext(sendText);

        // area to add function to send data from form 
      }
    }, [numberOfGoodQuestions])

    //// restarting process of verifying
    // show reset button
    useEffect(()=>{
      if(text === errorText) { 
      setVisibilityOfRestartButton(true);
      }
    }, [text])
  
    const handleRestartButton = () => {
      // setting every state to initial value
      settext('');
      setVisibilityOfRestartButton(false);
      setQuestionData(getQuestion([]));
      setNumberOfGoodQuestions(0);
    }

    // handling exiting verification tab
    useEffect(()=>{
      if(text === sendText) {
        setTimeout( () =>{
        setvisibilityOfVerification(false);
        setVisibilityOfForm(false);
        setDataFromFormWasSend(true);// added to form tab be able to close automaticly
        },
        3000);
      };
    }, [text, setvisibilityOfVerification, setVisibilityOfForm, setDataFromFormWasSend])

    const handleExitButton = () => {
      setVisibilityOfRestartButton(false);
      setvisibilityOfVerification(false);
    }

  return (
    <div 
    className ="verification"
    >
        {visibilityOfRestartButton &&
          <button
          id="exit"
          onClick={handleExitButton}
          >x</button>
          }
        <h4>We must check if you're a person ;)</h4>
        <h6>Please answer 3 questions.</h6>
        <div className="question">
            {questionText}
        </div>
        {answers.map((item, index) =><div key={index}>
        <button className="questionsAnswer"
        onClick={(event)=>handleAnswering(event)}
        value={item.answer}
        >{item.answer}</button>
        </div>)}
        <div className="comunicates"><bold>{text}</bold></div>
        <div>
          {visibilityOfRestartButton &&
            <button
            onClick={handleRestartButton}
            >Restart</button>
          }
        </div>
    </div>

  );
}

export default Verification;

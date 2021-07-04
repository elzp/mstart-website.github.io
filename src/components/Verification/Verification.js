import './../../dist/App.css';
import React, { useEffect, useState } from 'react';
import { getQuestion } from './../../functionsAndVars';

function Verification(props) {

    const [questionData, setQuestionData] =useState(getQuestion([]));//props.firstQuestion);
    const [numberOfGoodQuestions, setNumberOfGoodQuestions] = useState(0);
    const [text, settext] = useState('');
    const [visibilityOfRestartButton, setVisibilityOfRestartButton] = useState(false);

    const {question: {question, answers, goodAnswer}, askedQuestions} = questionData;
    const errorText = 'you had 5 chanses and you did\'t get 3 good answers.';
    const sendText = 'your\'e message was send. Verification tab will close after about 3 seconds.';

    const handleAnswering = (event) => {
      
      if(event.target.value === answers[goodAnswer-1]){
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
      if(text == errorText) { 
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
      if(text == sendText) {
        setTimeout( () =>{
        props.setvisibilityOfVerification(false);
        },
        3000);
      };
    }, [text])

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
        <div>{text}</div>
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

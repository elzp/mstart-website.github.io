import './../../dist/App.css';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import useOutsideRef from './../../hooks/outsideRef';

const emptyStrings = ["","","","",""];

function ContactForm(props) {
  const { setVisibilityOfForm, handleSendingButtonClick,
   visibilityOfVerification, wasDataFromFormSend
} = props;
  const wrapper = useRef(null);
  const handlesettingVisibilityOfForm = useCallback(() => {
    if (visibilityOfVerification) {
      setVisibilityOfForm(true)
    } else {
     setVisibilityOfForm(false)
    }
    if(wasDataFromFormSend){
      setVisibilityOfForm(false)
    }
  }, [setVisibilityOfForm, visibilityOfVerification, wasDataFromFormSend]);
  useOutsideRef(wrapper, handlesettingVisibilityOfForm)
  
  const formAreaNames = ["username", "surname", "email", "message", "phone"];
  const defaultFormValues = {
      username: "",
      surname: "",
      email: "",
      message: "",
      phone: "",
  };
  const [formValues, setFormValues] =useState(defaultFormValues);
  const [sendingError, setSendingError] = useState("");

    const [errors, setErrors] = useState(emptyStrings);
    const [statusOfInputedData, setStatusOfInputedData] = useState([true, true, true, true, true]);

  
  const handleClickingButtonToSend = () => {
    if(
    errors === emptyStrings &
    Object.values(formValues).every(it=>it==="")
    ){
       
      handleSendingButtonClick();
      setSendingError("");
    }else {setSendingError("Add all proper informations to send it to us.");}
  }

  useEffect(()=>{
     if( 
      errors === emptyStrings & 
    sendingError!== "" &
    Object.values(formValues).every(it=>it==="")
      ){
        setSendingError(""); //clean error of sending
    }
  }, [errors, formAreaNames, formValues, sendingError
  ]);

  const handleInputChange = (event, type) => {
    // event.preventDefault();
    let existingInput;
    const newStatuses = [ ...statusOfInputedData];
    const input = event.target.value;
    const allInputedKeys = input.split("");

    switch (type){ 
      case formAreaNames[0]:
        setFormValues(current =>{return {...current, [formAreaNames[0]]: input}});

        existingInput = formValues[formAreaNames[0]].split("");
        if(existingInput.length !== allInputedKeys.length) { //if user deleted or added something to input
          newStatuses[0]=false;
          setStatusOfInputedData(newStatuses);
        } 

        if(!/(\W)|(\d)|(\s)/.test(input) & allInputedKeys.length >3) {
          newStatuses[0]=true;
          setStatusOfInputedData(newStatuses);
        } else {
          newStatuses[0]=false;
          setStatusOfInputedData(newStatuses);
        }
        if (input ===""){
          newStatuses[0]=false;
          setStatusOfInputedData(newStatuses);
        }
        break;
      case formAreaNames[1]:
        setFormValues(current =>{return {...current, [formAreaNames[1]]: input}});
        existingInput = formValues[formAreaNames[1]].split("");
        if(existingInput.length !== allInputedKeys.length) { //if user deleted or added something to input
          newStatuses[1]=false;
          setStatusOfInputedData(newStatuses);
        } 

        if(!/(\W)|(\d)|(\s)/.test(input) & allInputedKeys.length >3) {
          newStatuses[1]=true;
          setStatusOfInputedData(newStatuses);
        } else {
          newStatuses[1]=false;
          setStatusOfInputedData(newStatuses);
        }
        if (input ===""){
          newStatuses[1]=false;
          setStatusOfInputedData(newStatuses);
        }
        break;
      case formAreaNames[2]:
        newStatuses[2]=false;
          setStatusOfInputedData(newStatuses);
        setFormValues(current =>{return {...current, [formAreaNames[2]]: input}});
        if(/^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,6}$/.test(input) && /@{1}/.test(input)) {
          newStatuses[2]=true;
          setStatusOfInputedData(newStatuses);
        } 
        break;
      case formAreaNames[3]:
        setFormValues(current =>{return {...current, [formAreaNames[3]]: input}});
        if(input !==""){
          newStatuses[3]=true;
          setStatusOfInputedData(newStatuses);
        } else {
          newStatuses[3]=false;
          setStatusOfInputedData(newStatuses);
        }
        break;
        case formAreaNames[4]:
          setFormValues(current =>{return {...current, [formAreaNames[4]]: input}});
          const lengthOfPhone = (allInputedKeys.length >= 8 & allInputedKeys.length<=11);
          if (/\D[^\s]/.test(input)) {
            newStatuses[4]=false;
            setStatusOfInputedData(newStatuses);
            break;
          }
          if(/(^[^0])(\d)/.test(input) & lengthOfPhone){
            newStatuses[4]=true;
            setStatusOfInputedData(newStatuses);
          } else {
            newStatuses[4]=false;
            setStatusOfInputedData(newStatuses);
          }
          break;        
      default:
        break;
    }
  }

const notNullErrorText = {
  username:`Your name have to contain only letters and have them more than 3.`,
  surname: `Your surname have to contain only letters and have them more than 3.`,
  email: `Your e-mail adress doesn't have  proper e-mail adress format.`,
  message: `Add some message.`,
  phone: `Phone has to contain only numbers and has length between 8 and 11.`,
  }

  const changeErrorText = (index)=>{
    if(!statusOfInputedData[index]) {
      return `${notNullErrorText[formAreaNames[index]]}`;
    } else {
      return "";
    }
  }
  useEffect(()=>{
    const newErrorsText = statusOfInputedData.map((value, index)=>changeErrorText(index));
    setErrors(newErrorsText);
  },[statusOfInputedData])


  useEffect(()=>{
    if(wasDataFromFormSend){
      setFormValues(defaultFormValues);
      setErrors(emptyStrings);
    }
  }, [wasDataFromFormSend])

  return (
    <div 
    id="form"
    // style={style}
    className="form"
    ref={wrapper}
    >
        <h4>If you want us to perform in your event, please fill the form to contact with our manager!</h4>
        <div> 
            <p>Your name:</p>
            <input label="username"
            value={formValues[formAreaNames[0]]}
            onChange={(event) => {
            handleInputChange(event, formAreaNames[0]);}}
            />
            <div className="error"><bold>{errors[0]}</bold></div>
            <p>Your surname:</p>
            <input label="surname"
            value={formValues[formAreaNames[1]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[1])}}
            />
            <div className="error"><bold>{errors[1]}</bold></div>
            <p>Your e-mail adress:</p>
            <input label="e-mail"
            type="email"
            value={formValues[formAreaNames[2]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[2])}}
            />
            <div className="error"><bold>{errors[2]}</bold></div>
            <p>Your phone number:</p>
            <input label="phone"
            type="tel"
            value={formValues[formAreaNames[4]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[4])}}
            />
            <div className="error"><bold>{errors[4]}</bold></div>
            <p>Tell us e.g. when and where you want us to perform concert:</p>
            <textarea label="message"
            value={formValues[formAreaNames[3]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[3])}}
            />
            <div className="error"><bold>{errors[3]}</bold></div>
            <div className="error">{sendingError}</div>
        </div>
        <div><button 
        id="btn-sendform" 
        onClick={handleClickingButtonToSend}
        disabled={visibilityOfVerification}
        >Send your proposition.</button></div>
    </div>

  );
}

export default ContactForm;

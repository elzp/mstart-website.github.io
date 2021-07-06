import './../../dist/App.css';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import useOutsideRef from './../../hooks/outsideRef';


function ContactForm(props) {
  const { setVisibilityOfForm, style, handleSendingButtonClick,
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
  
  const formAreaNames = ["username", "surname", "e-mail", "message", "phone"];
  const defaultFormValues = {
    [formAreaNames[0]]: "",
    [formAreaNames[1]]: "",
    [formAreaNames[2]]: "",
    [formAreaNames[3]]: "",
    [formAreaNames[4]]: "",
  };
  const [formValues, setFormValues] =useState(defaultFormValues);
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [sendingError, setSendingError] = useState("");

    const [statusOfInputedData, setStatusOfInputedData] = useState([true, true, true, true, true]);
    const [nameStatus, surnameStatus, emailStatus, messageStatus, phoneStatus] = statusOfInputedData;

  
  const handleClickingButtonToSend = () => {
    if(
    nameError==="" & 
    surnameError==="" & 
    emailError==="" & 
    messageError==="" & 
    phoneError === "" &
    formValues[formAreaNames[0]] !== "" &
    formValues[formAreaNames[1]] !== "" &
    formValues[formAreaNames[2]] !== "" &
    formValues[formAreaNames[3]] !== "" &
    formValues[formAreaNames[4]] !== ""
    ){
       
      handleSendingButtonClick();
      setSendingError("");
    }else {setSendingError("Add proper e-mail adress, phone number and message to send us informations.");}
  }

  useEffect(()=>{
    if(nameError==="" & 
    surnameError==="" & 
    emailError==="" & 
    messageError==="" & 
    phoneError === "" & 
    sendingError!== "" &
    formValues[formAreaNames[0]] !== "" &
    formValues[formAreaNames[1]] !== "" &
    formValues[formAreaNames[2]] !== "" &
    formValues[formAreaNames[3]] !== "" &
    formValues[formAreaNames[4]] !== ""
      ){
        setSendingError(""); //clean error of sending
    }
  }, [nameError, surnameError, emailError, messageError, phoneError, sendingError]);

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
          setStatusOfInputedData(currentStatuses=> newStatuses);
        setFormValues(current =>{return {...current, [formAreaNames[2]]: input}});
        if(/^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,6}$/.test(input) && /@{1}/.test(input)) {
          newStatuses[2]=true;
          setStatusOfInputedData(currentStatuses=> newStatuses);
        } 
        break;
      case formAreaNames[3]:
        setFormValues(current =>{return {...current, [formAreaNames[3]]: input}});
        if(input !==""){
          newStatuses[3]=true;
          setStatusOfInputedData(currentStatuses=> newStatuses);
        } else {
          newStatuses[3]=false;
          setStatusOfInputedData(currentStatuses=> newStatuses);
        }
        break;
        case formAreaNames[4]:
          setFormValues(current =>{return {...current, [formAreaNames[4]]: input}});
          if(input !=="" & /(^[^0])(\d)/.test(input) & allInputedKeys.length === 8){
            newStatuses[4]=true;
            setStatusOfInputedData(currentStatuses=> newStatuses);
          } else {
            newStatuses[4]=false;
            setStatusOfInputedData(currentStatuses=> newStatuses);
          }
          break;        
      default:
        break;
    }
  }

  useEffect(()=>{
    if(!nameStatus) {
      setNameError('Your name have to contain only letters and have them more than 3.');
    } else {
      setNameError("");
    }
  },[nameStatus])

  useEffect(()=>{
    if(!surnameStatus) {
      setSurnameError('Your surname have to contain only letters and have them more than 3.');
    } else {
      setSurnameError("");
    }
  },[surnameStatus])

  useEffect(()=>{   
    if(!emailStatus) {
      setEmailError("Your e-mail adress doesn't have  proper e-mail adress format.");
      } else {
        setEmailError("");
      }
    },[emailStatus])
  
  useEffect(()=>{
    if(!messageStatus) {
      setMessageError("Add some message.");
    } else {
      setMessageError("");
    }
  },[messageStatus])

  useEffect(()=>{
    if(!phoneStatus) {
      setPhoneError("Phone has to contain only numbers and has length of 8.");
    } else {
      setPhoneError("");
    }
  },[phoneStatus])

  useEffect(()=>{
    if(wasDataFromFormSend){
      setFormValues(defaultFormValues);
      setNameError("");
      setSurnameError("");
      setEmailError("");
      setMessageError("");
      setPhoneError("");
    }
  }, [wasDataFromFormSend])

  return (
    <div 
    id="form"
    style={style}
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
            <div className="error"><bold>{nameError}</bold></div>
            <p>Your surname:</p>
            <input label="surname"
            value={formValues[formAreaNames[1]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[1])}}
            />
            <div className="error"><bold>{surnameError}</bold></div>
            <p>Your e-mail adress:</p>
            <input label="e-mail"
            type="email"
            value={formValues[formAreaNames[2]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[2])}}
            />
            <div className="error"><bold>{emailError}</bold></div>
            <p>Your phone number:</p>
            <input label="phone"
            type="tel"
            value={formValues[formAreaNames[4]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[4])}}
            />
            <div className="error"><bold>{phoneError}</bold></div>
            <p>Tell us e.g. when and where you want us to perform concert:</p>
            <textarea label="message"
            value={formValues[formAreaNames[3]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[3])}}
            />
            <div className="error"><bold>{messageError}</bold></div>
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

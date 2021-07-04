import './../../dist/App.css';
import React, { useRef, useCallback, useState } from 'react';
import useOutsideRef from './../../hooks/outsideRef';


function ContactForm(props) {
  const { setVisibilityOfForm, style, handleSendingButtonClick } = props;
  const wrapper = useRef(null);
  const handlesettingVisibilityOfForm = useCallback(() => setVisibilityOfForm(false), [setVisibilityOfForm]);
  useOutsideRef(wrapper, handlesettingVisibilityOfForm)
  
  const formAreaNames = ["username", "surname", "e-mail", "message"];
  const [formValues, setFormValues] =useState(
    {
      [formAreaNames[0]]: null,
      [formAreaNames[1]]: null,
      [formAreaNames[2]]: null,
      [formAreaNames[3]]: null,
    })


  const handleInputChange = (event, type) => {
    // event.preventDefault();
    const input = event.target.value;
    switch (type){ 
      case formAreaNames[0]:
        setFormValues(current =>{return {...current, [formAreaNames[0]]: input}});
        break;
      case formAreaNames[1]:
        setFormValues(current =>{return {...current, [formAreaNames[1]]: input}});
        break;
      case formAreaNames[2]:
        setFormValues(current =>{return {...current, [formAreaNames[2]]: input}});
        break;
      case formAreaNames[3]:
        setFormValues(current =>{return {...current, [formAreaNames[3]]: input}});
        break;      
      default:
        break;
    }
  }

  return (
    <div 
    style={style}
    ref={wrapper}
    >
        <h4>If you want us to perform in your event, please fill the form to contact with our manager!</h4>
        <div> 
            <p>Your name:</p>
            <input label="username"
            value={formValues[formAreaNames[0]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[0])}}
            />
            <p>Your surname:</p>
            <input label="surname"
            value={formValues[formAreaNames[1]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[1])}}
            />
            <p>Your e-mail adress:</p>
            <input label="e-mail"
            value={formValues[formAreaNames[2]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[2])}}
            />
            <p>Tell us e.g. when and where you want us to perform concert:</p>
            <textarea label="message"
            value={formValues[formAreaNames[3]]}
            onChange={(event) => {handleInputChange(event, formAreaNames[3])}}
            />
        </div>
        <div><button 
        id="btn-sendform" 
        onClick={handleSendingButtonClick}
        >Send your proposition.</button></div>

    </div>

  );
}

export default ContactForm;

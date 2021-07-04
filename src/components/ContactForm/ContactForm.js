import './../../dist/App.css';
import React, { useRef, useCallback } from 'react';
import useOutsideRef from './../../hooks/outsideRef';


function ContactForm(props) {
  const { setVisibilityOfForm, style, handleSendingButtonClick } = props;
  const wrapper = useRef(null);
  const handlesettingVisibilityOfForm = useCallback(() => setVisibilityOfForm(false), [setVisibilityOfForm]);
  useOutsideRef(wrapper, handlesettingVisibilityOfForm)
  
  return (
    <div 
    style={style}
    ref={wrapper}
    >
        <h4>If you want us to perform in your event, please fill the form to contact with our manager!</h4>
        <div> 
            <p>Your name:</p>
            <input label="name"/>
            <p>Your surname:</p>
            <input label="surname"/>
            <p>Your e-mail adress:</p>
            <input label="e-mail"/>
            <p>Tell us e.g. when and where you want us to perform concert:</p>
            <textarea />
        </div>
        <div><button 
        id="btn-sendform" 
        onClick={handleSendingButtonClick}
        >Send your proposition.</button></div>

    </div>

  );
}

export default ContactForm;

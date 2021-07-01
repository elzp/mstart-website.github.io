import './../../dist/App.css';
import React from 'react';

function ContactForm(props) {

  
  return (
    <div>
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
        <div><button id="btn-sendform" >Send your proposition.</button></div>

    </div>

  );
}

export default ContactForm;

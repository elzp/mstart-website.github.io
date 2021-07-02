import './dist/App.css';
import img from './Birdy-header.jpg'
import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactForm'
import Verification from './components/Verification/Verification'
import { parametersOfSlideForm, defaultformStyle } from './functionsAndVars';
import { useState } from 'react';

function App() {

  const [visibilityOfForm, setVisibilityOfForm] = useState(false);
  const [formStyle, setFormStyle] = useState(defaultformStyle);
  const [timesOfStyleChanges, setTimesOfStyleChanges ] = useState(0);
  const [visibilityOfVerification, setvisibilityOfVerification] = useState(false);

  const handleContactButtonClick = () =>{
    setVisibilityOfForm(true);
    if (timesOfStyleChanges === 0){setFormStyle(
      Object.assign(
        formStyle, 
        parametersOfSlideForm(
          3, 
          "slidein", 
          "inline"
        )
      )    
    );
    // added to not append additional style properties to css, which gives error
    setTimesOfStyleChanges(timesOfStyleChanges+1);
    }
  }

  const handleSendingButtonClick = () =>{
    setvisibilityOfVerification(!visibilityOfVerification);
  }

  return (
    <div className="App">
      <header>
        <div>
          <div> 
          <img src={img} alt="header-img"></img>
          </div>
        </div>
      </header>
      <main> 
        <div>
        {/* <iframe width="450" height="auto" src="https://www.youtube.com/embed/OmLNs6zQIHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
        <div>
          {/* <iframe width="450" height="auto" src="https://www.youtube.com/embed/WJTXDCh2YiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
        <div>
          <div>
          <About />
          </div>
            <button id="btn-contact" 
            disabled={visibilityOfForm}
            onClick={handleContactButtonClick}
            >Contact us!</button>
         </div>
         { visibilityOfForm &&
         <ContactForm 
         style={formStyle} 
         setVisibilityOfForm={setVisibilityOfForm}
         handleSendingButtonClick={handleSendingButtonClick}
         />
         }
         {visibilityOfVerification &&
          <Verification
          /> 
          }
      </main>
    </div>
  );
}

export default App;

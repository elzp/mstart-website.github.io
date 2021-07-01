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
  

  const handleFormButtonClick = () =>{
    setVisibilityOfForm(true);
    setFormStyle(
      Object.assign(
        formStyle, 
        parametersOfSlideForm(
          3, 
          "slidein", 
          "inline"
        )
      )    
    )
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
            onClick={handleFormButtonClick}
            >Contact us!</button>
         </div>
         { visibilityOfForm &&
         <ContactForm 
         style={formStyle} 
         changeStyle={setFormStyle} 
         visibilityOfForm={visibilityOfForm}
         setVisibilityOfForm={setVisibilityOfForm}
         />
         }
         {/* <Verification /> */}
      </main>
    </div>
  );
}

export default App;

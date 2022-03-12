import './dist/App.css';
import img from './header-american-songwriter.jpg'
import About from './components/About/About'
import Videos from './components/Videos/Videos'
import ContactForm from './components/ContactForm/ContactForm'
import { useState } from 'react';

function App() {

  const [visibilityOfForm, setVisibilityOfForm] = useState(false);
  const [timesOfStyleChanges, setTimesOfStyleChanges ] = useState(0);
  // const [visibilityOfVerification, setvisibilityOfVerification] = useState(false);
  const [wasDataFromFormSend, setDataFromFormWasSend] = useState(false);

  const handleContactButtonClick = () =>{
  
    setDataFromFormWasSend(false); //added to not closing form, when it is opening after succesfully send data from form. 
    setVisibilityOfForm(true);
    if (timesOfStyleChanges === 0){
        // added to not append additional style properties to css, which gives error
    setTimesOfStyleChanges(timesOfStyleChanges+1);
    }
  }

  // const handleSendingButtonClick = () =>{
  //   setvisibilityOfVerification(!visibilityOfVerification); 
  // }

  return (
    <div className="App">
      <header>
          <div className="header-wrapper"> 
          <img src={img} alt="header-img"></img>
          <h1>BIRDY</h1>
          </div>
      </header>
      <main>      
        <div>
          <About />
          <Videos/>
            <button id="btn-contact" 
            disabled={visibilityOfForm}
            onClick={handleContactButtonClick}
            >Contact with us!</button>
        </div>
         
        { visibilityOfForm &&
         <ContactForm 
         setVisibilityOfForm={setVisibilityOfForm}
        //  handleSendingButtonClick={handleSendingButtonClick}
        //  visibilityOfVerification={visibilityOfVerification}
         wasDataFromFormSend={wasDataFromFormSend}
         setDataFromFormWasSend={setDataFromFormWasSend}
         />
         }
         {/* {visibilityOfVerification &&
          <Verification
          firstQuestion={getQuestion([])}
          setvisibilityOfVerification={setvisibilityOfVerification}
          setDataFromFormWasSend={setDataFromFormWasSend}
          setVisibilityOfForm={setVisibilityOfForm}
          /> 
          } */}
      </main>
    </div>
  );
}

export default App;

import './dist/App.css';
import img from './header-american-songwriter.jpg'
import About from './components/About/About'
import Video from './components/Video/Video'
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
const videos = [
  { 
    videoId: 'OmLNs6zQIHo',
    title: 'people help the people',
  },
  { 
    videoId: 'WJTXDCh2YiA',
    title: 'wings',
  },
  { 
    videoId: '6K25KhCq7p8',
    title: 'second hand news',
  },
]

const [idOfDisplayedVideo, setIdOfDisplayedVideo ] = useState(0);

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
          <div>
            <h4>Listen some of her songs.</h4>
            <div className="videos">
              <div className="videos-main">
                <div className="videos-wrapper"> 
                    <iframe 
                    src={`https://www.youtube.com/embed/${videos[idOfDisplayedVideo].videoId}`} 
                    title={videos[idOfDisplayedVideo].title} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div className="videos-list">
                {videos.map((item, index)=>(
                    <Video 
                    id={index}
                    videoId={item.videoId} 
                    title={item.title} 
                    setIdOfDisplayedVideo={setIdOfDisplayedVideo}
                    />
                ))
                }
              </div>
            </div>
          </div>
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

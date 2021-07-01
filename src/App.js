import './dist/App.css';
import img from './Birdy-header.jpg'
import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactForm'
import Verification from './components/Verification/Verification'

function App() {

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
            <button id="btn-contact">Contact us!</button>
         </div>
         <ContactForm />
         <Verification />
      </main>
    </div>
  );
}

export default App;

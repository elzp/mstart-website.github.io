import { useState } from 'react';

function MainVideo (props) {
    const chosenVid = props.chosenVideo;
    const [ isLoaded, setIsLoaded ] = useState(false);
    return (
        <div className="videos-main">
            
            {
            !isLoaded &&  
            (<div className="fallback" id="fallback"> Video is loading.</div>) 
            }
            <div className="videos-wrapper"> 
                
                <iframe 
                id="iframe"
                src={`https://www.youtube.com/embed/${chosenVid.videoId}`} 
                title={chosenVid.title} 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                onLoad = {()=> {
                    setIsLoaded(true)
                }}
                ></iframe> 
            </div>
        </div>
    )
}

export default MainVideo;
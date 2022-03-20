import './../../dist/App.css';

function Video (props) {
    const setId = () => props.setIdOfDisplayedVideo(props.id);
    return (
      <div className="video" onClick={()=>setId()} 
      onKeyPress={(event)=>{if(event.key === "Enter") setId()}}
      tabIndex="0"> 
        <h6>{props.title}</h6>
        <div>
        <img src={`https://i1.ytimg.com/vi/${props.videoId}/sddefault.jpg`} alt={props.title} />
        </div>
      </div>

    )
}

export default Video;
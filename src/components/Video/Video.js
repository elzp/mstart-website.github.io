import './../../dist/App.css';

function Video (props) {

    return (
      <div className="video" onClick={()=>props.setIdOfDisplayedVideo(props.id)}> 
        <h6>{props.title}</h6>
        <div>
        <img src={`https://i1.ytimg.com/vi/${props.videoId}/sddefault.jpg`} alt={props.title} />
        </div>
      </div>

    )
}

export default Video;
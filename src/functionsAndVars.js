const gbColor ="#201212";

export const defaultformStyle = {
  background: gbColor,
  height: "100vh",
  width: "50vw",
  position: "absolute",
  border: "1px solid red",
  margin: "0 0 0 0",
  top: "0px",
  top: "0px",
  left: "0px",
  display: "none",
  position: "fixed",
};

export const parametersOfSlideForm = (animationDuration, animationName, displayVar)=>{
    return {
      "animation-duration": `${animationDuration}s`,
      "animation-name": animationName,
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
      display: displayVar
}};

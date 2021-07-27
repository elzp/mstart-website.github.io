import './../../dist/App.css';
import React from 'react';
import {infoAboutCds} from '../../functionsAndVars';


function Discography(props) {
  const cdsArray = infoAboutCds;

  return (
    <div id="discs">
      <h4>Discography</h4>
      <div className="disc-wrapper">
         {
           cdsArray.map((it, index)=>{
            return (
            <div className="disc-container">
              <div key={index}
              className="disc-img">
                {it[3].split(",").map(it1=>(<p>{it1}</p>))}
                <img src={it[0]} 
                alt= {it[1]}
                />
              </div>
              <div 
              className="disc-text"
              key={index}>
                <p className="disc-title">{it[1]}</p>
                <p className="disc-year">{it[2]}</p>
                </div>
            </div>
            );}
            )
         } 
      </div>
    </div>

  );
}
export default Discography;

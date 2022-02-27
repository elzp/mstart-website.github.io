import './../../dist/App.css';
import React, {useState} from 'react';
import {infoAboutCds} from '../../functionsAndVars';
import styled from 'styled-components'


const Image = styled.img`
transform: ${props => props.count ? "translateX(-90%)" : "translateX(0%)"};
`

function Discography(props) {
  const cdsArray = infoAboutCds;
  const [count, setcount] =useState(//0);
  {0:false,1:false,2:false,3:false});

  const slideInOut = (index) =>{
    setcount(count=> 
      { const f = 
       {...count, 
         [index]: !count[index],
       };
       return f;
       }
       )
  }

  return (
    <div id="discs">
      <h4>Discography</h4>
      <div className="disc-wrapper">
         {
           cdsArray.map((it, index)=>{
            return (
            <div className="disc-container">
              <div key={`dev-${index}`}
              className="disc-img">
                <div>
                {it.songs.split(",").map(it1=>(<p>{it1}</p>))}
                </div>
                <Image key={`img-${index}`} src={it.image} count={count[index]}
                alt={`${it.title} cover`}
                tabIndex="1"
                onMouseOver={()=>slideInOut(index)}
                onKeyPress={()=>slideInOut(index)}
                alt= {it[1]}
                />
              </div>
              <div 
              className="disc-text"
              key={`text-${index}`}>
                <p className="disc-title">{it.title}</p>
                {/* <p  key={`p-${index}`} >{JSON.stringify(count[index])}</p> */}
                <p className="disc-year">{it.year}</p>
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

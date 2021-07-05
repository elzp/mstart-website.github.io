import './../../dist/App.css';
import React from 'react';
import Discography from './../Discography/Discography';

function About(props) {
  let conetentText = `Her debut single, a cover version of Bon Iver's "Skinny Love",
   was her breakthrough, charting all across Europe and earning platinum certification
   six times in Australia. Her self-titled debut album, Birdy, was peaking at number one
   in Australia, Belgium and the Netherlands. At the 2014 Brit Awards, she was nominated
   for Best British Female Solo Artist.`;

  let temporaryContentArray = conetentText.split(".");
  temporaryContentArray.pop();
  const contentArray = temporaryContentArray.map(it => it+".");

      
  return (
    <div className ="about">
        <h2>Winner of <b>Open Mic UK</b> competition in 2008, at the age of <b>12</b>.</h2>
        {
          contentArray.map((it, index)=>(
            <div key={index}> 
              {it}
            </div>
          ))
        }
    <Discography />
    </div>

  );
}

export default About;

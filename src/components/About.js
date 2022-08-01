import React from "react";
import Links from "./Links"

//console.log(user.bio)
function About(props) {
  
 
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio === undefined || props.bio.length === 0 ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
  }
  

export default About;

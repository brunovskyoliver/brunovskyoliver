import React, { useEffect } from 'react';
import './About.css';
  
function About (){
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        let interval = null;
      
        const onMouseOver = event => {  
          let iteration = 0;
        
          clearInterval(interval);
        
          interval = setInterval(() => {
            event.target.innerText = event.target.innerText
              .split("")
              .map((letter, index) => {
                if(index < iteration) {
                  return event.target.dataset.value[index];
                }
              
                return letters[Math.floor(Math.random() * 26)]
              })
              .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
              clearInterval(interval);
            }
            
            iteration += 1 / 3;
          }, 30);
        };
    
        const h1Element = document.querySelector("h1");
        h1Element.addEventListener("mouseover", onMouseOver);
        
        return () => {
          h1Element.removeEventListener("mouseover", onMouseOver);
          clearInterval(interval);
        };
      }, []);
    return (
    <div className="subtitle">
        <h1 className='about' data-value="About me">About me</h1>
    </div>
    )
   
}
  
export default About;
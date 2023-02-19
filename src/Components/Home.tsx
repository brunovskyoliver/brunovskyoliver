import React, { useEffect } from 'react';
import "../Home.css";
  
function Home() {
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

  return <div className='subtitle'>
            <h1 data-value="Welcome">Welcome</h1>
            <h2>to my portfolio</h2>
          </div>
}
  
export default Home;

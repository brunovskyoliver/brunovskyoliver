import React, { useEffect } from 'react';
import './About.css';
  
function About (): JSX.Element {
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        let interval: NodeJS.Timeout | null = null;
      
        const onMouseOver = (event: MouseEvent) => {  
            let iteration = 0;
          
            clearInterval(interval as NodeJS.Timeout);
          
            const target = event.target as HTMLElement; 
          
            interval = setInterval(() => {
              target.innerText = target.innerText
                .split("")
                .map((letter, index) => {
                  if(index < iteration) {
                    return target.dataset.value![index];
                  }
                  return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
          
              if(iteration >= target.dataset.value!.length){ 
                clearInterval(interval as NodeJS.Timeout);
              }
          
              iteration += 1 / 3;
            }, 30);
          };
          
    
        const h1Element = document.querySelector("h1") as HTMLElement;
        h1Element.addEventListener("mouseover", onMouseOver);
        
        return () => {
          h1Element.removeEventListener("mouseover", onMouseOver);
          clearInterval(interval as NodeJS.Timeout);
        };
      }, []);
    return (
    <div className="subtitle">
        <h1 className='about' data-value="About me">About me</h1>
    </div>
    )
}
  
export default About;

import React, { useEffect } from 'react';
import "../Home.css";

function Home(): JSX.Element {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval: NodeJS.Timeout | null = null;

    const onMouseOver = (event: MouseEvent) => {  
      let iteration = 0;

      clearInterval(interval as NodeJS.Timeout);

      interval = setInterval(() => {
        (event.target as HTMLHeadingElement).innerText = (event.target as HTMLHeadingElement).innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return (event.target as HTMLHeadingElement).dataset.value![index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");

        if(iteration >= (event.target as HTMLHeadingElement).dataset.value!.length){ 
          clearInterval(interval as NodeJS.Timeout);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = document.querySelector("h1") as HTMLHeadingElement;
    h1Element.addEventListener("mouseover", onMouseOver);

    return () => {
      h1Element.removeEventListener("mouseover", onMouseOver);
      clearInterval(interval as NodeJS.Timeout);
    };
  }, []);

  return (
    <div className='subtitle'>
      <h1 data-value="Welcome">Welcome</h1>
      <h2>to my portfolio</h2>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
    const [isChecked, setIsChecked] = useState(true);
    const switchId = 'my-switch';
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
      document.body.classList.toggle('light-mode');
    }
  
    return (
      <div className="box">
        <label className="switch" htmlFor={switchId}>
          <input type="checkbox" checked={isChecked} onChange={handleToggle} id={switchId} />
          <span className="slider"></span>
.
        </label>
      </div>
    );
  };
  

export default Switch;

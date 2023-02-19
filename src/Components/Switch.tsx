import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    document.body.classList.toggle('light-mode');
  }

  return (
    <div className="box">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;

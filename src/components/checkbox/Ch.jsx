import React, { useState } from 'react';


const Ch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <label className="burger block cursor-pointer" htmlFor="burger">
      <input
        type="checkbox"
        id="burger"
        className="hidden"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <span
        className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${
          isOpen ? 'transform rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-black mb-1 transition-opacity ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-black transition-transform ${
          isOpen ? 'transform -rotate-45 -translate-y-1' : ''
        }`}
      ></span>
    </label>
  );
};

export default Ch;

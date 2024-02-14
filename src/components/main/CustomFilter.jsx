import React, { useState } from 'react';
import './main.css'; // Import the CSS file
import round from '../../images/verify-round.svg'
import roundColor from '../../images/Vector.svg'
import more from '../../images/Vector 335.svg'
import vector from '../../images/caret-small-down.svg'
const CustomFilter = ({ type, options, hint }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="filters-container">
      <p>{type}</p>
      <div>
        <div className="custom-select-container" onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-option">
            {selectedOption || 'Select an option'}
          </div>
          {isOpen && (
            <div className="options-list">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="option"
                  onClick={() => handleSelectOption(option)}
                >
                  <img src={selectedOption === option ? roundColor : round} alt="" />
                  <p className={selectedOption === option ? 'selected' : ''}>{option}</p>
                </div>
              ))}
            </div>
          )}
          {isOpen ? (<img src={vector} alt="" />) : (<img src={more} alt="" />)}
        </div>
      </div>
      {!isOpen && <p className='hint'>{hint}</p>}
    </div>
  );
};

export default CustomFilter;

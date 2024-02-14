import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
      const [active, setActive] = useState('Alerts');

      const handleActive = (e) => {
            setActive(e.target.textContent);
      };

      return (
            <nav className='nav_bar'>
                  <div className={`head ${active === 'Trading' ? 'active' : ''}`} onClick={handleActive}>
                        <h2>Trading</h2>
                        <span className='coming_soon'>coming soon</span>
                  </div>
                  <span className='line'></span>
                  <div className={`head ${active === 'Automation' ? 'active' : ''}`} onClick={handleActive}>
                        <h2>Automation</h2>
                        <span className='coming_soon'>coming soon</span>
                  </div>
                  <span className='line'></span>
                  <div className={`head ${active === 'Portfolio' ? 'active' : ''}`} onClick={handleActive}>
                        <h2>Portfolio</h2>
                        <span className='coming_soon'>coming soon</span>
                  </div>
                  <span className='line'></span>
                  <div className={`head ${active === 'Alerts' ? 'active' : ''}`} onClick={handleActive}>
                        <h2>Alerts</h2>
                  </div>
                  <span className='line'></span>
                  <div className={`head ${active === 'Training' ? 'active' : ''}`} onClick={handleActive}>
                        <h2>Training</h2>
                  </div>
            </nav>
      );
};

export default Nav;

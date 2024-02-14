import React from 'react'
import './header.css'
import logo from '../../images/street suite logo-04 1.png'
import search from '../../images/search.svg'
import notifications from '../../images/icon.svg'
import user from '../../images/man-438081_960_720.png'
import more from '../../images/More.svg'

const Header = () => {
      return (
            <header className='header_section'>
                  <div className='left'>
                        <img src={logo} alt="Street Suite Logo" />
                  </div>
                  <div className='right'>
                        <div className="search_bar">
                              <img src={search} alt="" />
                              <input type="search" placeholder="Search"></input>
                        </div>
                        <div className="user_info">
                              <div className='notifications'>
                                    <img src={notifications} alt="" />
                                    <span className='badge'>6</span>
                              </div>
                              <img className='user_img' src={user} alt="" />
                              <div className='user_profile'>
                                    <p>Mani Roy</p>
                                    <span>Admin</span>
                              </div>
                              <img src={more} alt="" />
                        </div>
                  </div>
            </header>
      )
}

export default Header
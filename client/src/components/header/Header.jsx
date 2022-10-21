import React from 'react'
import {useState} from 'react';
import './header.css'
const Header = () => {
    const [menu,setMenu]=useState(false);
    const toggle=()=>{
        setMenu(!menu);
    }
  return (
    <div className="mobile-menu-wrapper">
   
    <div className={`mobile-menu only-mobile ${menu?"overlay":""}`}>
    <div className='mobile-navbar'>
        <div className='mobile-nav-item'>credit score check</div>
        <div  className='mobile-nav-item'>CRED pay</div>
        </div> 

    </div>
      

        <div className="flex max-width header">
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" className='header-logo' alt="" />
            <div className='only-mobile mobile-menu-wrapper'>
        <button className={`hamburger hamburger--spin ${menu?"is-active":""}`}type="button" onClick={toggle}>
        <span class="hamburger-box">
        <span class="hamburger-inner"></span>
       </span>
        </button>  
        </div>
        
        <div className='non-mobile flex'>
        <div className='header-nav-item'>credit score check</div>
        <div  className='header-nav-item'>CRED pay</div>
        </div> 
        </div>
       
    </div>
    )
}

export default Header
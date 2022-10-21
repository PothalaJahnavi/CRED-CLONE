import React from 'react'
import Home from "../home/Home";
import Header from '../header/Header';
import Phones from '../phones/Phones';
import FeelSpecial from '../feelSpecial/FeelSpecial';
import Money from '../money/Money';
import Security from '../security/Security';
import CredStory from '../credStory/CredStory';
import Brand from '../brand/Brand';
import Scroll from '../scroll/Scroll'
import MobileScroll from '../mobileScroll/MobileScroll';
import AppRating from '../appRating/AppRating';
const Main = () => {
  return (
    <>
        <Header/>
        <Home/>
        <Phones/>
        <FeelSpecial/>
        <Brand/>
        <Money/>
        <MobileScroll />
        <div className='non-mobile'>
        <Scroll/>
        </div>
        <Security/>
        <CredStory/>
        <AppRating/>
    </>
  )
}

export default Main
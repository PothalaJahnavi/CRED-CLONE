import React from 'react'
import Button from '../button/Button';
import './money.css'
const Money=() => {
  return (
    <div className='money photo-section'>
    <div className="max-width">
     <div className="photo-section-child">
 
     <div className="photo-section-top">
    <div className="photo-section-heading">we take your money
matters seriously.</div>
    <div className="photo-section-subheading">so that you don’t have to.</div>
     </div>
     <div className="photo-section-bottom">
       <div className="photo-section-description">never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.</div>
       <div className="photo-section-bottom-button">
         <Button buttonText="Experience the upgrade"/>
       </div>
     </div>
    </div>
     </div>
     </div>
  )
}

export default Money;
import React from 'react'
import Button from '../button/Button'
import './home.css'
const Home = () => {
  return (
  <div className="main-section-wrapper">
   <div className="main-lable flex center">
    <div>
    pay credit card bill. earn guaranteed ₹200 back.
    </div>
    <div className="main-anchor">
    claim now <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" className='claim-arrow' alt="" />
    </div>
   </div>


    <div className="main-section max-width flex center flex-col">

    <div className="main-heading ">
    rewards for paying credit card bills.
    </div>
    <div className="main-subtitle">
    join 9M+ members who win rewards and cashbacks everyday
    </div>
    <Button buttonText="Download CRED"/>

    </div>   
  </div>
  )
}

export default Home
import React from 'react'
import Button from '../button/Button'
import './apprating.css'
const AppRating = () => {

    const addPrefix=()=>{
        return <img src='ttps://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png' alt=""/>
    }

  return (
    <div className="rating ">

        <div className="rating-wrapper flex max-width">

          <div className="app-rating">
            <div className="app-rating-value flex">
            <p className='rating-heading'>4.8</p> 
            <p className='rating-heading-1'>app store</p>
            </div>
            <div className="star" style={{paddingBottom:"30px"}}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="" className='rating-img'/>
            </div>
            <div className="non-mobile">
            <Button buttonText="Download the app" prefix={addPrefix()}/>
            </div>
          </div>

          <div className="app-rating">
            <div className="app-rating-value flex">
            <p className='rating-heading'>4.7</p> 
            <p className='rating-heading-1'>play store</p>
            </div>
            <div className="star"style={{paddingBottom:"30px"}}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="" className='rating-img'/>
            </div>
            <div className="non-mobile">
            <Button buttonText="Download the app"/>
            </div>
            </div>

        </div>
    </div>
  )
}

export default AppRating

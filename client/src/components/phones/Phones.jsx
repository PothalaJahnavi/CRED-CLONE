import React from 'react'
import './phones.css';
import {useState,useEffect,useRef} from 'react'
const Phones = () => {
    const [animate,setAnimate]=useState(false)
    const ref=useRef(null)

    const toggleAnimate=(e)=>{
        if(e[0].isIntersecting)
        {setAnimate(true);}
    }
    const options={
        root:null,
        roorMargin:'0px',
        threshold:0.5
    }
    useEffect(() => {
        return () => {
            const observer=new IntersectionObserver(toggleAnimate,options)
            if(!animate)
            {
                if(ref.current)
                {
      observer.observe(ref.current);
                }
            }
            return()=>{
                observer.unobserve(ref.current)
            }
        };
    })
  return (
    <div className={`phones-showcase ${animate?"scale-in-bottom":""}`}
     ref={ref}
    >
        {animate&&<div className='phones-showcase-wrapper'>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-2.png" className='phone-1 phone' alt="" />
        <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-1.png" className='phone-2 phone'  alt="" />
        <img src="    https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-center.png" className='phone-3 phone'  alt="" />
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-1.png" className='phone-4 phone' alt="" />
        <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-2.png" className='phone-5 phone'  alt="" />
        </div>}
  </div>
  )
}

export default Phones
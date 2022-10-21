import React from 'react'
import './screenText.css';
import {useState,useEffect,useRef} from 'react';
const ScreenText = ({screen,i,setCurrentImg}) => {
    const [animate,setAnimate]=useState(false)
    const ref=useRef(null)

    const toggleAnimate=(e)=>{
        if(e[0].isIntersecting)
        {setAnimate(true);
        setCurrentImg(i);
        }
    }
    const options={
        root:null,
        roorMargin:'0px',
        threshold:0.5
    }
    useEffect(() => {
        return () => {
            const observer=new IntersectionObserver(toggleAnimate,options)
             if(ref.current)
                {
      observer.observe(ref.current);
                }
            return()=>{
                observer.unobserve(ref.current)
            }
        };
    })

  return (
   <div className={`screenText-outer ${animate?"text-visible":""}`} ref={ref}>
    
    <div className="screenText-heading">
  {screen.heading}
    </div>
    <div className="mobile-mockup-wrapper only-mobile">
           <div className="mobile-mockup">
            <div className="mobile-mockup-screen">
                <img src={screen.img} alt="" className='mobile-screen-img' key={screen.img}/>
            </div>
           </div>
        </div>  
        <div className="screenText-description">
        {screen.description}
</div> 
        </div>
  )
}

export default ScreenText
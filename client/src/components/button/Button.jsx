import React from 'react'
import  './button.css'
const Button = ({buttonText,prefix,customClass}) => {
  return (
    <div className={`flex center button-wraper ${customClass}`}>
      {prefix} {buttonText}
    </div>
  )
}

export default Button
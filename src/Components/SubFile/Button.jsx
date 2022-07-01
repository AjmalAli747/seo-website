import React from 'react';
import "../SubFile/SubFile.css";

const Button = (props) => {

  return (
    <>
      <button className='button_style'>{props.button}</button>
    </>
  )
}

export default Button
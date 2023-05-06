import React from 'react'
import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
// import { Textfit } from 'react-textfit';
const Interface = () => {
  
  const {calc} = useContext(CalcContext);
  
  return (
    <div className='interface' max ={70} mode = 'single'>{calc.num ? calc.num : calc.res}</div>
  )
}

export default Interface
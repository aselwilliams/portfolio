import React, {useContext} from 'react';
import './toggle.css';
import sun from '../images/sun.png'
import moon from '../images/moon.png';
import {ThemeContext} from '../context'

function Toggle() {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
    theme.dispatch({type: 'TOGGLE'})
    }
  return (
    <div className='t'>
        <img src={sun} alt='sun' className='t-icon'/>
        <img src={moon} alt='moon' className='t-icon'/>
        <div className='t-button' onClick={handleClick} style={{left:theme.state.darkMode ?  0 : 25}}></div>
    </div>
  )
}

export default Toggle
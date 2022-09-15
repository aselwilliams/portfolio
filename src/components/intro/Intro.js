import React from 'react';
import './Intro.css'
import sphere from '../images/sphere.jpg';


function Intro() {
  return (
    <div className='i'>
     <div className="i-left">
         <div className="i-left-wrapper">
           <h2 className='i-intro'>Hello, My name is</h2>
           <h1 className='i-name'>Asel Williams</h1>  
           <div className="i-title">
               <div className="i-title-wrapper">
                   <div className="i-title-item">Front-End Developer</div>
                   <div className="i-title-item">React Developer</div>
               </div>
           </div>
           <p className="i-desc">
           I build scalable and responsive web applications using JavaScript, ES6, React.js, Redux, HTML5, CSS3. I strongly believe that Collaboration is the key to diversity of thought and the generation of ideas and solutions. 
           </p>
           <a href='#contact-me' className='i-btn'>Get In Touch</a>
         </div>
     </div>
    <div className="i-right">
      <div className="i-bg">
        <img src={sphere} alt='sphere'/>
      </div>
    </div>
    </div>
  )
}

export default Intro
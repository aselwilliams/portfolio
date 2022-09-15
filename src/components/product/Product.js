import React from 'react';
import './product.css';


function Product({link, img, desc, title}) {
 
  return (
    <div className='p-container'>
    <div className='p'>
        <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="celebrity" className="p-img" />
      </a>
     
    </div>
    <h2>{title}</h2>
    {/* <div className='para-bg'> */}
       <p className='para'>{desc}</p>
       </div>
    // </div>
  )
}

export default Product
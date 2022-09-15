import React from 'react';
import Product from '../product/Product';
import './projects.css';
import {products} from '../data';
import ecommerce from '../images/ecommerce.png';
import whatsapp from '../images/whatsapp.png';
import clocks from '../images/clocks.png'

function Projects() {
  let images=[whatsapp,ecommerce,clocks]
  return (
    <div className='pl'>
 <div className="pl-texts">
        <h1 className="pl-title">Featured Projects</h1>
      </div>
      <br/>
      <div className="pl-list">
        {products.map((item,i) => (
          <Product key={item.id} img={images[i]} link={item.link} desc={item.desc} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Projects
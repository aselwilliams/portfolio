import React from "react";
import Product from "../product/Product";
import "./projects.css";
import { products } from "../data";
import ecommerce from "../images/ecommerce.png";
import whatsapp from "../images/whatsapp.png";
import beauty from "../images/beauty.png";
import socialMedia from "../images/social-media.png";
import cats from "../images/cats.png";
import library from '../images/library.png';

function Projects() {
  let images = [whatsapp, ecommerce, library, beauty, socialMedia, cats];
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Featured Projects</h1>
      </div>
      <br />
      <div className="pl-list">
        {products.map((item, i) => (
          <Product
            key={item.id}
            img={images[i]}
            link={item.link}
            desc={item.desc}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

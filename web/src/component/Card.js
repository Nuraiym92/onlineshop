import React from "react";
import { Link } from "react-router-dom";

function Card({ item, handleClick }) {
  const { id, name, image, price } = item;
 
  return (
    <div className="cards">
      <div className="image_box">
        <Link to={"/item/" + item._id}>
          <img src={image} alt="" />
        </Link>
        
        <i class="fa-light fa-heart-half-stroke"></i>
      
      
      </div>
      <div className="details">
        <Link to={"/item/" + item._id}>
          
          <p> {name} </p>
        </Link>
        <p>
          
          Price - {price}
          som
        </p>
        <button className="btn card-btn" onClick={() => handleClick(item)}> Add to Cart </button>
      </div>
    </div>
  );
}

export default Card;

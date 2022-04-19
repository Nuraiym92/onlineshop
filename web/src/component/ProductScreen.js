import React from "react";
import list from "../data";

const ProductScreen=(props, handleClick)=> {
  const item = list.find((x) => x._id === props.match.params.id);

  return (
    <div>
     <div className="product-details">
        <div className="product-details-image">
          <img className="product-details-img" src={item.image} alt="item" />
            </div>
             <div className="product-details-info">
          <ul>
            <li>
              <h4> {item.name} </h4>
            </li>
            <li>
              Price:
              <b>
                
                {item.price}
                som
              </b>
            </li>
            <li>
              <div>
                <b>Description:</b>  
               {item.description} </div>
            </li>
           

          </ul>
          <button className="btn" onClick={() => handleClick(item)}> Add to Cart </button>

        </div>
    
      </div>
    </div>
  );
}

export default ProductScreen;

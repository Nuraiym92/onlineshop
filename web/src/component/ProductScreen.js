import React from "react";
import list from "../data";

const ProductScreen=(props, handleClick)=> {
  const item = list.find((x) => x._id === props.match.params.id);

  return (
    <div>
   
      {/* <div className='back-to-result'>
              <Link to= "/girls/girlsdress">Back to result</Link>
            </div> */}
      <div className="details">
        <div className="details-image">
          <img src={item.image} alt="item" />
        </div>
        <div className="details-info">
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
              <div> Description: {item.description} </div>
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
}

export default ProductScreen;

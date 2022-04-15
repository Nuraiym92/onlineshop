import React from "react";
import SignIn from "./SignIn";
import {Link} from "react-router-dom"


const Navbar = ({ setShow, size}) => {
  return (
    <nav>
      <div className="navbar">
    <Link style={{ textDecoration: 'none' }} to="/">
       <span className="my_shop" >
         Liana
        </span>
    </Link>
      
     
        
       <Link style={{ textDecoration: 'none' }} to="/cart">
          <div className="cart">
         <span >
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
       </div>
       </Link>
      
          
     
        <SignIn/>  
       
      </div>
    </nav>
  );
};

export default Navbar;
 
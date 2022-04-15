import React, { useState, useEffect } from "react";
import Products from "./component/Products";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import ProductScreen from "./component/ProductScreen";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./component/SignIn"
import Order from "./component/Order";

import Payment from "./component/Payment";


const App = () => {
 
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(1);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
 
  

 

  

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    console.log(d);

    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar 
               size={cart.length} />
          <Route
            path="/"
            exact="true"
            component={() => <Products handleClick={handleClick} />}
          />
      <Route path="/cart">
         <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleRemove={handleRemove} handlePrice={handlePrice} price={price}/>

      </Route>
         
     
       
        <Route path="/item/:id" exact="true" component={ProductScreen} />
        <Route path="/productScreen" exact="true" handleClick={handleClick} component={ProductScreen} />
        <Route path="/signin" exact="true" component={SignIn} />
        <Route path="/order" exact="true" component={Order} />
        <Route path="/payment" exact="true"  >
          <Payment price={price} />
        </Route>
      
      </BrowserRouter>{" "}
    </React.Fragment>
  );
};

export default App;

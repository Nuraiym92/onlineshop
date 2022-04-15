import React, { useState } from "react";
import list from "../data";
import Card from "./Card";

const Products = ({ handleClick }) => {
  const [data, setData] = useState(list);
   const [searchTerm,setSearchTerm]=useState('')
  const filterResult = (catItem) => {
    const result = list.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <div className="home-page">
        <input className="search-btn" type="text" placeholder="Search"
        onChange={(e)=>{
          setSearchTerm(e.target.value)
        }}
        />
        <div className="category">
          <button className="btn" onClick={() => filterResult("dress")}>Dresses</button>
          <button className="btn" onClick={() => filterResult("jacket")}>Jackets</button>
          <button className="btn" onClick={() => filterResult("tshirt")}>T-shirts</button>
          <button className="btn" onClick={() => filterResult("sport")}>Sport</button>
        </div>
      </div>
      <section className="products">
        {data.filter((val=>{
          if(searchTerm===''){
            return val;
          }else if(
            val.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())||
            val.category.toLocaleLowerCase().includes(searchTerm.toLowerCase())
          ){
            return val;
          }
        })).map((item) => (
          <Card key={item.id} handleClick={handleClick} item={item} />
        ))}
      </section>
    </>
  );
};

export default Products;

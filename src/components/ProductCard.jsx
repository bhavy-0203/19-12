import React from "react";

const ProductCard = ({ id, title, price, img }) => {
  const addtoCart = () => {
    
  };
  return (
    <div>
      <img
        src={img}
        alt=""
        width="300px"
        height="300px"
        style={{
          objectFit: "cover",
        }}
      />
      <h6>{title}</h6>
      <p>{price}</p>
      <button onClick={addtoCart}>Buy</button>
    </div>
  );
};

export default ProductCard;

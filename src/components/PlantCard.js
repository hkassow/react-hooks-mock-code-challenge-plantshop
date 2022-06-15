import React, { useState } from "react";

function PlantCard({image, name, price}) {
  const [inStock, setInStock] = useState(true)
  return (
    <li className="card">
      <img src={(image)?image:"https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {(inStock) ? (
        <button onClick= {() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

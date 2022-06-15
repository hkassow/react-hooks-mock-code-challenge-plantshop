import React, { useState } from "react";

function PlantCard({id, image, name, price, helpDelete}) {
  const [inStock, setInStock] = useState(true)
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "DELETE"
    })
    helpDelete(id)
  }
  return (
    <li className="card">
      <img src={(image)?image:"https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleDelete}>delete</button>
      {(inStock) ? (
        <button onClick= {() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

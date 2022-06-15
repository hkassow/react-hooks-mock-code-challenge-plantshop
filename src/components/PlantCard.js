import React, { useState } from "react";

function PlantCard({id, image, name, price, helpDelete, helpPatch}) {
  const [inStock, setInStock] = useState(true)
  const [formPrice, setFormPrice] = useState('')
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "DELETE"
    })
    helpDelete(id)
  }
  const handlePatch = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({price: parseInt(formPrice)})
    }).then(r => r.json())
    .then(d => helpPatch(d))
    setFormPrice()
  }
  const handleChange = (value) => {
    setFormPrice(value)
  }
  return (
    <li className="card">
      <img src={(image)?image:"https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleDelete}>delete</button>
      <form onSubmit={e => handlePatch(e)}>
        <input type='text'value={formPrice} onChange={e => handleChange(e.target.value)} name='price' placeholder="new price"></input>
        <button>update price</button>
      </form>
      {(inStock) ? (
        <button onClick= {() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

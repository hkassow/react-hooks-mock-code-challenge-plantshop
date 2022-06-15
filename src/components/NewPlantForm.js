import React, { useState } from "react";

function NewPlantForm({helpPatch}) {
  const defaultData = {
    name:'',
    price:'',
    image:'',
  }
  const [formData, setFormData] = useState(defaultData)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(d => helpPatch(d))
    setFormData(defaultData)
  }
  const handleChange = (key, value) => {
    console.log(value)
    setFormData({...formData, [key]: value})
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleChange('name', e.target.value )} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => handleChange('image',e.target.value )} value={formData.image}  type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => handleChange('price',e.target.value )} value={formData.price}  type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

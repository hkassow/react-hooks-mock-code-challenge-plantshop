import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState()
  const [plantFilter, setFilter] = useState('')
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlantList(data))
  },[])
  const helpPatch = (plant) => {
    setPlantList([...plantList, plant])
  }
  const helpFilter = (searchBy) => {
    setFilter(searchBy.toLowerCase())
  }
  const plantListFiltered = (plantList)? plantList.filter(plant => plant.name.toLowerCase().includes(plantFilter)):[]

  return (
    <main>
      <NewPlantForm helpPatch={helpPatch}/>
      <Search helpFilter={helpFilter}/>
      <PlantList plantList={plantListFiltered}/>
    </main>
  );
}

export default PlantPage;

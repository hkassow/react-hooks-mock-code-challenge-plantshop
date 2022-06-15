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
  const helpPatch = (patchPlant) => {
    setPlantList(plantList.map(plant => {
      if (plant.id === patchPlant.id) {
        return patchPlant
      } else {
        return plant
      }
    }))
  }
  const helpFilter = (searchBy) => {
    setFilter(searchBy.toLowerCase())
  }
  const helpDelete = (id) => {
    setPlantList(plantList.filter(plant => !(plant.id === id)))
  }
  const plantListFiltered = (plantList)? plantList.filter(plant => plant.name.toLowerCase().includes(plantFilter)):[]

  return (
    <main>
      <NewPlantForm helpPatch={helpPatch}/>
      <Search helpFilter={helpFilter}/>
      <PlantList plantList={plantListFiltered} helpPatch={helpPatch} helpDelete={helpDelete}/>
    </main>
  );
}

export default PlantPage;

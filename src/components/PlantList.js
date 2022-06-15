import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, helpDelete, helpPatch}) {

  return (
    <ul className="cards">{(plantList)? plantList.map(plant =>
    <PlantCard key={plant.name} id={plant.id} name={plant.name} price={plant.price} image={plant.image} helpDelete={helpDelete} helpPatch={helpPatch}/>):<></>}
    </ul>
  );
}

export default PlantList;

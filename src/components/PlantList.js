import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {

  return (
    <ul className="cards">{(plantList)? plantList.map(plant =>
    <PlantCard key={plant.name} name={plant.name} price={plant.price} image={plant.image}/>):<></>}
    </ul>
  );
}

export default PlantList;

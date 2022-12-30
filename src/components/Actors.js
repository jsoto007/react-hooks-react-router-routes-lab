import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  const newActorItem = actors.map((actor) => {
  return ( <div key={actor.name}>
      {actor.name}
     <ul>{actor.movies}</ul> 
    </div>)
  })
  console.log(newActorItem)
  return (
    <div>
      <h1>Actos Page</h1>
      {newActorItem}
    </div>
  )
}

export default Actors;

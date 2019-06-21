import React, { useState, useEffect } from 'react';
import pet from '@frontendmasters/pet';

const Details = ({ id }) => {
  const [selectedPet, setSelectedPet] = useState({});

  async function getPet(petId) {
    const { animal } = await pet.animal(petId);
    setSelectedPet(animal);
  }

  useEffect(() => {
    getPet(id);
  }, []);
  // this comma empty array tells it to only render once instead of continuously

  return (
    <div>
      {/* <h1>{animal}</h1>
      <h2>{breed}</h2>
      <h2>{location}</h2> */}
      <h1>Hello!</h1>
    </div>
  );
};

export default Details;

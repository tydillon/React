import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';

const SearchParam = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'All', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [petResults, setPetResults] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal });
    console.log({ location, breed, type: animal });
    setPetResults(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(res => {
      setBreeds(res.breeds.map(obj => obj.name));
    });
    //animal is what the thing is listening to
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={petResults} />
    </div>
  );
};

export default SearchParam;

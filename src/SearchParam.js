import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParam = () => {
  const [location, setLocation] = useState('Seattle, WA');
  //   const [animal, setAnimal] = useState('All');
  //   const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'All', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [team, SECDropdown, setSECTeam] = useDropdown('SEC Teams', 'UGA', [
    'UGA',
    'Auburn',
    'BAMA'
  ]);

  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(res => {
      setBreeds(res.breeds.map(obj => obj.name));
    });
  }, [animal]);

  return (
    <div className="search-params">
      <form>
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
        <SECDropdown />
        {/* <label htmlFor="animal">
          Animal
          <select
            id={animal}
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id={breed}
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParam;

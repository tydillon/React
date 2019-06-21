import React from 'react';

const Pet = ({
  name = 'None provided',
  animal = 'None provided',
  breed = 'None provided'
}) => {
  const style = {
    container: {
      backgroundColor: 'white',
      border: '1px solid black'
    }
  };
  return (
    <div style={style.container}>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
    </div>
  );
};

export default Pet;

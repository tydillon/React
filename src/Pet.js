import React from 'react';

// const Pet = ({ name, animal, breed }) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ]);
// };

const Pet = ({
  name = 'None provided',
  animal = 'None provided',
  breed = 'None provided'
}) => {
  return (
    // <div style={style.container}>
    <div>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
    </div>
  );
};

// const style = {
//   container: {
//     backgroundColor: 'white',
//     border: '1px solid black',
//     padding: '5px',
//     margin: 'auto'
//   }
// };

export default Pet;

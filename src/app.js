import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet, {
//       name: 'Harley',
//       animal: 'Dog',
//       breed: 'Goldendoodle'
//     }),
//     React.createElement(Pet, {
//       name: 'Chabela',
//       animal: 'Dog',
//       breed: 'Terrier'
//     }),
//     React.createElement(Pet, {
//       name: 'Sally',
//       animal: 'Turtle',
//       breed: 'Red Eared Slider'
//     }),
//     React.createElement(Pet, {
//       name: 'Sniffles',
//       animal: 'Rabbit',
//       breed: 'Fuzzy'
//     })
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Harley" animal="Dog" breed="Goldendoodle" />
      <Pet name="Chabela" animal="Dog" breed="Terrier" />
      <Pet name="Sally" animal="Turtle" breed="Red Eared Slider" />
      <Pet name="Snookies" animal="Rabbit" breed="Fuzzy" />
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));

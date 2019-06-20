import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParam from './SearchParam';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <div className={style.flexer}> */}
      <div>
        <Pet name="Harley" animal="Dog" breed="Goldendoodle" />
        <Pet name="Chabela" animal="Dog" breed="Terrier" />
        <Pet name="Sally" animal="Turtle" breed="Red Eared Slider" />
        <Pet name="Snookies" animal="Rabbit" breed="Fuzzy" />
      </div>
      <SearchParam />
    </div>
  );
};

// const style = {
//   flexer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     padding: '10px',
//     border: '10px dotted red'
//   }
// };

render(React.createElement(App), document.getElementById('root'));

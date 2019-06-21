import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParam from './SearchParam';

const App = () => {
  // const style = {
  //   flexer: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     padding: '10px'
  //   }
  // };
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <div style={style.flexer}> */}
      <SearchParam />
      {/* </div> */}
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));

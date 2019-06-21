import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParam from './SearchParam';
import { Router } from '@reach/router';
import Details from './Details';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <SearchParam path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));

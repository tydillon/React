import React from 'react';

const Pet = ({ name, animal, breed, media, location, id, key }) => {
  const hero = media.length ? media[0].small : 'http://placecorgi.com/300x300';

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;

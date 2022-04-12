import PropTypes from 'prop-types';
import React from 'react';
import ReserveDragon from './ReserveDragon';

const Dragon = (props) => {
  const {
    id,
    name,
    type,
    image,
  } = props;

  return (
    <div id={id} className="dragon">
      <img src={image} alt="dragon" className="dragon-image" />
      <div className="dragon-info">
        <h2>{name}</h2>
        <p className="dragon-type">
          The type of this Dragon is:
          <span>{type}</span>
          .
        </p>
        <ReserveDragon />
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

Dragon.defaultProps = {
  id: '0',
  name: 'Mary',
  type: 'Cat',
  image: 'string',
};

export default Dragon;

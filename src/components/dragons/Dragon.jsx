import PropTypes from 'prop-types';
import React from 'react';
import { Badge } from 'react-bootstrap';
import CancelDragon from './CancelDragon';
import ReserveDragon from './ReserveDragon';

const Dragon = (props) => {
  const {
    id,
    name,
    type,
    image,
    reserved,
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
          {reserved && <Badge>Reserved</Badge>}
        </p>
        {reserved ? <CancelDragon id={id} /> : <ReserveDragon id={id} />}
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};

Dragon.defaultProps = {
  id: '0',
  name: 'Mary',
  type: 'Cat',
  image: 'string',
  reserved: false,
};

export default Dragon;

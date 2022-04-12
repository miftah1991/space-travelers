import PropTypes from 'prop-types';
import React from 'react';

const Dragon = (props) => {
  const {
    id,
    name,
    type,
    image,
  } = props;

  return (
    <div id={id}>
      <p>{name}</p>
      <p>{type}</p>
      <img src={image} alt="dragon" />
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

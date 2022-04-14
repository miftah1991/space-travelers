import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import './SingleRocket.css';

function SingleRocket({ rocket }) {
  const {
    name, flickrImages, id, description, reserved,
  } = rocket;
  const dispatch = useDispatch();
  const [rocketState, setRocketState] = useState(reserved);
  const reserveRocket = (id) => {
    setRocketState(!rocketState);
    dispatch({ type: 'RESERVE_ROCKET', id });
  };
  return (
    <div className="container">
      <div className="imgContainer">
        <img src={flickrImages} alt={name} />
      </div>
      <div className="infoContainer">
        <h1>{name}</h1>
        <p>
          {rocketState && <Badge bg="primary">Reserved</Badge>}
          {' '}
          {description}
        </p>
        {rocketState ? <button id={id} onClick={(e) => reserveRocket(e.target.id)} className="cancelButton" type="button">Cancel Reservation</button> : <button data-testid="reserve-btn" id={id} onClick={(e) => reserveRocket(e.target.id)} className="infoButton" type="button">Reserve Rocket</button> }
      </div>
    </div>
  );
}
export default SingleRocket;
SingleRocket.defaultProps = {
  rocket: {
    id: null,
    name: '',
    type: '',
    description: '',
    flickrImages: '',
    reserved: false,
  },
};
SingleRocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

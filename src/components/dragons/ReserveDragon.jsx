import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragonAction } from '../../Redux/dragons/dragonsReducer';

const ReserveDragon = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(reserveDragonAction(id))} type="button" className="reserve-dragon">Reserve</button>;
};

ReserveDragon.propTypes = {
  id: PropTypes.string,
};

ReserveDragon.defaultProps = {
  id: '0',
};

export default ReserveDragon;

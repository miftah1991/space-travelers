import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelDragonAction } from '../../Redux/dragons/dragonsReducer';

const CancelDragon = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(cancelDragonAction(id))} type="button" className="cancel-dragon" data-testid="cancel-dragon">Cancel</button>;
};

CancelDragon.propTypes = {
  id: PropTypes.string,
};

CancelDragon.defaultProps = {
  id: '0',
};

export default CancelDragon;

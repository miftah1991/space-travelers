import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../components/rockets/Rockets';
import SingleRocket from '../components/rockets/SingleRocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <div data-testid="rockets">
      {rockets.map((rocket) => <SingleRocket key={rocket.id} rocket={rocket} />)}
    </div>
  );
}
export default Rockets;

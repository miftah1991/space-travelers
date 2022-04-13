import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMission } from '../../Redux/missons/missionsReducer';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const toggleMissionHandler = () => {
    dispatch(toggleMission(mission.mission_id));
  };

  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        <div>
          <span>
            {!mission.reserved && 'Not A Member'}
            {mission.reserved && 'Active Member'}
          </span>
        </div>
      </td>
      <td>
        <button type="button" onClick={toggleMissionHandler}>
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};
MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;

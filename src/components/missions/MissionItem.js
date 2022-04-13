import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './missionsStyles.css';
import { toggleMission } from '../../Redux/missons/missionsReducer';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const toggleMissionHandler = () => {
    dispatch(toggleMission(mission.mission_id));
  };

  return (
    <tr className="wrapper">
      <td className="col disc">{mission.mission_name}</td>
      <td className="col disc">{mission.description}</td>
      <td className="col">
        <div className="member">
          <span>
            {!mission.reserved && 'Not A Member'}
            {mission.reserved && 'Active Member'}
          </span>
        </div>
      </td>
      <td className="col">
        <button className="btn" type="button" onClick={toggleMissionHandler}>
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

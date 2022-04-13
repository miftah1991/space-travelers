import React from 'react';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Reservation</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;

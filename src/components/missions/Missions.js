import React from 'react';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <table className="contaner">
      <thead>
        <tr>
          <th className="title">Mission</th>
          <th className="title">Description</th>
          <th className="title">Status</th>
          <th className="title">Reservation</th>
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

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MyProfile.css";

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const [reservedRockets, setReservedRockets] = useState([]);
  const dragons = useSelector((state) => state.dragons);
  const [reservedDragons, setReservedDragons] = useState([]);
  const missions = useSelector((state) => state.missions);
  const [reservedMissions, setReservedMissions] = useState([]);

  useEffect(() => {
    const resRockets = rockets.filter((rocket) => rocket.reserved && rocket);
    setReservedRockets(resRockets);
  }, []);

  useEffect(() => {
    const resDragons = dragons.filter((dragon) => dragon.reserved && dragon);
    setReservedDragons(resDragons);
  }, []);

  useEffect(() => {
    const resMissions = missions.filter(
      (mission) => mission.reserved && mission
    );
    setReservedMissions(resMissions);
  }, []);

  return (
    <div className="container">
      <div>
        <h1>My Rockets</h1>
        <ul className="list">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>My Dragons</h1>
        <ul className="list">
          {reservedDragons.map((dragon) => (
            <li key={dragon.id}>{dragon.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>My Missions</h1>
        <ul className="list">
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const [reservedRockets, setReservedRockets] = useState([]);

  useEffect(() => {
    const resRockets = rockets.filter((rocket) => rocket.reserved && rocket);
    setReservedRockets(resRockets);
  }, []);

  return (
    <div className="container">
      <div>
        <h1>My Rockets</h1>
        <ul className="list">
          {reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;

import { useDispatch } from 'react-redux';
import Missions from '../components/missions/Missions';
import { getAllMissions } from '../Redux/missons/missionsReducer';
import './DragonsPage.css';

const MissionsPage = () => {
  const dispatch = useDispatch();
  dispatch(getAllMissions());
  return <Missions />;
};

export default MissionsPage;

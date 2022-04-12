import { useDispatch } from 'react-redux';
import { updateDragonsThunk } from '../Redux/dragons/dragonsReducer';
import Dragons from '../components/dragons/Dragons';
import './DragonsPage.css';

const DragonsPage = () => {
  const dispatch = useDispatch();
  dispatch(updateDragonsThunk());
  return <Dragons />;
};

export default DragonsPage;

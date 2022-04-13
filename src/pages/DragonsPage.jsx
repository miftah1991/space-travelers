import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateDragonsThunk } from '../Redux/dragons/dragonsReducer';
import Dragons from '../components/dragons/Dragons';
import './DragonsPage.css';

const DragonsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateDragonsThunk());
  }, []);

  return <Dragons />;
};

export default DragonsPage;

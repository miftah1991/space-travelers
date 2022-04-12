import axios from 'axios';

// Actions
const UPDATE_DRAGONS = 'UPDATE_DRAGONS';

// Default State
const defaultState = {
  id: '',
  name: '',
  type: '',
  image: '',
};

// Reducer
export default function dragonsReducer(state = defaultState, action) {
  switch (action.type) {
    case (UPDATE_DRAGONS):
      return action.dragons;
    default:
      return state;
  }
}

// Action Creators
export function updateDragons(dragons) {
  return {
    type: UPDATE_DRAGONS,
    dragons,
  };
}

// Thunks
export const updateDragonsThunk = () => (dispatch) => axios.get('https://api.spacexdata.com/v3/dragons')
  .then((res) => res.data)
  .then((data) => {
    const dragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      image: dragon.flickr_images[0],
    }));
    dispatch(updateDragons(dragons));
  });

import axios from 'axios';

// Actions
const UPDATE_DRAGONS = 'UPDATE_DRAGONS';
const RESERVE_DRAGON_ACTION = 'RESERVE_DRAGON_ACTION';
const CANCEL_DRAGON_ACTION = 'CANCEL_DRAGON_ACTION';

// Default State
const defaultState = [{
  id: '',
  name: '',
  type: '',
  image: '',
  reserved: false,
}];

// Reducer
export default function dragonsReducer(state = defaultState, action) {
  let newState = [];
  switch (action.type) {
    case (UPDATE_DRAGONS):
      return action.dragons;
    case (RESERVE_DRAGON_ACTION):
      newState = state.map((dragon) => {
        if (dragon.id === action.id) {
          const newDragon = { ...dragon };
          newDragon.reserved = true;
          return newDragon;
        }
        return dragon;
      });
      return newState;
    case (CANCEL_DRAGON_ACTION):
      newState = state.map((dragon) => {
        if (dragon.id === action.id) {
          const newDragon = { ...dragon };
          newDragon.reserved = false;
          return newDragon;
        }
        return dragon;
      });
      return newState;
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

export function reserveDragonAction(id) {
  return {
    type: RESERVE_DRAGON_ACTION,
    id,
  };
}

export function cancelDragonAction(id) {
  return {
    type: CANCEL_DRAGON_ACTION,
    id,
  };
}

// Thunks
export const updateDragonsThunk = () => (dispatch) => axios.get('https://api.spacexdata.com/v3/dragons')
  .then((res) => res.data)
  .then((data) => {
    const dragons = data.map((dragon) => {
      const { id, name, type } = dragon;
      return {
        id,
        name,
        type,
        image: dragon.flickr_images[0],
      };
    });
    dispatch(updateDragons(dragons));
  });

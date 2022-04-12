import {
  combineReducers, createStore, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { rocketsReducer } from '../components/rockets/Rockets';
import dragonsReducer from './dragons/dragonsReducer';

const missionsReducer = '';

/* eslint-disable no-underscore-dangle */

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers(
  { rockets: rocketsReducer, missions: missionsReducer, dragons: dragonsReducer },
);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { combineReducers } from 'redux';
import app from './app';
import settings from './settings';
import cycles from './cycles';

const rootReducer = combineReducers({ app, settings, cycles });

export default rootReducer;

import { combineReducers } from 'redux';
import app from './app';
import settings from './settings';

const rootReducer = combineReducers({ app, settings });

export default rootReducer;

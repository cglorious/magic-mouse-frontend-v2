import { combineReducers } from "redux";
import resortsReducer from './resortsReducer';
import parksReducer from './parksReducer';
import landsReducer from './landsReducer';
import attractionsReducer from './attractionsReducer';

const rootReducer = combineReducers({
  resorts: resortsReducer,
  parks: parksReducer,
  lands: landsReducer,
  attractions: attractionsReducer
});

export default rootReducer;

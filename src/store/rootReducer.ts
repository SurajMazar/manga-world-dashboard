import {connectRouter,RouterState} from 'connected-react-router';
import history from '../utils/history';
import {Reducer} from 'redux';
import {LocationState} from 'history';
// end history
import authReducer from './actionsReducer/authActionReducer';
import genreReducer from './actionsReducer/genre.actionreducer';

const rootReducer = {
  router:connectRouter(history)as Reducer<RouterState<LocationState>>, // types for connected react router
  auth:authReducer,
  genre:genreReducer
}

export default rootReducer;
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import example from './example';
import users from './users';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, router, users });

  return rootReducer;
}

export default createRootReducer;

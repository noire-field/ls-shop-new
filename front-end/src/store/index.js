import { combineReducers  } from "redux";

import app from './reducers/app.reducer';
import store from './reducers/store.reducer';
import user from './reducers/user.reducer';

export default combineReducers({
    app,
    store,
    user
});
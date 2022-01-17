import { combineReducers  } from "redux";

import app from './reducers/app.reducer';
import store from './reducers/store.reducer';

export default combineReducers({
    app,
    store
});
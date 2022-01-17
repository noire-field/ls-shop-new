import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './store/index';
import { Provider } from 'react-redux';

import App from './App';

//const store = createStore(reducers, applyMiddleware(ReduxThunk));
const store = createStore(reducers, composeWithDevTools(
	applyMiddleware(ReduxThunk)
));

ReactDOM.render(
	<Provider store={store}>
    	<App />
	</Provider>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

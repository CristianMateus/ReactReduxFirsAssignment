import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import personReducer from './store/reducers/person';

const rootReducer = combineReducers({
	person: personReducer
});

const middleware = [thunk]

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

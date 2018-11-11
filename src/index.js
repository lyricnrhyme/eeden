import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';
import thunk from 'redux-thunk';

ReactDOM.render(<Provider store={configureStore()}><App /></Provider>, document.getElementById('root'));

export default function configureStore() {
    return createStore(
        reducer,
        applyMiddleware(thunk)
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

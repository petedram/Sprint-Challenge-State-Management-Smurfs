import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { smurfReducer as reducer } from './reducers';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, 
    rootElement
);

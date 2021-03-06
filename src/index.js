import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { rootReducer } from "./store/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const middlewares = [thunk];
const store = applyMiddleware(...middlewares)(createStore)(rootReducer);
ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import rootReducer from "./reducers/index";

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
class LoginFlow extends Component {
    render () {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route to={prop.path} component={prop.component} key={key} />;
                        })}
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

ReactDOM.render(
  <LoginFlow />,
  document.getElementById("root")
);

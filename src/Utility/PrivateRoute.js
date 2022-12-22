import React from "react";
import {Navigate,  Route } from "react-router-dom";
import { getToken } from "./Common";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={props => {
           return getToken() ? <Component {...props} />
            : <Navigate to={{pathname: "/login", state: {from: props.location}}} />
        }}
        />
    )
}

export default PrivateRoute;
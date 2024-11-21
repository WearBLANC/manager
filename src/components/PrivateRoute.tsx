import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return auth.currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;

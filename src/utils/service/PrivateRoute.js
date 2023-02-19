import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("user"));

  return userInfo ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;

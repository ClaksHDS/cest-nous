import React from "react";
import { Navigate } from "react-router-dom";
/* Context */
import { useUserContext } from "../context/user_context";

function PrivateRoute({ children, ...rest }) {
  const { myUser } = useUserContext();

  if (!myUser) {
    return <Navigate to='/' />;
  }
  return children;
}

export default PrivateRoute;

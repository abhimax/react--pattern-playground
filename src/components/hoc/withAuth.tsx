import React from "react";
//import { Navigate } from "react-router-dom";

function withAuth(Component: React.ComponentType) {
  return function AuthHOC(props: React.ComponentProps<typeof Component>) {
    const isAuthenticated = false; // This could come from context or redux

    if (!isAuthenticated) {
      //return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;

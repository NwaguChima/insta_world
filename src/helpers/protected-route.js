/* eslint-disable prettier/prettier */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children }) {
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={{ pathname: ROUTES.LOGIN, state: { from: location } }}
        replace
      />
    );
  }

  return React.cloneElement(children, {user});
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object,
};

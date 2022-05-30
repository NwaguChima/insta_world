/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { Navigate, useLocation, Outlet } from "react-router-dom";

export default function IsUserLoggedIn({ user, loggedInPath, children }) {
  const location = useLocation();

  if (user) {
    return (
      <Navigate
        to={{ pathname: loggedInPath, state: { from: location } }}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object,
};

/* eslint-disable prettier/prettier */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import useUser from "../hooks/use-user";
import LoggedInUserContext from "../context/logged-in-user";

function Dashbord({ user: loggedInUser }) {
  const { user } = useUser(loggedInUser.uid);
  const { setUser } = useContext(LoggedInUserContext);

  useEffect(() => {
    document.title = "Insta_world";
    setUser(user);
  }, [setUser, user]);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

Dashbord.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Dashbord;

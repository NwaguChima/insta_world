/* eslint-disable react/forbid-prop-types */
/* eslint-disable prettier/prettier */
import { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import {
  getUserByUsername,
  getUserPhotosByUsername,
} from "../../services/firebase";
import Photos from "./photos";

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhoto() {
      const photos = await getUserPhotosByUsername(user.username);
      console.log("photos", photos);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }

    if (user.username) {
      getProfileInfoAndPhoto();
    }
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }),
};

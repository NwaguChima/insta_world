/* eslint-disable prettier/prettier */
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const images = require.context("../../images/avatars", true);

export default function SuggestedProfile({
  userDocId,
  username,
  profileId,
  userId,
}) {
  const [followed, setFollowed] = useState(false);

  return !followed ? (
    <div className="flex flex-row item-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={images(`./${username}.jpg`)}
          alt="profile badge"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={() => console.log("Follow this user")}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  userDocId: PropType.string.isRequired,
  username: PropType.string.isRequired,
  profileId: PropType.string.isRequired,
  userId: PropType.string.isRequired,
};

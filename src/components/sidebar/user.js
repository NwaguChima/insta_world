/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const defaultImg = ["dali", "karl", "orwell", "raphael", "steve"];
const images = require.context("../../images/avatars", true);

function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={images(
            `./${!defaultImg.includes(username) ? "default" : username}.jpg`
          )}
          alt="profile badge"
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}

export default User;

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};

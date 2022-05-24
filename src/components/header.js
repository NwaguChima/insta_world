import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firbaseContext";
import UserContext from "../context/userContext";
import * as ROUTES from "../constants/routes";

function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return <div>header</div>;
}

export default Header;

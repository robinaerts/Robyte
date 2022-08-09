import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "../helpers/firebaseconfig";

export default function Nav() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const logout = () => {
    auth.signOut();
    setUser();
  };

  return (
    <ul id="nav-container">
      {/* <li className="dark-mode"></li>
      <li className="nav-github"></li> */}
      {!user && (
        <li>
          <Link href="/login">
            <button id="nav-login">LOGIN</button>
          </Link>
        </li>
      )}
      {user && (
        <li>
          <button onClick={logout} id="nav-logout">
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
}

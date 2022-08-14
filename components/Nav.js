import Link from "next/link";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
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
      <li className="nav-item">
        <Link href="/">
          <p className="nav-robyte">
            R<span className="yellow-text">0</span>
            <br />B<span className="yellow-text">1</span>TE
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link href={"/blog"}>
          <a className="nav-link">Blog</a>
        </Link>
      </li>
      <li className="nav-item about-nav-item">
        <Link href={"/#about-container"}>
          <a className="nav-link">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/robinaerts"
        >
          Github <FaExternalLinkAlt />
        </a>
      </li>
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

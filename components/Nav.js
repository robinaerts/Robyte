import { useState } from "react";

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ul id="nav-container">
      <li className="dark-mode"></li>
      <li className="nav-github"></li>
      {!isLoggedIn && (
        <li>
          <button className="nav-login">LOGIN</button>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <button className="nav-logout">LOGOUT</button>
        </li>
      )}
    </ul>
  );
}

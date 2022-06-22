import React from "react";
import { Link } from "react-router-dom";

function NavBar({ API, user, setUser }) {

  function handleLogoutClick() {
    fetch(API + "logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="wrapper">
        <h1 className="logo">Clickbait Comparator</h1>

      <nav className="navbar">
        <Link className="link" to="/compare">
          Compare
        </Link>
        <Link className="link" to="/new">
          Add Video
        </Link>
        <Link className="link" to="/all">
          Video List
        </Link>
        {user ?
            <Link className="link" variant="outline" onClick={handleLogoutClick}>
                Logout
            </Link> : 
            <Link className="link" to="/login">
                Login
            </Link> 
        }

      </nav>
    </header>
  );
}
export default NavBar;
import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ API, user, setUser }) {

  const history = useHistory()

  function handleLogoutClick() {
    console.log("clicked!")
    fetch(API + "logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push('/login')
      }
    });
  }

  return (
    <header className="wrapper">
      <h1 className="logo">Clickbait Battle</h1>

      <nav className="navbar">
        <Link className="link" to="/">
          Compare
        </Link>
        <Link className="link" to="/new">
          Add Video
        </Link>
        <Link className="link" to="/videos">
          Video List
        </Link>
        {user ?
          <a className="link pointer" variant="outline" onClick={handleLogoutClick}>
            Logout
          </a> : 
          <Link className="link" to="/login">
              Login
          </Link> 
        }

      </nav>
    </header>
  );
}
export default NavBar;
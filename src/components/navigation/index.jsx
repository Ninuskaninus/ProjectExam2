import React from "react";
import Icons from "../../images";
import { Link } from "react-router-dom";
import { NavContent, Nav } from "./index.styles";

export default function Navigation() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Nav>
      <NavContent>
        <Link to="/">
          <div>
            <Icons.Logo />
            <h3>HOLIDAZE</h3>
          </div>
        </Link>
      {token ? (
        <button onClick={handleLogout}>
          <p>Log out</p>
        </button>
      ) : (
        <Link to="/login">
          <button>
            <p>Log in</p>
          </button>
        </Link>
      )}
      </NavContent>
    </Nav>

  );
}
import React from "react";
import Icons from "../../images";
import { Link } from "react-router-dom";
import { NavContent, Nav } from "./index.styles";
import LoginBtn from "../buttons/loginBtn";

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
        <LoginBtn Text="Log out" onClick={handleLogout}/>
      ) : (
        <Link to="/login">
          <LoginBtn Text="Log in"/>
        </Link>
      )}
      </NavContent>
    </Nav>

  );
}
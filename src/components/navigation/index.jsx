import React from "react";
import Icons from "../../images";
import { Link, useLocation } from "react-router-dom";
import { NavContent, NavSearch, Nav } from "./index.styles";
import SearchForm from "../forms/searchform";

export default function Navigation() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
  }

  return (
    <><Nav>
      <NavContent>
        <Link to="/">
          <div>
            <Icons.Logo />
            <h1>HOLIDAZE</h1>
          </div>
        </Link>
        {token ? (
          <Link to="/login">
            <button>
              <p>Log in</p>
            </button>
          </Link>
        ) : (
            <button onClick={handleLogout}>
              <p>Log out</p>
            </button>
        )}
      </NavContent>
    </Nav>
      {location.pathname === "/" && (
        <NavSearch>
        <div>
          <SearchForm />
        </div>
      </NavSearch>
      )}
</>
  );
}
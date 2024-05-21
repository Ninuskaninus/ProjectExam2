import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../navigation";
import Footer from "../footer";
import Dashboard from "../dashboard";
import { Body } from "./index.styles";


export default function Layout({ children }) {
  const location = useLocation();

  return (
    <Body>
      {location.pathname === "/" && <Dashboard  />}
      <Navigation />
      {children} 
      <Footer />
    </Body>
  );
}
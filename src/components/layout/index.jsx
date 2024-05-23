import React from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import { Body } from "./index.styles";

export default function Layout({ children }) {
  return (
    <Body>
      <Navigation />
      {children}
      <Footer />
    </Body>
  );
}
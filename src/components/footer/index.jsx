import React from "react";
import {FooterContainer, FooterContent} from "./index.styles";
import Icons from "../../images";


export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Icons.Logo />
        <p>© 2024 Holidaze</p>
        <p>Nina Amdal | Project exam, Noroff</p>
      </FooterContent>
    </FooterContainer>
  ) 
}
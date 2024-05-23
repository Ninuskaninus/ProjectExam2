import React from "react";
import Icons from "../../images/index.jsx";
import { HeroContainer, HeroContent } from "./index.styles";
import HeroBtn from "../buttons/heroBtn/index.jsx";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Find your next adventure or help create one</h1>
        <HeroBtn />
      </HeroContent>
      <Icons.Hero />
    </HeroContainer>
  );
}
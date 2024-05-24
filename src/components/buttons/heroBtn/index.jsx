import React from 'react';
import { Link } from 'react-router-dom';
import { BtnHero } from '../index.styles';

export default function HeroBtn() {
  return (
    <Link to="/createaccount">
      <BtnHero aria-label="Create account" title="Create account" type="button">
        Join now
      </BtnHero>
    </Link>
  );
}

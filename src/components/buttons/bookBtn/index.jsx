import React from "react";
import {BtnBook} from "../index.styles";

export default function BookBtn({onClick}) {
  return (
    <BtnBook type="button" onClick={onClick}>Book now!</BtnBook>
  );
}
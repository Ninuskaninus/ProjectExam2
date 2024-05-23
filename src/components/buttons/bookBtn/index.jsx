import React from "react";
import {BtnBook} from "../index.styles";

export default function BookBtn({onClick, Text}) {
  return (
    <BtnBook type="button" onClick={onClick}>{Text}</BtnBook>
  );
}
import React from "react";
import {BtnDelete} from "../index.styles";

export default function DeleteBtn({onClick}) {

  return (
    <BtnDelete onClick={onClick}>Delete</BtnDelete>
  );
}
  
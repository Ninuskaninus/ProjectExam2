import React from "react";
import {BtnAdd} from "../index.styles";

export default function AddBtn({ onClick }) {
  return (
    <BtnAdd type="button" onClick={onClick}>Add</BtnAdd>
  );
}
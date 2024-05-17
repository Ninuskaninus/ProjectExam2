import React from "react";
import {BtnForm} from "../index.styles";

export default function FormBtn({ Text, onClick, type }) {
  return (
    <BtnForm onClick={onClick} type={type}>{Text}</BtnForm>
  );
}
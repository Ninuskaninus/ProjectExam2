import React from "react";
import {BtnEdit} from "../index.styles";

export default function EditVenueBtn({onClick}) {
  return (
    <BtnEdit onClick={onClick}>Edit</BtnEdit>
  );
}
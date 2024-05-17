import React from "react";
import Icons from "../../../images";
import {FormFilter, FormFilterItem} from "../index.styles";

export default function FilterForm() {
  return (
    <FormFilter>
      <FormFilterItem>
        <Icons.Location />
        <input type="text" id="location" placeholder="Location" />
      </FormFilterItem>
      <FormFilterItem>
        <Icons.Calendar />
        <input type="date" id="date" placeholder="Date" />
      </FormFilterItem>
      <FormFilterItem>
        <Icons.Person />
        <input type="number" id="guests" placeholder="Guests" />
      </FormFilterItem>
      </FormFilter>
  );
}
import React from "react";
import { ModalContainer, ModalHead } from "../index.styles";
import EditVenueForm from "../../forms/editVenue";

export default function EditVenue() {
  return (
    <ModalContainer id="editVenue">
      <ModalHead>
        <h2>Edit Venue</h2>
      </ModalHead>
      <EditVenueForm />
    </ModalContainer>
  );
}
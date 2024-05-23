import React from "react";
import { ModalContainer, ModalHead } from "../index.styles";
import EditVenueForm from "../../forms/editVenue";
import Icons from "../../../images/index";

export default function EditVenue() {
  const closemodal = () => {
    const modal = document.getElementById("editVenue");
    modal.classList.toggle("active");
  };



  return (
    <ModalContainer id="editVenue">
      <ModalHead>
        <h4>Edit Venue</h4>
        <button onClick={closemodal}>
          <Icons.Close  />
          </button>
      </ModalHead>
      <EditVenueForm />
    </ModalContainer>
  );
}
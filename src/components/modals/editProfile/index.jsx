import React from "react";
import { ModalHead, ModalContainer } from "../index.styles";
import EditProfileForm from "../../forms/editProfile";
import Icons from "../../../images/index";


export default function EditProfile() {
  const closeEditModal = () => {
    const modal = document.getElementById("editProfileModal");
    modal.classList.remove("active");
    const dashboard = document.getElementById("dashboardcontainer");
    dashboard.classList.toggle("active");
  }

  return (
    <ModalContainer id="editProfileModal">
      <ModalHead>
        <h2>Edit profile</h2>
        <button onClick={closeEditModal}>
          <Icons.Close />
        </button>
      </ModalHead>
      <EditProfileForm />
    </ModalContainer>
  );
}
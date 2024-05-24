import React from 'react';
import {
  ModalContainer,
  ModalHead,
  ModalBody,
  ModalBtnContainer,
} from '../index.styles';
import DeleteBtn from '../../buttons/deleteBtn';
import CancelBtn from '../../buttons/cancelBtn';
import { useParams } from 'react-router-dom';
import deleteVenue from '../../../js/delete/deleteVenue';

export default function DeleteConfirm() {
  const { id } = useParams();
  const deleteHandler = () => {
    deleteVenue(id);
  };

  const cancelHandler = () => {
    const modal = document.getElementById('deleteConfirm');
    modal.classList.toggle('active');
  };

  return (
    <ModalContainer id="deleteConfirm">
      <ModalHead>
        <h2>Delete venue</h2>
      </ModalHead>
      <ModalBody>
        <p>Are you sure you want to delete this venue?</p>
      </ModalBody>
      <ModalBtnContainer>
        <DeleteBtn onClick={deleteHandler} />
        <CancelBtn onClick={cancelHandler} />
      </ModalBtnContainer>
    </ModalContainer>
  );
}

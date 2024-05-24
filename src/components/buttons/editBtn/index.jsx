import React from 'react';
import { BtnEdit } from '../index.styles';

export default function EditVenueBtn({ onClick }) {
  return (
    <BtnEdit title="Edit" aria-label="Edit" onClick={onClick}>
      Edit
    </BtnEdit>
  );
}

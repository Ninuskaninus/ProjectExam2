import React from 'react';
import { BtnDelete } from '../index.styles';

export default function DeleteBtn({ onClick }) {
  return (
    <BtnDelete title="Delete" aria-label="Delete" onClick={onClick}>
      Delete
    </BtnDelete>
  );
}

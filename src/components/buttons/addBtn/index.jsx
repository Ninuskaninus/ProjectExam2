import React from 'react';
import { BtnAdd } from '../index.styles';

export default function AddBtn({ onClick }) {
  return (
    <BtnAdd
      title="Add image"
      aria-label="Add image"
      type="button"
      onClick={onClick}
    >
      Add
    </BtnAdd>
  );
}

import React from 'react';
import { BtnForm } from '../index.styles';

export default function FormBtn({ Text, onClick, type, title, ariaLabel }) {
  return (
    <BtnForm title={title} aria-label={ariaLabel} onClick={onClick} type={type}>
      {Text}
    </BtnForm>
  );
}

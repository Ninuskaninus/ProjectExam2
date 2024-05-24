import React from 'react';
import { BtnBook } from '../index.styles';

export default function BookBtn({ onClick, Text, title, ariaLabel }) {
  return (
    <BtnBook
      title={title}
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
    >
      {Text}
    </BtnBook>
  );
}

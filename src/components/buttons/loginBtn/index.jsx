import React from 'react';
import { BtnLogin } from '../index.styles';

export default function LoginBtn({ Text, onClick }) {
  return <BtnLogin onClick={onClick}>{Text}</BtnLogin>;
}

import styled from "styled-components";

export const BtnBook = styled.button`
background-color: var(--detail);
height: 60px;
max-width: 300px;
width: 100%;
border-radius: 30px;
font-size: 1.2rem;
font-weight: 700;
cursor: pointer;
transition: 0.3s;

&:hover{
  font-size: 1.5rem;
}
`;

export const BtnForm = styled.button`
width: 150px;
height: 60px;
border-radius: 30px;
background-color: var(--detail);
`;
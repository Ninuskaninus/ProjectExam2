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

export const BtnDelete = styled.button`
background-color: var(--error);
color: var(--primary);
height: 40px;
width: 100px;
border-radius: 20px;
`;

export const BtnEdit = styled(BtnDelete)`
background-color: var(--detail);
color: var(--white);
`;

export const BtnHero = styled.button`
background-color: var(--rose);
color: var(--black);
width: 300px;
height: 80px;
border-radius: 50px;
font-size: 1.3rem;
transition: 0.3s;

&:hover{
  font-size: 1.5rem;
}
`;
import styled from "styled-components";

export const BtnBook = styled.button`
background-color: var(--rose);
height: 60px;
max-width: 300px;
width: 100%;
border-radius: 30px;
font-size: 1.2rem;
font-weight: 700;
cursor: pointer;
transition: 0.3s;
color: var(--black);

&:hover{
  font-size: 1.5rem;
}
`;

export const BtnForm = styled.button`
width: 150px;
height: 60px;
border-radius: 30px;
background-color: var(--rose);
color: var(--black);
font-weight: 700;
`;

export const BtnDelete = styled.button`
width: 117px;
height: 50px;
background-color: var(--rose);
color: var(--black);
border-radius: 20px;
font-weight: 700;
`;

export const BtnEdit = styled(BtnDelete)`
background-color: var(--wildYonder);
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

export const BtnAdd = styled.button`
background-color: var(--rose);
height: 55px;
border-radius: 10px;
color: var(--black);
font-weight: 700;
`;
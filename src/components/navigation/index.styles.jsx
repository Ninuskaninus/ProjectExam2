import styled from "styled-components";

export const Nav = styled.nav`
widht: 100%;
height: 120px;
background-color: var(--primary);
display: flex;
justify-content: center;
width: 100%;
padding: 0 20px;
`;

export const NavContent = styled.div`
width: 100%;
display: flex;
max-width: 1200px;
border-bottom: 1px solid var(--lines);
justify-content: space-between;
height: 120px;
align-items: center;

button{
  &:hover{
    font-weight: bold;
    cursor: pointer;
  }
}

div{
  display: flex;
  align-items: flex-end;
  gap: 10px;


  img{
    height: 50px;
  }
  
}
`;

export const NavSearch = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: var(--primary);
height: 70px;
align-items: center;


div{
  max-width: 1200px;
  width: 100%;
}
`;


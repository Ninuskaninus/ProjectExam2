import styled from "styled-components";

export const PageContainer = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

`;

export const PageContent = styled.div`
width: 100%;
max-width: 1200px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
margin-top: 20px;
padding: 0 20px;

`;

export const DashboardContainer = styled.div`
width: 330px;
background-color: var(--primary);
position: sticky;
top: 20px;
height: fit-content;
padding: 10px;
transition: 0.5s;

@media screen and (max-width: 1075px){
  left: -500px;
  position: absolute;
  top: 790px;
  z-index: 1000;
}

&.active{
  left: 0;
}
`;

export const DashboardBtn = styled.button`
width: 50px;
height: 50px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
position: absolute;
left: 0;
top: 730px;
background-color: var(--primary);
display: none;
transition: 0.5s;

img{
  width: 20px;
}

&:hover{
  width: 60px;
  background-color: var(--rose);
}

@media screen and (max-width: 1075px){
  display: block;
}

@media screen and (max-width: 470px){
  width: 92%;
  left: 20px;

  &:hover{
    width: 92%;
    background-color: var(--rose);
  
  }
}
`;

export const CardContainer = styled.div`
width: 100%;
background-color: var(--primary);
display: flex;
gap: 20px;
flex-wrap: wrap;
padding: 20px;
justify-content: center;



@media screen and (max-width: 1075px){
  margin-left: 50px;
}

@media screen and (max-width: 470px){
  margin-left: 0;
  margin-top: 80px;
}

`;

export const SearchContainer = styled.div`
width: 100%;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 0 50px;
`;
import styled from "styled-components";

export const ModalContainer = styled.div`
position: absolute;
background: rgba(40, 45, 62, 0.88);
backdrop-filter: blur(2px);
border-radius: 30px;
width: 400px;
height: 400px;
z-index: 1000;
left: -400px;
top: 73px;
padding: 20px;
transition: 0.5s;

&.active {
  left: 0;
}

@media screen and (max-width: 400px) {
  width: 100%;
  top: 20px;
}
`;

export const ModalHead = styled.div`
dispaly: flex;
justify-content: space-between;
width: 100%;
position: relative;

img{
  cursor: pointer;
  width: 15px;
  position: absolute;
  right: 10px;
  top: 0px;
}
`;
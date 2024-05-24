import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  background: rgba(40, 45, 62, 0.88);
  backdrop-filter: blur(2px);
  border-radius: 30px;
  width: 400px;
  height: auto;
  z-index: 10000;
  left: -500px;
  top: 73px;
  padding: 20px;
  transition: 0.5s;

  &.active {
    left: 0;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    top: 20px;
  }
`;

export const ModalHead = styled.div`
  dispaly: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  img {
    cursor: pointer;
    width: 15px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
`;

export const ModalBody = styled.div``;

export const ModalBtnContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
`;

export const Gradient = styled.div`
  background: rgba(40, 45, 62, 0.85);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const PageContent = styled.div`
  z-index: 100;
  position: relative;
  border-radius: 30px;
  background: linear-gradient(
    270deg,
    rgba(106, 119, 164, 0.32) 0%,
    rgba(40, 45, 62, 0) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  max-width: 910px;
  margin: 50px auto;
  border-radius: 30px;
  padding: 30px;
`;

export const PageHeader = styled.div`
  a {
    color: var(--rose);
  }
  h1 {
    text-align: left;
    margin: 10px 0;
  }
`;

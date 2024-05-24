import styled from 'styled-components';

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
  justify-content: space-between;
  height: 120px;
  align-items: center;

  div {
    display: flex;
    align-items: flex-end;
    gap: 10px;

    img {
      height: 50px;
    }

    @media (max-width: 430px) {
      img {
        height: 20px;
      }

      h3 {
        font-size: 1.2rem;
      }
    }
  }
`;

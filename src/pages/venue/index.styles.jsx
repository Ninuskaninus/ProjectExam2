import styled from 'styled-components';

export const VenueContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const VenueBackground = styled.div`
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

export const VenueContent = styled.div`
  z-index: 100;
  position: relative;
  background: var(--secondary);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 910px;
  margin: 50px auto;
  border-radius: 30px;
  padding: 20px;
`;

export const VenueHead = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  &.buttonContainer {
    justify-content: flex-end;
  }
`;
export const VenueUser = styled.div`
  display: flex;
  align-items: center;

  h5 {
    color: var(--rose);
    margin-bottom: 5px;
  }

  p {
    color: var(--white);
    font-size: 0.8rem;
    max-width: 400px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;
export const VenueLocation = styled.div``;

export const VenueTitle = styled.div`
  margin: 40px 0;
  max-width: 500px;
`;

export const VenueInformation = styled.div`
  margin: 20px 0;
  width: 100%;
  p {
    color: var(--white);
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    b {
      color: var(--rose);
      margin-left: 5px;
    }

    img {
      height: 20px;
      margin-right: 10px;
    }
  }
`;

export const VenueIcons = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  img {
    height: 15px;
    margin-right: 10px;
  }
`;

export const CarouselContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
`;
export const VenueDescription = styled.div`
  margin: 20px 0;
  h3 {
    color: var(--rose);
    margin-bottom: 10px;
  }
  h4 {
    margin: 30px 0;
  }
`;
export const VenueFormContainer = styled.div`
  margin: 20px 0;
  h3 {
    color: var(--rose);
    margin-bottom: 10px;
  }
`;

export const VenueLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  p {
    margin-bottom: 20px;
    text-align: center;
  }
`;

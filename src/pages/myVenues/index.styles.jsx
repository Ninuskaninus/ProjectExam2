import styled from "styled-components";

export const MyVenuesContainer = styled.div`
width: 100%;
max-width: 1200px;
margin-top: 30px;
position: relative;
`;

export const TopContainer = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 20px;
gap: 10px;
`;

export const Description = styled.div`
max-width: 500px;
margin-top: 30px;

h2{
  font-size: 2rem;
  margin-bottom: 10px;
}

p{
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;

  img{
    height: 20px;
    margin-right: 5px;
  }
}
`;

export const IconContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 20px;
gap: 10px;
p{
  display: flex;
  align-items: center;
  margin-left: 20px;
}

img{
  height: 20px;
  margin-right: 5px;
}
`;

export const Location = styled.div`
margin-top: 20px;
img{
  height: 20px;
  margin-right: 5px;
}
`;
import styled from "styled-components";

export const BookingsContainer = styled.div`
h3{
  margin-bottom: 20px;
}
`;
export const BookingCard = styled.div`
width: 100%;
background-color: var(--black);
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 10px;
border-radius: 10px;
gap: 20px;

p{
  display: flex;
  align-items: center;
  img{
  height: 15px;
  margin-right: 10px;
}
}


`;
export const BookingCustomer = styled.div`
display: flex;
align-items: center;

p{
  color: var(--rose);
}

img{
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
`;
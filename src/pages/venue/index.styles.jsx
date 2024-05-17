import styled from "styled-components";

export const VenueContainer = styled.div`
margin-top: 30px;
background-color: var(--primary);
border-radius: 30px;
padding: 40px;
`;

export const VenueHead = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 20px;

img{
  height: 20px;
  margin-right: 10px;
}

p{
  display: flex;
  align-items: center;

}
`;

export const CarouselContainer = styled.div`
width: 100%;
padding: 20px;
`;

export const VenueTitle = styled.div`
margin: 20px 0;
padding: 0 20px;

h1{
  margin-top: 50px;
  margin-bottom: 30px;
}

p{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  img{
    height: 20px;
    margin-right: 10px;
  }

  b{
    color: var(--detail);
    margin-left: 5px;
  }

  span{
    width: 70%;
    height: 2px;
    background-color: var(--detail);
    margin-left: 10px;
  }
}
`;

export const VenueIcons = styled.div`
display: flex;
padding: 0 20px;
flex-wrap: wrap;
margin: 40px 0;
gap: 20px;
img{
  height: 15px;
  margin-right: 5px;
}
`;

export const VenueDescription = styled.div`
padding: 0 20px;
margin-top: 40px;

h2{
  margin-bottom: 20px;
}
`;

export const VenueOwner = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
margin-top: 20px;
background-color: var(--secondary);
border-radius: 30px;

div{
  display: flex;
  align-items: center;
}

img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
`;

export const VenueOwnerBio = styled.div`
margin-top: 20px;
`;

export const VenueFormContainer = styled.div`
padding: 20px;
margin-top: 40px;

h3{
  margin-bottom: 20px;
}
`;



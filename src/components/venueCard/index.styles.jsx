import styled from "styled-components";


export const Card = styled.div`
width: 345px;
height: 345px;
background: rgba(92, 103, 139, 0.56);
position: relative;
display: flex;
flex-direction: column;

&:hover{
  transform: scale(1.05);
  transition: 0.5s;
}

@media screen and (max-width: 857px){
width: 100%;
height: 100%;
}

`;

export const Image = styled.div`
position: relative;
width: 100%;
max-width: 345px;

img{
width: 345px;
height: 345px;
object-fit: cover;
object-position: center;
}

@media screen and (max-width: 470px){
height: 345px;

img{
  width: 100%;
  height: 100%;
}

}
}

`;

export const Price = styled.div`
border-radius: 30px;
background: rgba(92, 103, 139, 0.69);
backdrop-filter: blur(2px);
color: white;
position: absolute;
top: 10px;
right: 10px;
padding: 10px 20px;
max-width: 200px;
overflow: hidden;
text-overflow: ellipsis;

p{
  text-transform: capitalize;
}
`;

export const CardBody = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 118px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    max-width: 345px;
    overflow: hidden;

    h5{
      color: var(--white);
      font-size: 1.5rem;
      margin-top: 20px;
      max-width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 5px;
    }

`;



export const Gradient = styled.div`
background: linear-gradient(180deg, rgba(106, 119, 164, 0.00) 0%, #282D3E 100%);
position: absolute;
bottom: 0;
width: 100%;
height: 100%;
`;

export const Dates = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
background-color: var(--rose);
color: var(--black);
font-weight: bold;
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
width: 90%;

img{
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
}
`;

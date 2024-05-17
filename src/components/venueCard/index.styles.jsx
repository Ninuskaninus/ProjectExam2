import styled from "styled-components";

export const Card = styled.div`
width: 346px;
height: 400px;
border-radius: 30px;
background: rgba(92, 103, 139, 0.56);
position: relative;
display: flex;
flex-direction: column;

&:hover{
  border: 1px solid var(--white);
}

`;

export const Image = styled.div`
position: relative;

img{
width: 100%;
height: 250px;
object-fit: cover;
border-radius: 30px;
object-position: center;
}

`;

export const Location = styled.div`
border-radius: 100px;
background: rgba(40, 45, 62, 0.78);
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
padding: 15px;

`;

export const Icon = styled.div`
width: 100%;
display: flex;
gap: 10px;
height: 15px;

img{
  height: 15px;
}
`;

export const Text = styled.div`
margin-top: 30px;
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
p{
  color: var(--white);
  font-size: 0.8rem;
  margin-top: 5px;
  max-width: 70%;
overflow: hidden;
text-overflow: ellipsis;
}
`;

export const Price = styled.div`
position: absolute;
bottom: 15px;
right: 15px;
`;
import styled from "styled-components";


export const DashboardContainer = styled.div`
z-index: 1000;
`;
export const DashboardBtn = styled.button`
width: 60px;
height: 50px;
position: fixed;
top: 200px;
background: rgba(40, 45, 62, 0.88);
backdrop-filter: blur(2px);
border-radius: 0px 30px 30px 0px;
cursor: pointer;
transition: width 0.5s ease;

&:hover{
  width: 90px;
}

img{
  width: 20px;
  height: 20px;

}
`;

export const DashboardContent = styled.div`
position: fixed;
top: 260px;
left: -600px;
padding-left: 60px;
border-radius: 0px 30px 30px 0px;
background: rgba(40, 45, 62, 0.88);
backdrop-filter: blur(2px);
width: 100%;
max-width: 372px;
height: 610px;
transition: left 0.5s ease;


&.active{
  left: 0;
}

@media screen and (max-width: 400px){
  max-width: 100%;
  height: 100vh;
  border-radius: 0px;
  padding-left: 20px;
  padding-top: 20px;
}

`;

export const DashboardTop = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border-bottom: 1px solid var(--lines);
padding: 20px;
padding-left: 20px;

img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: var(--primary);
  
}
`;

export const DashboardMenu = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 50px 0;

h2{
  padding-left: 20px;
  margin-bottom: 10px;
}


`;

export const DashboardItem = styled.button`
display: flex;
cursor: pointer;
align-items: center;
width: 100%;
padding: 10px 20px;
transition: border-bottom 0.5s ease;

&:hover{
  font-weight: bold;
}

p{
  font-size: 1rem;
}

span{
  margin-left: 10px;
  color: var(--detail);

}

img{
  height: 20px;
  margin-right: 10px;
}
`;

export const DashboardBottom = styled.div`
padding-left: 20px;
position: absolute;
bottom: 30px;
`;

export const DashboardLogout = styled.button`
display: flex;
gap: 10px;
cursor: pointer;
align-items: center;

&:hover{
  font-weight: bold;
}
`;
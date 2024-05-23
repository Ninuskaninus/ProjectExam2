import styled from "styled-components";

export const DashboardContainer = styled.div``;
export const DashboardHead = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
border-bottom: 1px solid var(--wildYonder);
padding-bottom: 20px;
padding-top: 20px;

img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

`;

export const DashboardBody = styled.div`
padding-top: 20px;

@media screen and (max-width: 1075px){
  padding-left: 90px;
}

`;

export const DashboardItem = styled.button`
display: flex;
align-items: center;
gap: 10px;
margin: 20px 0;

img{
width: 20px;
}

span{
  color: var(--rose);
}

&:hover{
  color: var(--rose);
  font-weight: bold;
}

}
`;

export const DashboardFooter = styled.div`
margin-top: 50px;
img{
  width: 15px;
}
p{
  font-size: 0.8rem;
}
`;

export const DashboardBtn = styled.button``;
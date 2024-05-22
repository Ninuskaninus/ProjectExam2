import styled from "styled-components";

export const PageContainer = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

`;

export const PageContent = styled.div`
width: 100%;
max-width: 1200px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
margin-top: 20px;
padding: 0 20px;
`;

export const Dashboard = styled.div`
width: 330px;
background-color: var(--primary);
position: sticky;
top: 20px;
height: 50px;
`;

export const CardContainer = styled.div`
width: 100%;
background-color: var(--primary);
`;

export const SearchContainer = styled.div`
width: 100%;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 0 50px;
`;
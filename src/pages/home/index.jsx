import React, {useEffect} from "react";
import { SearchContainer, DashboardBtn, PageContainer, PageContent, DashboardContainer, CardContainer } from "./index.styles";
import VenueCard from "../../components/venueCard";
import Hero from "../../components/hero";
import SearchForm from "../../components/forms/searchform";
import Dashboard from "../../components/dahsboard";
import Icons from "../../images";

const handleDashboard = () => {
  const dashboard = document.getElementById("dashboardcontainer");
  dashboard.classList.toggle("active");
}
const token = localStorage.getItem("token");



export default function Home() {
  useEffect(() => {
    document.title = "Holidaze | Home";
  }, []);

  return (
    <PageContainer>
      <Hero />
      <SearchContainer>
        <SearchForm />
      </SearchContainer>
      <PageContent>
        
      {token && (
        <>
          <DashboardBtn id="dashboardBtn" onClick={handleDashboard}>
            <Icons.Dashboard />
          </DashboardBtn>
            <DashboardContainer id="dashboardcontainer">
              <Dashboard />
          </DashboardContainer>
        </>
        )}
        <CardContainer>
          <VenueCard />
          </CardContainer>
      </PageContent>
    </PageContainer>
  );
}

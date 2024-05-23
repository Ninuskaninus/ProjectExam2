import React, { useEffect, useContext, useState } from "react";
import { Cards, SearchContainer, DashboardBtn, PageContainer, PageContent, DashboardContainer, CardContainer } from "./index.styles";
import VenueCard from "../../components/venueCard";
import Hero from "../../components/hero";
import SearchForm from "../../components/forms/searchform";
import Dashboard from "../../components/dahsboard";
import Icons from "../../images";
import { AppContext } from "../../contexts/provider";

const handleDashboard = () => {
  const dashboard = document.getElementById("dashboardcontainer");
  dashboard.classList.toggle("active");
};

const token = localStorage.getItem("token");

export default function Home() {
  const { searchedVenues, selectedCategory } = useContext(AppContext);
  const [headingText, setHeadingText] = useState("All Venues");

  useEffect(() => {
    document.title = "Holidaze | Home";
  }, []);

  useEffect(() => {
    let newHeading = "All Venues";
    if (searchedVenues.length > 0) {
      newHeading = "Search Results";
    } else if (selectedCategory === "bookings") {
      newHeading = "My Bookings";
    } else if (selectedCategory === "myVenues") {
      newHeading = "My Venues";
    }
    setHeadingText(newHeading);
  }, [searchedVenues, selectedCategory]);

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
          <h1>{headingText}</h1>
          <Cards>
            <VenueCard />
          </Cards>
        </CardContainer>
      </PageContent>
    </PageContainer>
  );
}

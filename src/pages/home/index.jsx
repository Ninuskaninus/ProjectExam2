import React from "react";
import {SearchContainer, PageContainer, PageContent, Dashboard, CardContainer} from "./index.styles";
import VenueCard from "../../components/venueCard";
import EditProfile from "../../components/modals/editProfile";
import Hero from "../../components/hero";
import SearchForm from "../../components/forms/searchform";


export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <SearchContainer>
        <SearchForm />
      </SearchContainer>
      <PageContent>
        <Dashboard>Dashboard</Dashboard>
        <CardContainer>
          <VenueCard />
        </CardContainer>
      </PageContent>
    </PageContainer>
  );
}
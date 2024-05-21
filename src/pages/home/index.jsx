import React from "react";
import FilterForm from "../../components/forms/filterform";
import {PageCardContainer, FilterContainer, PageHeader, PageContainer, PageContent} from "../index.styles";
import VenueCard from "../../components/venueCard";
import EditProfile from "../../components/modals/editProfile";


export default async function Home() {
  const token = localStorage.getItem("token");



  return (
    <PageContainer>
      <PageContent>
        <EditProfile />
        <PageHeader>
          <h2>Browse venues</h2>
          <FilterContainer>
            <FilterForm />
          </FilterContainer>
        </PageHeader>
        <PageCardContainer>
          <VenueCard />
        </PageCardContainer>
      </PageContent>
    </PageContainer>
  );
}
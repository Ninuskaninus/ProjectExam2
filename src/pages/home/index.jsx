import React from "react";
import {PageCardContainer, PageHeader, PageContainer, PageContent} from "../index.styles";
import VenueCard from "../../components/venueCard";
import EditProfile from "../../components/modals/editProfile";

export default function Home() {
  return (
    <PageContainer>
      <PageContent>
        <EditProfile />
        <PageHeader>
          <h2>Browse venues</h2>
        </PageHeader>
        <PageCardContainer>
          <VenueCard />
        </PageCardContainer>
      </PageContent>
    </PageContainer>
  );
}
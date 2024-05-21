import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/provider";
import { PageContainer, PageContent } from "../index.styles";
import { MyVenuesContainer, Description, TopContainer, IconContainer, Location } from "./index.styles";
import VenueCarousel  from "../../components/carousel";
import DeleteBtn from "../../components/buttons/deleteBtn";
import DeleteConfirm from "../../components/modals/deleteConfirm";
import Icons from "../../images/index";
import EditVenueBtn from "../../components/buttons/editBtn";
import EditVenue from "../../components/modals/editVenue";

export default function MyVenues() {
  const { myVenues } = useContext(AppContext);
  const { id } = useParams();
  const venue = myVenues.find((venue) => venue.id === id);

    const modalHandler = () => {
    const modal = document.getElementById("deleteConfirm");
    modal.classList.toggle("active");
  }

  const editVenueModal = () => {
    const modal = document.getElementById("editVenue");
    modal.classList.toggle("active");
  }

  return (
    <PageContainer>
      <DeleteConfirm />
      <EditVenue />
      <PageContent>
        <MyVenuesContainer>
          <TopContainer>
            <EditVenueBtn onClick={editVenueModal} />
            <DeleteBtn onClick={modalHandler} />
          </TopContainer>
          <VenueCarousel media={venue.media} />
          <IconContainer>
            {venue.meta.pets ? <Icons.Pets /> : null}
            {venue.meta.wifi ? <Icons.Wifi /> : null}
            {venue.meta.parking ? <Icons.Parking /> : null}
            {venue.meta.breakfast ? <Icons.Breakfast /> : null}
            <p><Icons.Bed />{ venue.maxGuests }</p>
          </IconContainer>
          <Description>
            <h2>{venue.name}</h2>
            <p>{venue.description}</p>
            <h4>{ venue.price } NOK</h4>
          </Description>
          <Location>
            <p><Icons.Location/>{venue.location.city || "Unknown"}, { venue.location.country || "Unknown" } </p>
          </Location>
        </MyVenuesContainer>
      </PageContent>
    </PageContainer>
  );
}
import React, {useState, useEffect} from "react";
import { PageContainer, PageContent } from "../index.styles";
import { VenueFormContainer, VenueOwnerBio, VenueOwner, VenueDescription, VenueIcons, VenueContainer, VenueHead, CarouselContainer, VenueTitle } from "./index.styles";
import getVenues from "../../js/get/getVenues";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Icons from "../../images";
import VenueCarousel from "../../components/carousel";
import BookingForm from "../../components/forms/bookingForm";


export default function Venue() {
  const [venue, setVenue] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getVenues().then((data) => {
      data = data.filter((venue) => venue.id === id);
      setVenue(data[0]);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <PageContainer>
      <PageContent>
        <VenueContainer>
          <VenueHead>
            <div>
              <p><Icons.Logo /> Holidaze</p>
            </div>
            <div>
              <p>{venue.location.country || "Unknown"} | { venue.location.city || "Unknown" }</p>
            </div>
          </VenueHead>
          <VenueOwner>
            <div>
            {venue.owner.avatar.url ? <img src={venue.owner.avatar.url} alt="Owner avatar" /> : <Icons.PlaceholderAvatar />}
            <h3>{venue.owner.name || "Unknown"}</h3>
            </div>
            {venue.owner.bio && (
            <VenueOwnerBio>
              <p>{venue.owner.bio }</p>
            </VenueOwnerBio>
            )}
          </VenueOwner>
          <VenueTitle>
            <h1>{venue.name}</h1>
            <p>Welcome to <b>{venue.location.city}</b></p>
            <p><Icons.Location /> {venue.location.address || "Unknown"}, {venue.location.zip || "Unknown"} {venue.location.city || "Unknown"}, { venue.location.country || "Unknown" }</p>
          </VenueTitle>
          <VenueIcons>
            <p><Icons.Wifi /> {venue.meta.wifi ? "yes" : "no"}</p>
            <p><Icons.Parking /> {venue.meta.parking ? "yes" : "no"}</p>
            <p><Icons.Pets /> {venue.meta.pets ? "yes" : "no"}</p>
            <p><Icons.Breakfast /> {venue.meta.breakfast ? "yes" : "no"}</p>
            <p><Icons.Bed /> {venue.maxGuests || "Unknown"} Guests </p>
            <p><Icons.Rating /> {venue.rating}/5 Rating</p>
          </VenueIcons>
          <CarouselContainer>
            <VenueCarousel media={venue.media} />
          </CarouselContainer>
          <VenueDescription>
            <h2>About the venue</h2>
            <p>{venue.description}</p>
          </VenueDescription>
          <VenueFormContainer>
            <h3>Book now!</h3>
            <BookingForm venue={venue} />
          </VenueFormContainer>
        </VenueContainer>

      </PageContent>
    </PageContainer>
  );
}
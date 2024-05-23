import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import VenueCarousel  from "../../components/carousel";
import DeleteBtn from "../../components/buttons/deleteBtn";
import DeleteConfirm from "../../components/modals/deleteConfirm";
import Icons from "../../images/index";
import EditVenueBtn from "../../components/buttons/editBtn";
import EditVenue from "../../components/modals/editVenue";
import getMyVenue from "../../js/get/myVenue.js";
import Loader from "../../components/loader";
import {CarouselContainer, VenueDescription, VenueIcons, VenueInformation, VenueTitle, VenueHead, VenueContent, Gradient, VenueBackground, VenueContainer} from "../venue/index.styles";
import {BookingCustomer, BookingCard, BookingsContainer} from "./index.styles";

export default function MyVenues() {
  useEffect(() => {
    document.title = "Holidaze | My Venues";
  }, []);

  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyVenue(id);
      setVenue(data);
      setLoading(false);
    };
    fetchData();
  }
    , [id]);
  
    useEffect(() => {
    const bookings = venue.bookings || [];
      bookings.map((booking) => {
        const dateFrom = new Date(booking.dateFrom);
        const dateTo = new Date(booking.dateTo);
        booking.dateFrom = dateFrom.toLocaleDateString();
        booking.dateTo = dateTo.toLocaleDateString();
        return booking;
      }
    );
    setBookings(bookings);
  }
    , [venue]);
  
  if (loading) {
    return <Loader />;
  }

    const modalHandler = () => {
    const modal = document.getElementById("deleteConfirm");
    modal.classList.toggle("active");
  }

  const editVenueModal = () => {
    const modal = document.getElementById("editVenue");
    modal.classList.toggle("active");
  }

   return (
     <VenueContainer>
       <DeleteConfirm id="deleteConfirm" />
        <EditVenue />
      <VenueBackground>
        <Gradient />
        <Icons.Hero />
      </VenueBackground>
      <VenueContent>
        <VenueHead className="buttonContainer">
          <EditVenueBtn onClick={editVenueModal} />
          <DeleteBtn onClick={modalHandler} />
        </VenueHead>
        <VenueTitle>
          <h2>{venue?.name}</h2>
          <VenueInformation>
            <p>Welcome to <b>{venue?.location?.city || "Unknown"}</b> <span /></p>
            <p><Icons.Location /> {venue?.location?.address || "Unknown"}, {venue?.location?.zip || "Unknown"}, {venue?.location?.city || "Unknown"}</p>
          </VenueInformation>
        </VenueTitle>
        <VenueIcons>
          <p><Icons.Bed /> {venue?.maxGuests}</p>
          {venue?.meta?.wifi ? (<p><Icons.Wifi /> yes</p>) : (<p><Icons.Wifi /> no</p>)}
          {venue?.meta?.parking ? (<p><Icons.Parking /> yes</p>) : (<p><Icons.Parking /> no</p>)}
          {venue?.meta?.pets ? (<p><Icons.Pets /> yes</p>) : (<p><Icons.Pets /> no</p>)}
          {venue?.meta?.breakfast ? (<p><Icons.Breakfast /> yes</p>) : (<p><Icons.Breakfast /> no</p>)}
        </VenueIcons>
        <CarouselContainer>
          <VenueCarousel media={venue?.media} />
        </CarouselContainer>
        <VenueDescription>
          <h3>About the venue</h3>
          <p>{venue?.description}</p>
          <h4>{venue?.price} NOK</h4>
        </VenueDescription>
        <BookingsContainer>
          <h3>Bookings</h3>
          {bookings.length === 0 ? (
            <p>No bookings</p>
          ) : (
            bookings.map((booking) => (
              <BookingCard key={booking.id}>
                <BookingCustomer>
                  {booking?.customer?.avatar?.url ? (
                    <img src={booking.customer.avatar.url} alt="avatar" />
                  ) : (
                    <Icons.PlaceholderAvatar />
                  )}
                  <p>{booking.customer.name}</p>
                </BookingCustomer>
                <p><Icons.CalendarPink />{booking.dateFrom} - {booking.dateTo}</p>
                <p><Icons.BedPink />{booking.guests} guests</p>
              </BookingCard>
            ))
          )}
        </BookingsContainer>
      </VenueContent>
    </VenueContainer>
  );
}
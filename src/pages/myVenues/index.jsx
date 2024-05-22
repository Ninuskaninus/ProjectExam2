import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { PageContainer, PageContent } from "../index.styles";
import { BookingItem, Bookings, BookingContainer, MyVenuesContainer, Description, TopContainer, IconContainer, Location } from "./index.styles";
import VenueCarousel  from "../../components/carousel";
import DeleteBtn from "../../components/buttons/deleteBtn";
import DeleteConfirm from "../../components/modals/deleteConfirm";
import Icons from "../../images/index";
import EditVenueBtn from "../../components/buttons/editBtn";
import EditVenue from "../../components/modals/editVenue";
import getMyVenue from "../../js/get/myVenue.js";
import Loader from "../../components/loader";

export default function MyVenues() {
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
            <Location>
            <p><Icons.Location/>{venue.location.city || "Unknown"}, { venue.location.country || "Unknown" } </p>
          </Location>
          <Description>
            <h2>{venue.name}</h2>
            <p>{venue.description}</p>
            <h4>{ venue.price } NOK</h4>
          </Description>
          <BookingContainer>
            <h2>Bookings:</h2>
            {bookings.length === 0 && <p>No bookings yet</p>}
            {bookings.map((booking) => (
              <Bookings key={booking.id}>
                <BookingItem>
                  <img src={booking.customer.avatar.url} alt="" />
                  <h3>{booking.customer.name}</h3>
                </BookingItem>
                 <BookingItem>
                  <h3>{booking.dateFrom} - {booking.dateTo}</h3>
                  <p>{booking.guests} guests</p>
                </BookingItem>
              </Bookings>
            ))}
          </BookingContainer>
        </MyVenuesContainer>
      </PageContent>
    </PageContainer>
  );
}
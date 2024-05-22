import React, {useState, useEffect} from "react";
import { TotalPrice, FormBtnContainer, FormBooking, FormBookingItem } from "../index.styles";
import Icons from "../../../images";
import BookBtn from "../../buttons/bookBtn";
import { useParams } from "react-router-dom";

export default function BookingForm({ venue }) {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({
    dateFrom: "",
    dateTo: "",
    guests: 0,
    venueId: id,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBookingData({
      ...bookingData,
      venueId: id,
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  }

  useEffect(() => {
    if (bookingData.dateFrom && bookingData.dateTo) {
      const dateFrom = new Date(bookingData.dateFrom);
      const dateTo = new Date(bookingData.dateTo);
      const days = (dateTo - dateFrom) / (1000 * 60 * 60 * 24);
      setTotalPrice(days * venue.price);
    }
  }, [bookingData.dateFrom, bookingData.dateTo, venue.price]);

  return (
    <>
      <FormBooking>
      <FormBookingItem>
        <Icons.Calendar />
          <input
            name="dateFrom"
            onChange={handleChange}
            type="date"
            placeholder="Check-in" />
      </FormBookingItem>
      <FormBookingItem>
        <Icons.Calendar />
          <input
            name="dateTo"
            onChange={handleChange}
            type="date"
            placeholder="Check-out" />
      </FormBookingItem>
      <FormBookingItem>
        <Icons.Person />
          <input
            name="guests"
            onChange={handleChange}
            type="number"
            placeholder="Guests" />
      </FormBookingItem>
    </FormBooking>
      <TotalPrice>
        <p>Price per night: { venue.price } NOK</p>
        <p>Total price: { totalPrice } NOK</p>
      </TotalPrice>
      <FormBtnContainer>
        <BookBtn />
      </FormBtnContainer>
      </>
  );
}
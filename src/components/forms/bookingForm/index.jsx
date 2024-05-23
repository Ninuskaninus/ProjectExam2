import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, FormItem, FormBtnContainer, TotalPrice } from "../index.styles";
import BookBtn from "../../buttons/bookBtn/index.jsx";
import { useParams } from "react-router-dom";
import BookVenue from "../../../js/post/bookVenue.js";

export default function BookingForm({ venue }) {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [booking, setBooking] = useState({
    dateFrom: null,
    dateTo: null,
    venueId: id,
    guests: 0,
  });

    useEffect(() => {
    if (startDate && endDate) {
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); 
      const total = days * venue.price;
      setTotalPrice(total); 
    }
  }, [startDate, endDate, booking.guests, venue.price]);

  useEffect(() => {
    if (startDate && endDate) {
      setBooking((prevBooking) => ({
        ...prevBooking,
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
      }));
    }
  }, [startDate, endDate, booking]);

  const bookedDates = venue.bookings.map((booking) => ({
    startDate: new Date(booking.dateFrom),
    endDate: new Date(booking.dateTo),
  }));

  const isDateBlocked = (date) => {
    for (const booking of bookedDates) {
      if (date >= booking.startDate && date <= booking.endDate) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BookVenue(booking);
  };

  return (
    <>
      <h3>Book now!</h3>
      <Form className="row">
        <FormItem>
          <label>Date from</label>
          <DatePicker
            required
            value={booking.dateFrom}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            filterDate={(date) => !isDateBlocked(date)}
            placeholderText="dd/mm/yyyy"
          />
        </FormItem>
        <FormItem>
          <label>Date to</label>
          <DatePicker
            required
            value={booking.dateTo}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            filterDate={(date) => !isDateBlocked(date)}
            placeholderText="dd/mm/yyyy"
          />
        </FormItem>
        <FormItem>
          <label>Number of guests:</label>
          <input
            required
            onChange={(e) => {
              const parsedGuests = +e.target.value;
              setBooking({ ...booking, guests: parsedGuests });
            }}
            type="number"
            min={1}
            max={venue.maxGuests}
            placeholder="0"
          />
        </FormItem>
      </Form>
      <TotalPrice>
        <p>Price per night: {venue.price} NOK</p>
        <h3>Total: {totalPrice} NOK </h3>
      </TotalPrice>
      <FormBtnContainer>
        <BookBtn Text="Book now!" onClick={handleSubmit} />
      </FormBtnContainer>
    </>
  );
}

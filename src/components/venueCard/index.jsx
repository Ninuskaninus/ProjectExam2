import React, { useContext, useState } from 'react';
import Loader from '../loader';
import {
  Pagination,
  Dates,
  Gradient,
  Price,
  CardBody,
  Card,
  Image,
} from './index.styles';
import Icons from '../../images';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/provider';

export default function VenueCard() {
  const {
    venues,
    myVenues,
    bookings,
    searchedVenues,
    selectedCategory,
    loading,
  } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 10;

  if (loading) {
    return <Loader />;
  }

  const isMyVenue = (venueId) => {
    return myVenues.some((venue) => venue.id === venueId);
  };

  let displayedVenues = [];
  if (searchedVenues.length > 0) {
    displayedVenues = searchedVenues;
  } else if (selectedCategory === 'bookings') {
    displayedVenues = bookings.map((booking) => booking.venue);
  } else if (selectedCategory === 'myVenues') {
    displayedVenues = myVenues;
  } else {
    displayedVenues = venues;
  }

  const urlHandler = (venue) => {
    if (selectedCategory === 'bookings') {
      return `/venue/${venue.id}`;
    } else if (isMyVenue(venue.id)) {
      return `/myvenues/${venue.id}`;
    } else {
      return `/venue/${venue.id}`;
    }
  };

  // Pagination logic
  const indexOfLastVenue = currentPage * venuesPerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
  const currentVenues = displayedVenues.slice(
    indexOfFirstVenue,
    indexOfLastVenue
  );

  const totalPages = Math.ceil(displayedVenues.length / venuesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {currentVenues.length > 0 ? (
        currentVenues.map((venue) => {
          const booking = bookings.find(
            (booking) => booking.venue.id === venue.id
          );
          return (
            <Link className="cardLink" key={venue.id} to={urlHandler(venue)}>
              <Card>
                <Image>
                  <Price>
                    <p>{venue.price}Kr</p>
                  </Price>
                  {venue.media &&
                  venue.media.length > 0 &&
                  venue.media[0].url ? (
                    <img src={venue.media[0].url} alt={venue.name} />
                  ) : (
                    <Icons.PlaceholderImage />
                  )}
                  {selectedCategory === 'bookings' && booking && (
                    <Dates>
                      <p>
                        {new Date(booking.dateFrom).toLocaleDateString()} to{' '}
                        {new Date(booking.dateTo).toLocaleDateString()}
                      </p>
                    </Dates>
                  )}
                  <CardBody>
                    <h5>{venue.name}</h5>
                    <h6>
                      {venue.location.city || 'Unknown'} |{' '}
                      {venue.location.country || 'Unknown'}
                    </h6>
                  </CardBody>
                  <Gradient />
                </Image>
              </Card>
            </Link>
          );
        })
      ) : (
        <p>No results found.</p>
      )}
      <Pagination>
        {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </Pagination>
    </>
  );
}

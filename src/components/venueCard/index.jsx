import React, { useContext } from "react";
import Loader from "../loader";
import { Price, Text, Location, CardBody, Card, Image, Icon } from "./index.styles";
import Icons from "../../images";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/provider";

export default function VenueCard() {
  const { venues, myVenues, bookings, searchedVenues, selectedCategory, loading } = useContext(AppContext);

  if (loading) {
    return <Loader />;
  }

  let displayedVenues = [];
  if (searchedVenues.length > 0) {
    displayedVenues = searchedVenues;
  } else if (selectedCategory === "bookings") {
    displayedVenues = bookings.map((booking) => booking.venue);
  } else if (selectedCategory === "myVenues") {
    displayedVenues = myVenues;
  } else {
    displayedVenues = venues;
  }

  const urlHandler = (venue) => {
    if (selectedCategory === "bookings") {
      return `/venue/${venue.id}`;
    } else if (selectedCategory === "myVenues") {
      return `/myvenues/${venue.id}`;
    } else {
      return `/venue/${venue.id}`;
    }
  };

  return (
    <>
      {displayedVenues.map((venue) => (
        <Link key={venue.id} to={urlHandler(venue)}>
          <Card>
            <Image>
              <Location>
                <p>{venue.location.city || "Unknown"}</p>
              </Location>
              {venue.media && venue.media.length > 0 && venue.media[0].url ? (
                <img src={venue.media[0].url} alt={venue.name} />
              ) : (
                <Icons.PlaceholderImage />
              )}
            </Image>
            <CardBody>
              <Icon>
                {venue.meta.pets ? <Icons.Pets /> : null}
                {venue.meta.wifi ? <Icons.Wifi /> : null}
                {venue.meta.parking ? <Icons.Parking /> : null}
                {venue.meta.breakfast ? <Icons.Breakfast /> : null}
              </Icon>
              <Text>
                <h3>{venue.name}</h3>
                <p>
                  {venue.location.address || "Unknown"}, {venue.location.city || "Unknown"}, {venue.location.country || "Unknown"}
                </p>
              </Text>
              <Price>
                <p>{venue.price} NOK</p>
              </Price>
            </CardBody>
          </Card>
        </Link>
      ))}
    </>
  );
}

import React, { useContext } from "react";
import Loader from "../loader";
import { Dates, Gradient, Price, CardBody, Card, Image } from "./index.styles";
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
    const heading = document.getElementById("venueHeading");
    heading.textContent = "My Bookings";
  } else if (selectedCategory === "myVenues") {
    displayedVenues = myVenues;
    const heading = document.getElementById("venueHeading");
    heading.textContent = "My Venues";
} else {
    displayedVenues = venues;
    const heading = document.getElementById("venueHeading");
    heading.textContent = "All Venues";
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
    {displayedVenues.length > 0 ? (
      displayedVenues.map((venue) => {
        const booking = bookings.find(booking => booking.venue.id === venue.id);
        return (
          <Link className="cardLink" key={venue.id} to={urlHandler(venue)}>
            <Card>
              <Image>
                <Price>
                  <p>{venue.price}Kr</p>
                </Price>
                {venue.media && venue.media.length > 0 && venue.media[0].url ? (
                  <img src={venue.media[0].url} alt={venue.name} />
                ) : (
                  <Icons.PlaceholderImage />
                )}
                {selectedCategory === "bookings" && booking && (
                  <Dates>
                    <p>
                      {new Date(booking.dateFrom).toLocaleDateString()} to {" "}
                      {new Date(booking.dateTo).toLocaleDateString()}
                    </p>
                  </Dates>
                )}
                <CardBody>
                  <h5>{venue.name}</h5>
                  <h6>{venue.location.city || "Unknown"} | {venue.location.country || "Unknown"}</h6>
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
  </>
);

}

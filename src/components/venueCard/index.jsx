import React, {useState, useEffect} from "react";
import getVenues from "../../js/get/getVenues";
import Loader from "../loader";
import { Price, Text, Location, CardBody, Card, Image, Icon } from "./index.styles";
import Icons from "../../images";
import { Link } from "react-router-dom";

export default function VenueCard() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      getVenues().then((data) => {
        setVenues(data);
        setLoading(false);
      });
    }, []);

    if (loading) {
      return <Loader />;
  }
  
    return (
      <>
        {venues.map((venue) => {
          return (
              <Link key={venue.id} to={`/venue/${venue.id}`}>
              <Card >
                <Image>
                  <Location>
                    <p>{ venue.location.city || "Unknown" }</p>
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
                    <p>{venue.location.address || "Unknown"}, {venue.location.city || "Unknown"}, { venue.location.country || "Unknown" }</p>
                  </Text>
                  <Price>
                    <p>{venue.price} NOK</p>
                  </Price>
                  </CardBody>
              </Card>
              </Link>
            );
        })}
      </>
    );
  }

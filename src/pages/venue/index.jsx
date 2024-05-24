import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import Icons from '../../images';
import VenueCarousel from '../../components/carousel';
import BookingForm from '../../components/forms/bookingForm';
import { AppContext } from '../../contexts/provider';
import {
  VenueLogin,
  VenueFormContainer,
  VenueDescription,
  CarouselContainer,
  VenueIcons,
  VenueInformation,
  VenueTitle,
  VenueLocation,
  VenueUser,
  VenueHead,
  VenueContent,
  Gradient,
  VenueContainer,
  VenueBackground,
} from './index.styles';
import BookBtn from '../../components/buttons/bookBtn';
import { Link } from 'react-router-dom';

export default function Venue() {
  useEffect(() => {
    document.title = 'Holidaze | Venue';
  }, []);

  const { id } = useParams();
  const { venues, loading } = useContext(AppContext);
  const token = localStorage.getItem('token');
  if (loading) {
    return <Loader />;
  }
  const venue = venues.find((venue) => venue.id === id);

  return (
    <VenueContainer>
      <VenueContent>
        <VenueHead>
          <VenueUser>
            {venue?.owner?.avatar?.url ? (
              <img src={venue.owner.avatar.url} alt="avatar" />
            ) : (
              <Icons.PlaceholderAvatar />
            )}
            <div>
              <h5>{venue?.owner.name}</h5>
              <p>{venue?.owner.bio}</p>
            </div>
          </VenueUser>
          <VenueLocation>
            <p>
              {venue?.location.city || 'Unknown'} |{' '}
              {venue?.location.country || 'Unknown'}
            </p>
          </VenueLocation>
        </VenueHead>
        <VenueTitle>
          <h2>{venue?.name}</h2>
          <VenueInformation>
            <p>
              Welcome to <b>{venue.location.city || 'Unknown'}</b> <span />
            </p>
            <p>
              <Icons.Location /> {venue.location.address || 'Unkown'},{' '}
              {venue.location.zip || 'Unknown'},{' '}
              {venue.location.city || 'Unknown'}
            </p>
          </VenueInformation>
        </VenueTitle>
        <VenueIcons>
          <p>
            <Icons.Bed /> {venue.maxGuests}
          </p>
          {venue?.meta.wifi ? (
            <p>
              <Icons.Wifi /> yes
            </p>
          ) : (
            <p>
              <Icons.Wifi /> no
            </p>
          )}
          {venue?.meta.parking ? (
            <p>
              <Icons.Parking /> yes
            </p>
          ) : (
            <p>
              <Icons.Parking /> no
            </p>
          )}
          {venue?.meta.pets ? (
            <p>
              <Icons.Pets /> yes
            </p>
          ) : (
            <p>
              <Icons.Pets /> no
            </p>
          )}
          {venue?.meta.breakfast ? (
            <p>
              <Icons.Breakfast /> yes
            </p>
          ) : (
            <p>
              <Icons.Breakfast /> no
            </p>
          )}
          <p>
            <Icons.Rating /> {venue.rating}/5
          </p>
        </VenueIcons>
        <CarouselContainer>
          <VenueCarousel media={venue.media} />
        </CarouselContainer>
        <VenueDescription>
          <h3>About the venue</h3>
          <p>{venue.description}</p>
        </VenueDescription>
        {!token ? (
          <VenueLogin>
            <Link to="/login">
              <p>You need to be logged in to book a venue</p>
              <BookBtn title="Log in" ariaLabel="Log in" Text="Log in" />
            </Link>
          </VenueLogin>
        ) : (
          <VenueFormContainer>
            <BookingForm venue={venue} />
          </VenueFormContainer>
        )}
      </VenueContent>
      <VenueBackground>
        <Gradient />
        <Icons.Hero />
      </VenueBackground>
    </VenueContainer>
  );
}

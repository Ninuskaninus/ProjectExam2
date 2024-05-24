import React from 'react';
import Dashboard from './assets/dashboard_white.png';
import Calendar from './assets/calendar_white.png';
import House from './assets/home.png';
import Edit from './assets/settings_white.png';
import Logout from './assets/logout.png';
import Logo from './assets/logo.png';
import Search from './assets/search.png';
import PlaceholderAvatar from './assets/placeholder_profile.png';
import Cards from './assets/cards.png';
import Add from './assets/add.png';
import Location from './assets/location_white.png';
import Person from './assets/person_white.png';
import PlaceholderImage from './assets/placeholder_image.png';
import Pets from './assets/pets_white.png';
import Wifi from './assets/wifi_white.png';
import Parking from './assets/parcing_white.png';
import Breakfast from './assets/breakfast_white.png';
import Bed from './assets/bed_white.png';
import Rating from './assets/rating.png';
import Password from './assets/password_white.png';
import Mail from './assets/mail_white.png';
import UserId from './assets/id_white.png';
import Close from './assets/close.png';
import PasswordError from './assets/password_red.png';
import EmailError from './assets/mail_red.png';
import UserError from './assets/id_red.png';
import Hero from './assets/hero.jpg';
import BedPink from './assets/bed_pink.png';
import CalendarPink from './assets/calendar_pink.png';

const Icons = {
  Dashboard: () => {
    return (
      <img
        src={Dashboard}
        alt="Dashboard icon"
        name="Dashboard"
        role="presentation"
        aria-label="Dashboard icon"
        loading="lazy"
      />
    );
  },

  Calendar: () => {
    return (
      <img
        src={Calendar}
        alt="Calendar icon"
        name="Calendar"
        role="presentation"
        aria-label="Calendar"
        loading="lazy"
      />
    );
  },

  House: () => {
    return (
      <img
        src={House}
        alt="House icon"
        name="House"
        role="presentation"
        aria-label="My venues"
        loading="lazy"
      />
    );
  },

  Edit: () => {
    return (
      <img
        src={Edit}
        alt="Edit icon"
        name="Edit"
        role="presentation"
        aria-label="Edit profile"
        loading="lazy"
      />
    );
  },

  Logout: () => {
    return (
      <img
        src={Logout}
        alt="Logout icon"
        name="Logout"
        role="presentation"
        aria-label="Log out"
        loading="lazy"
      />
    );
  },

  Logo: () => {
    return (
      <img
        src={Logo}
        alt="Logo icon"
        name="Logo"
        role="presentation"
        aria-label="Holidaze logo"
        loading="lazy"
      />
    );
  },

  Search: () => {
    return (
      <img
        src={Search}
        alt="Search icon"
        name="Search"
        role="presentation"
        aria-label="Search icon"
        loading="lazy"
      />
    );
  },

  PlaceholderAvatar: () => {
    return (
      <img
        src={PlaceholderAvatar}
        alt="Placeholder avatar"
        name="Placeholder avatar"
        role="presentation"
        aria-label="Image missing"
        loading="lazy"
      />
    );
  },

  Cards: () => {
    return (
      <img
        src={Cards}
        alt="Cards icon"
        name="Cards"
        role="presentation"
        aria-label="All venues"
        loading="lazy"
      />
    );
  },

  Add: () => {
    return (
      <img
        src={Add}
        alt="Add icon"
        name="Add"
        role="presentation"
        aria-label="Add new venue"
        loading="lazy"
      />
    );
  },

  Location: () => {
    return (
      <img
        src={Location}
        alt="Location icon"
        name="Location"
        role="presentation"
        aria-label="Location"
        loading="lazy"
      />
    );
  },

  Person: () => {
    return (
      <img
        src={Person}
        alt="Person icon"
        name="Person"
        role="presentation"
        aria-label="Profile"
        loading="lazy"
      />
    );
  },

  PlaceholderImage: () => {
    return (
      <img
        src={PlaceholderImage}
        alt="Placeholder"
        name="Placeholder image"
        role="presentation"
        aria-label="Image missing"
        loading="lazy"
      />
    );
  },

  Pets: () => {
    return (
      <img
        src={Pets}
        alt="Pets icon"
        name="Pets"
        role="presentation"
        aria-label="Pets"
        loading="lazy"
      />
    );
  },

  Wifi: () => {
    return (
      <img
        src={Wifi}
        alt="Wifi icon"
        name="Wifi"
        role="presentation"
        aria-label="Wifi"
        loading="lazy"
      />
    );
  },

  Parking: () => {
    return (
      <img
        src={Parking}
        alt="Parking icon"
        name="Parking"
        role="presentation"
        aria-label="Parking"
        loading="lazy"
      />
    );
  },

  Breakfast: () => {
    return (
      <img
        src={Breakfast}
        alt="Breakfast icon"
        name="Breakfast"
        role="presentation"
        aria-label="Breakfast"
        loading="lazy"
      />
    );
  },

  Bed: () => {
    return (
      <img
        src={Bed}
        alt="Bed icon"
        name="Bed"
        role="presentation"
        aria-label="Max guests"
        loading="lazy"
      />
    );
  },

  Rating: () => {
    return (
      <img
        src={Rating}
        alt="Rating icon"
        name="Rating"
        role="presentation"
        aria-label="Rating"
        loading="lazy"
      />
    );
  },

  Password: () => {
    return (
      <img
        src={Password}
        alt="Password icon"
        name="Password"
        role="presentation"
        aria-label="Password"
        loading="lazy"
      />
    );
  },

  Mail: () => {
    return (
      <img
        src={Mail}
        alt="Mail icon"
        name="Mail"
        role="presentation"
        aria-label="Mail"
        loading="lazy"
      />
    );
  },

  UserId: () => {
    return (
      <img
        src={UserId}
        alt="User ID icon"
        name="User ID"
        role="presentation"
        aria-label="Username"
        loading="lazy"
      />
    );
  },

  Close: () => {
    return (
      <img
        src={Close}
        alt="Close icon"
        name="Close"
        role="presentation"
        aria-label="Close modal"
        loading="lazy"
      />
    );
  },

  PasswordError: () => {
    return (
      <img
        src={PasswordError}
        alt="Password error icon"
        name="Password error"
        role="presentation"
        aria-label="Wrong password"
        loading="lazy"
      />
    );
  },

  EmailError: () => {
    return (
      <img
        src={EmailError}
        alt="Email error icon"
        name="Email error"
        role="presentation"
        aria-label="Wrong email"
        loading="lazy"
      />
    );
  },

  UserError: () => {
    return (
      <img
        src={UserError}
        alt="User error icon"
        name="User error"
        role="presentation"
        aria-label="Wrong username"
        loading="lazy"
      />
    );
  },

  Hero: () => {
    return (
      <img
        src={Hero}
        alt="Beautiful mountains in purple and pink sunset"
        name="Hero"
        role="presentation"
        aria-label="Hero image"
        loading="lazy"
      />
    );
  },

  BedPink: () => {
    return (
      <img
        src={BedPink}
        alt="Pink bed icon"
        name="Pink bed"
        role="presentation"
        aria-label="Max guests"
        loading="lazy"
      />
    );
  },

  CalendarPink: () => {
    return (
      <img
        src={CalendarPink}
        alt="Pink calendar icon"
        name="Pink calendar"
        role="presentation"
        aria-label="Calendar"
        loading="lazy"
      />
    );
  },
};

export default Icons;

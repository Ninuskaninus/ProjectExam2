import React, { createContext, useState, useEffect } from "react";
import getVenues from "../js/get/getVenues.js";
import getProfile from "../js/get/profile.js";
import searchVenue from "../js/get/searchVenue.js";
import Loader from "../components/loader/index.jsx";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(!!token); 
  const [loadingVenues, setLoadingVenues] = useState(true);
  const [venues, setVenues] = useState([]);
  const [myVenues, setMyVenues] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [searchedVenues, setSearchedVenues] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getProfile();
        setProfile(profileData);
        setMyVenues(profileData.venues || []);
        setBookings(profileData.bookings || []);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoadingProfile(false);
      }
    };

    if (token) {
      fetchProfileData();
    } else {
      setLoadingProfile(false);
    }
  }, [token]);

  useEffect(() => {
    const fetchVenuesData = async () => {
      try {
        const venuesData = await getVenues();
        setVenues(venuesData);
      } catch (error) {
        console.error("Error fetching venues:", error);
      } finally {
        setLoadingVenues(false);
      }
    };

    fetchVenuesData();
  }, []);

  const handleSearch = async (search) => {
    try {
      const results = await searchVenue(search);
      setSearchedVenues(results);
    } catch (error) {
      console.error("Error searching venues:", error);
    }
  };

  const clearSearchResults = () => {
    setSearchedVenues([]);
  };

  if (loadingProfile || loadingVenues) {
    return <Loader />;
  }

  return (
    <AppContext.Provider value={{ profile, venues, myVenues, bookings, searchedVenues, selectedCategory, setSelectedCategory, handleSearch, clearSearchResults }}>
      {children}
    </AppContext.Provider>
  );
}

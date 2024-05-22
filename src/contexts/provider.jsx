import React, { createContext, useState, useEffect } from "react";
import getVenues from "../js/get/getVenues.js";
import getProfile from "../js/get/profile.js";
import searchVenue from "../js/get/searchVenue.js";
import Loader from "../components/loader/index.jsx";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [venues, setVenues] = useState([]);
  const [myVenues, setMyVenues] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [searchedVenues, setSearchedVenues] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const profileData = await getProfile();
          setProfile(profileData);
          setMyVenues(profileData.venues || []);
          setBookings(profileData.bookings || []);
        } catch (error) {
          console.error("Error fetching profile:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const venuesData = await getVenues();
        setVenues(venuesData);
      } catch (error) {
        console.error("Error fetching venues:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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

  if (loading) {
    return <Loader />;
  }

  return (
    <AppContext.Provider value={{ profile, venues, myVenues, bookings, searchedVenues, selectedCategory, setSelectedCategory, handleSearch, clearSearchResults }}>
      {children}
    </AppContext.Provider>
  );
}

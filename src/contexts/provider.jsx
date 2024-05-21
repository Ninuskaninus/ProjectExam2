import React, { createContext, useState, useEffect } from "react";
import getVenues from "../js/get/getVenues.js";
import getProfile from "../js/get/profile.js";
import Loader from "../components/loader/index.jsx";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [venues, setVenues] = useState([]);
  const [myVenues, setMyVenues] = useState([]);
  const [bookings, setBookings] = useState([]);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <AppContext.Provider value={{ profile, venues, myVenues, bookings, selectedCategory, setSelectedCategory }}>
      {children}
    </AppContext.Provider>
  );
}

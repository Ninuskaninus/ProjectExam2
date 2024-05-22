import React, { useContext, useState, useEffect } from "react";
import Icons from "../../images/index.jsx";
import {DashboardLogout, DashboardBottom, DashboardItem, DashboardMenu, DashboardTop, DashboardContainer, DashboardBtn, DashboardContent} from "./index.styles";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/provider";
import Loader from "../loader/index.jsx";

export default function Dashboard() {
  const { setSelectedCategory, profile } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleDashboard = () => {
    const dashboard = document.getElementById("dashboardcontainer");
    dashboard.classList.toggle("active");
  }

  const handleEditProfile = () => {
    const editProfile = document.getElementById("editProfileModal");
    editProfile.classList.toggle("active");
    const dashboard = document.getElementById("dashboardcontainer");
    dashboard.classList.remove("active");
  }

  let noBookings = profile.bookings && profile.bookings.length === 0;
  let noVenues = profile.venues && profile.venues.length === 0;
  
  if (!profile || !token) {
    return null;
  }


  return (
    <DashboardContainer >
      <DashboardBtn onClick={handleDashboard}>
        <Icons.Dashboard />
      </DashboardBtn>
      <DashboardContent id="dashboardcontainer">
        <DashboardTop>
          {profile.avatar.url || "" ? <img src={profile.avatar.url} alt="avatar" /> : <Icons.PlaceholderAvatar />}
          <h3>{profile.name}</h3>
        </DashboardTop>
        <DashboardMenu>
          <h2>Dashboard</h2>
          <DashboardItem
            onClick={() => setSelectedCategory("bookings")}
            className={noBookings ? 'disabled' : ''}
            disabled={noBookings}
          >
            <Icons.Calendar />
            <p>My bookings</p>
            <span>({profile.bookings.length || 0})</span>
          </DashboardItem>
          <DashboardItem
            onClick={() => setSelectedCategory("myVenues")}
            className={noVenues ? 'disabled' : ''}
            disabled={noVenues}
          >
            <Icons.House />
            <p>My venues</p>
            <span>({profile.venues.length || 0})</span>
          </DashboardItem>
          <DashboardItem onClick={() => setSelectedCategory("all")}>
            <Icons.Cards />
            <p>All Venues</p>
          </DashboardItem>
          <Link to="/addvenue">
            <DashboardItem>
            <Icons.Add />
            <p>Add venue</p>
          </DashboardItem>
          </Link>
          <DashboardItem onClick={handleEditProfile}>
            <Icons.Edit />
            <p>Edit profile</p>
          </DashboardItem>
        </DashboardMenu>
        <DashboardBottom>
          <DashboardLogout>
          <Icons.Logout />
          <p>Logout</p>
          </DashboardLogout>
        </DashboardBottom>
      </DashboardContent>
    </DashboardContainer>
  );
}
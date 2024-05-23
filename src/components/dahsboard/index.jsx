import React, { useContext } from "react";
import { DashboardItem, DashboardContainer, DashboardHead, DashboardBody, DashboardFooter } from "./index.styles";
import Icons from "../../images";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/provider";
import Loader from "../loader/index.jsx";
import EditProfileForm from "../forms/editProfile/index.jsx";

export default function Dashboard() {
  const { setSelectedCategory, profile, loading } = useContext(AppContext);
  const token = localStorage.getItem("token");

  if (loading) {
    return <Loader />;
  }

  if (!profile || !token) {
    return null;
  }

  let noBookings = profile.bookings && profile.bookings.length === 0;
  let noVenues = profile.venues && profile.venues.length === 0;

  const editProfile = () => {
    const dashboard = document.getElementById("editProfileForm");
    dashboard.classList.toggle("show");
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <DashboardContainer>
        <DashboardHead>
          {profile.avatar?.url ? <img src={profile.avatar.url} alt="avatar" /> : <Icons.PlaceholderAvatar />}
          <h5>{profile.name}</h5>
        </DashboardHead>
        <DashboardBody>
          <h5>Dashboard</h5>
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
            <p>All venues</p>
          </DashboardItem>
          <Link to="/addvenue">
            <DashboardItem>
              <Icons.Add />
              <p>Add venue</p>
            </DashboardItem>
          </Link>
          <DashboardItem onClick={editProfile}>
            <Icons.Edit />
            <p>Edit profile</p>
          </DashboardItem>
          <EditProfileForm />
          <DashboardFooter>
            <DashboardItem onClick={handleLogout}>
              <Icons.Logout />
              <p>Logout</p>
            </DashboardItem>
          </DashboardFooter>
        </DashboardBody>
        <DashboardFooter></DashboardFooter>
      </DashboardContainer>
    </>
  );
}

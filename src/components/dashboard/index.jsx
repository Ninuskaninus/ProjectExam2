import React from "react";
import Icons from "../../images/index.jsx";
import {DashboardLogout, DashboardBottom, DashboardItem, DashboardMenu, DashboardTop, DashboardContainer, DashboardBtn, DashboardContent} from "./index.styles";
import { Link } from "react-router-dom";

export default function Dashboard() {
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



  return (
    <DashboardContainer >
      <DashboardBtn onClick={handleDashboard}>
        <Icons.Dashboard />
      </DashboardBtn>
      <DashboardContent id="dashboardcontainer">
        <DashboardTop>
          <Icons.PlaceholderAvatar />
          <h3>Username</h3>
        </DashboardTop>
        <DashboardMenu>
          <h2>Dashboard</h2>
          <DashboardItem>
            <Icons.Calendar />
            <p>My bookings</p>
            <span>(10)</span>
          </DashboardItem>
          <DashboardItem>
            <Icons.House />
            <p>My venues</p>
            <span>(5)</span>
          </DashboardItem>
          <DashboardItem>
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
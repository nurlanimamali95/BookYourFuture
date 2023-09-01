import React from "react";
import { Routes, Route } from "react-router-dom";

import UserProfilePage from "./pages/userProfilePage/userProfilePage";
import Layout from "./Layout/Layout";
import StudentDashboard from "../src/pages/Students/StudentsDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import EventManagement from "./pages/Admin/EventManagementPage";
import EditEventPage from "./pages/Admin/EditEventPage";
import AddEventPage from "./pages/Admin/AddEventPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/events" element={<EventManagement />} />
        <Route path="/edit/:id" element={<EditEventPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
};

export default App;

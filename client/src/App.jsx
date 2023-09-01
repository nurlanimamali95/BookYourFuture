import React from "react";
import { Routes, Route } from "react-router-dom";

import UserProfilePage from "./pages/userProfilePage/userProfilePage";
// import Layout from "./Layout/Layout";
import StudentDashboard from "../src/pages/Students/StudentsDashboard";
import UserList from "./pages/User/UserList";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import EventManagement from "./pages/Admin/EventManagementPage";
import EditEventPage from "./pages/Admin/EditEventPage";
import AddEventPage from "./pages/Admin/AddEventPage";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/layout" element={<Layout />}> */}
        <Route path="/events" element={<EventManagement />} />
        <Route path="/edit/:id" element={<EditEventPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="student" element={<StudentDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="userList" element={<UserList />} />
        <Route path="userProfile" element={<UserProfilePage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;

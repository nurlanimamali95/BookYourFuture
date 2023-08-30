import React from "react";
import { Routes, Route } from "react-router-dom";

import UserProfilePage from "./pages/userProfilePage/userProfilePage";
import StudentDashboard from "../src/pages/Students/StudentsDashboard";
import UserList from "./pages/User/UserList";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import EventManagement from "./pages/Admin/EventManagement";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminevent" element={<EventManagement />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
};

export default App;

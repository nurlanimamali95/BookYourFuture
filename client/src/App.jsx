import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfilePage from "./pages/userProfilePage/userProfilePage";
import Layout from "./Layout/Layout";
import StudentDashboard from "../src/pages/Students/StudentsDashboard";
import UserList from "./pages/User/UserList";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TimeSlotPage from "../src/pages/Students/TimeSlotsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/layout" element={<Layout />}>
          <Route path="student" element={<StudentDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="userList" element={<UserList />} />{" "}
          <Route path="userProfile" element={<UserProfilePage />} />
          <Route path="timeslots" element={<TimeSlotPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

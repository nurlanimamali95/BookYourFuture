import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../src/pages/Students/StudentsDashboard";
import UserList from "./pages/User/UserList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/user" element={<UserList />} />
      </Routes>
    </>
  );
};

export default App;

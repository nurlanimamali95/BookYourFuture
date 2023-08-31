import React from "react";
import { Routes, Route } from "react-router-dom";

import UserProfilePage from "./pages/userProfilePage/userProfilePage";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/user" element={<Layout />}>
          <Route path="userProfile" element={<UserProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import UserProfilePage from "./pages/userProfilePage/userProfilePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/userProfile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import BasicDateCalendar from "../../components/DatePicker/Calendar";

import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <p>Good luck with the project team BYF!</p>
      <BasicDateCalendar />
    </div>
  );
};

export default Home;

import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/**
 * This component wraps our App with the providers we do not want to have in our tests
 */
const AppWrapper = ({ children }) => {
  return (
    <>
      <Toaster />
      <Router>{children}</Router>
    </>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppWrapper;

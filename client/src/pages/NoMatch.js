import React from "react";
import Footer from "../components/Footer";

const NoMatch = () => {
  // Redirect to home-page in 10 secconds
  setTimeout(() => {
    window.location.assign("/");
  }, 5000);

  return (
    <div>
      <div className="no-match-page">
        <div className="no-match-graphic"></div>
      </div>
      <Footer />
    </div>
  );
};

export default NoMatch;

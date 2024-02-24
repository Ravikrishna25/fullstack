import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Header";
import "../../../assets/css/user.css";
import Footer from "./Footer";
function UserLayout({ children }) {
  return (
    <div className="user_container">
      <header style={{ position: "fixed", width: "100vw" }}>
        <Navbar />
      </header>
      <main
        style={{
          overflow: "auto",
          marginTop: "6.9%",
          height: "100%",
          scrollbarWidth: "none" /* For Firefox */,
          "-ms-overflow-style": "none" /* For IE and Edge */,
          "::-webkit-scrollbar": {
            display: "none" /* For Chrome, Safari, and Opera */,
          },
        }}
      >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired, //send component as a children for validating we use node
};
export default UserLayout;

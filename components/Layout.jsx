import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialBar from "./SocialBar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;

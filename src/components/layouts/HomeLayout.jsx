import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const HomeLayout = ({ children }) => {
 return (
  <>
   <Navbar />
   {children}
   <Footer />
  </>
 );
};

export default HomeLayout;

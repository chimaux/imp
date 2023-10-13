import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export const Template = ({children}) => {
  return (
    <div>
    
      <Navigation />

     {children}

      <Footer />
    </div>
  );
};

export default Template;

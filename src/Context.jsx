"use client";
import React, { useState } from "react";
const myGlobalContext = React.createContext();

const Provider = ({ children }) => {
 
  const toggleNavbar = () => {
    setnavbarOpen(prev => !prev)
}

  const [navbarOpen, setnavbarOpen] = useState(false)
  const store = {
    navbarOpen , setnavbarOpen,
    toggleNavbar,
  };

  return (
    <myGlobalContext.Provider value={store}>
      {children}
    </myGlobalContext.Provider>
  );
};
export { Provider };
export default myGlobalContext;
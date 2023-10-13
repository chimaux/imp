"use client";
import React, { useContext } from "react";
import  Link  from 'next/link'
import { IoMdArrowDropdown } from "react-icons/io";

import myGlobalContext from "../../Context";
import "../sideBarNavigation/SideBarNavigation.css";

const SideBarNavigation = () => {
  const { navbarOpen, toggleNavbar } = useContext(myGlobalContext);
  return (
    <div>
      {/* mobile screen */}

      {navbarOpen && (
        <div className="popupdiv lg:hidden block popuplinks animate__animated animate__bounceInDown   animation-duration: 3s;">
          <div className="popuplinking">
            <div className="navli" onClick={toggleNavbar}>
              &nbsp;Book a Seat <IoMdArrowDropdown />
            </div>
            <div className="navli" onClick={toggleNavbar}>
              &nbsp;Watch
            </div>
            <Link
              href="book-entertainers"
              className="navli"
              onClick={toggleNavbar}
            >
              &nbsp;Book Entertainers{" "}
            </Link>
            <div className="navli" onClick={toggleNavbar}>
              &nbsp;Get Started
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBarNavigation;

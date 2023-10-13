"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import "./Navigation.css";
import myGlobalContext from "@/Context";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggleNavbar } = useContext(myGlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div
          className={`header ${scrolled ? "bg-[#0F224D]" : "bg-transparent"}`}
        >
          <div className="menubarDiv">
            <button onClick={toggleNavbar}>
              <AiOutlineMenu className="menubar text-2xl" />
            </button>
          </div>

          <div className="logoContainer">
            <Link href="/">
              <img className="logo" src="images/logo edit.png" alt="" />
            </Link>

            <img className="secondMenu" src="images/menu icon.png" alt="" />
          </div>

          {/* larger screens */}

          <div className="links w-3/5 hidden">
            <div className="FirstListDiv">
              <div className="navigateList">
                Book a Seat
                <FaAngleDown />
              </div>

              <div className="navigateList">Watch</div>

              <Link
                className="navigateList"
                href="book-entertainers"
                onClick={toggleNavbar}
              >
                Book Entertainers
              </Link>

              <div className="navigateList">
                Get Started
                <FaAngleDown />
              </div>
            </div>

            <div className="FirstListDiv">
              <BiSearch className="navigateList" />

              <FiUser className="navigateList" />

              <Link className="navigateList" href="/login" onClick={toggleNavbar}>
              Log In
            </Link>
            </div>
          </div>

          <div className="Sidenavsearch">
            <div>
              <Link href="/">
                <BiSearch className="Sidsaerchicon" />
              </Link>
            </div>

            <div>
              <Link href="/login" className="sidebarlogin sm:flex " onClick={toggleNavbar}>
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

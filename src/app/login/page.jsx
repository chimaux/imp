"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { useContext } from "react";
import "./loginScreen.css";
import myGlobalContext from "../../Context";
import Link from "next/link";
// import Link from 'next/link';

const LoginScreen = () => {
  const { toggleNavbar } = useContext(myGlobalContext);
  return (
    <div className="FormContainer">
      <ScrollToTop />
      <div className="FormContent">
        <div className="FormImages">
          <div className="formOverly">
            <div className="formImage">
              <img src="images/formlogo.png" alt="" />
            </div>

            <div className="needHelpDiv">
              <div className="needHelp">Need Help?</div>
            </div>
          </div>
        </div>

        <div className="FormDiv">
          <form action="">
            <div className="Login">Login</div>
            <div className="inputDiv">
              <label for="Eamil">Email</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="inputDiv">
              <label for="Eamil">Password</label>
              <input type="Password" name="Name" placeholder="Password" />
            </div>

            <div className="forgetDiv">
              <Link
                className="forget "
                href="/forgot-password"
                onClick={toggleNavbar}
              >
                Forgot password?
              </Link>
            </div>

            <button className="button" type="submit">
              Login
            </button>
            <div className="forgetDiv">
              <Link
                className="haveAccount"
                href="/signup"
                onClick={toggleNavbar}
              >
                {" "}
                Dont have an account<span> Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

"use client"
import React, { useContext } from "react";
import myGlobalContext from "../../Context";
import styles from "../sideBarOverLay/SideBarOverLay.module.css";

export const SideBarOverLay = ({ children }) => {
  const { toggleNavbar } = useContext(myGlobalContext);
  return (

      <div
      onClick={toggleNavbar}
      className={styles.overlay}>
      {children}
     
      </div>

  );
};

"use client";
import React, { useState } from "react";
import styles from "./HomeScreen.module.css";
import "react-multi-carousel/lib/styles.css";
import { VscDeviceCameraVideo } from "react-icons/vsc";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./video.css";
import "./banner.css";
import "./heroSection.css"
import Link from "next/link";
import Template from "@/components/template/Template";
import SideBarNavigation from "@/components/sideBarNavigation/SideBarNavigation";


const handleDragStart = (e) => e.preventDefault();
const itemImg = [
  {
    images: "images/card1.png",
    card: "images/carda.png",
    id: "1",
  },

  {
    images: "images/card2.png",
    card: "images/cardb.png",
    id: "2",
  },

  {
    images: "images/card3.png",
    card: "images/cardc.png",
    id: "3",
  },

  {
    images: "images/card4.png",
    card: "images/cardd.png",
    id: "4",
  },

  {
    images: "images/card5.png",
    card: "images/cardf.png",
    id: "5",
  },

  {
    images: "images/card6.png",
    card: "images/cardg.png",
    id: "6",
  },
];



export const HomeScreen = () => {
  // VIDEO CAROUSEL STATES STARTS HERE

  const [showVideo, setShowVideo] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);
  const [showVideo4, setShowVideo4] = useState(false);
  const [showVideo5, setShowVideo5] = useState(false);

  const [mut] = useState(true);

  // VIDEO CAROUSEL STATES ENDS HERE

  // VIDEO CAROUSEL FUNCTIONS STARTS HERE
  const toggleVideo = () => {
    setShowVideo(!showVideo);
    setShowVideo2(false);
    setShowVideo3(false);
    setShowVideo4(false);
    setShowVideo5(false);
  };
  const toggleVideo2 = () => {
    setShowVideo2(!showVideo2);
    setShowVideo(false);
    setShowVideo3(false);
    setShowVideo4(false);
    setShowVideo5(false);
  };
  const toggleVideo3 = () => {
    setShowVideo3(!showVideo3);
    setShowVideo2(false);
    setShowVideo(false);
    setShowVideo4(false);
    setShowVideo5(false);
  };
  const toggleVideo4 = () => {
    setShowVideo4(!showVideo4);
    setShowVideo2(false);
    setShowVideo3(false);
    setShowVideo(false);
    setShowVideo5(false);
  };
  const toggleVideo5 = () => {
    setShowVideo5(!showVideo5);
    setShowVideo2(false);
    setShowVideo3(false);
    setShowVideo4(false);
    setShowVideo(false);
  };

  // const clickVideo = () => {
  //   setShowVideo(!showVideo);
  //   setMut(false)
  //   setShowVideo2(false);
  //   setShowVideo3(false);
  //   setShowVideo4(false);
  //   setShowVideo5(false);

  // };
  // const clickVideo2 = () => {
  //   setShowVideo2(!showVideo2);
  //   setMut(false)
  //   setShowVideo(false);
  //   setShowVideo3(false);
  //   setShowVideo4(false);
  //   setShowVideo5(false);
  // };
  // const clickVideo3 = () => {
  //   setShowVideo3(!showVideo3);
  //   setMut(false)
  //   setShowVideo2(false);
  //   setShowVideo(false);
  //   setShowVideo4(false);
  //   setShowVideo5(false);
  // };
  // const clickVideo4 = () => {
  //   setShowVideo4(!showVideo4);
  //   setMut(false)
  //   setShowVideo2(false);
  //   setShowVideo3(false);
  //   setShowVideo(false);
  //   setShowVideo5(false);
  // };
  // const clickVideo5 = () => {
  //   setShowVideo5(!showVideo5);
  //   setMut(false)
  //   setShowVideo2(false);
  //   setShowVideo3(false);
  //   setShowVideo4(false);
  //   setShowVideo(false);
  // };

  // VIDEO CAROUSEL FUNCTIONS ENDS HERE

  // VIDEO CAROUSEL ITEMS STARTS HERE
  const items = [
    <div
      className={`VidContainer`}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <div
        className={`videoDirectContainer  ${
          showVideo === true ? "videoHover" : ""
        }`}
      >
        {showVideo === true ? (
          <video
            onMouseLeave={toggleVideo}
            controls
            muted={mut}
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={"/videos/video1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="/images/home/video1Thumbnail.png" // Add the path to your thumbnail image here
            alt=""
            onMouseEnter={toggleVideo}
            // onClick={clickVideo}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="vActiveName">Rock Band</div>
    </div>,
    <div
      className={`VidContainer`}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <div
        className={`videoDirectContainer  ${
          showVideo2 === true ? "videoHover" : ""
        }`}
      >
        {showVideo2 === true ? (
          <video
            onMouseLeave={toggleVideo2}
            controls
            muted={mut}
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={"/videos/video1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
          src="/images/home/video2Thumbnail.png"  // Add the path to your thumbnail image here
            alt=""
            onMouseEnter={toggleVideo2}
            //  onClick={clickVideo2}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="vActiveName">Dj Floxx</div>
    </div>,
    <div
      className={`VidContainer`}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <div
        className={`videoDirectContainer  ${
          showVideo3 === true ? "videoHover" : ""
        }`}
      >
        {showVideo3 === true ? (
          <video
            onMouseLeave={toggleVideo3}
            controls
            muted={mut}
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={"/videos/video1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
          src="/images/home/video3Thumbnail.png" 
            alt=""
            onMouseEnter={toggleVideo3}
            // onClick={clickVideo3}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="vActiveName">Micheal Bot</div>
    </div>,
    <div
      className={`VidContainer`}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <div
        className={`videoDirectContainer  ${
          showVideo4 === true ? "videoHover" : ""
        }`}
      >
        {showVideo4 === true ? (
          <video
            onMouseLeave={toggleVideo4}
            controls
            muted={mut}
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={"/videos/video1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
          src="/images/home/video4Thumbnail.png" 
            alt=""
            onMouseEnter={toggleVideo4}
            // onClick={clickVideo4}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="vActiveName">Billy Jean</div>
    </div>,
    <div
      className={`VidContainer`}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <div
        className={`videoDirectContainer  ${
          showVideo5 === true ? "videoHover" : ""
        }`}
      >
        {showVideo5 === true ? (
          <video
            onMouseLeave={toggleVideo5}
            controls
            muted={mut}
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={"/videos/video1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
          src="/images/home/video1Thumbnail.png" // Add the path to your thumbnail image here
            alt=""
            onMouseEnter={toggleVideo5}
            // onClick={clickVideo5}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="vActiveName">Extacy</div>
    </div>,
  ];
  //  VIDEO CAROUSEL ITEMS ENDS HERE

  // BANNER CAROUSEL CAROUSEL ITEMS STARTS HERE
  const itemBanner = [
    <div>
      <div
        className="desktopBanner"
        onDragStart={handleDragStart}
        role="presentation"
      >
        <img src="images/banner.png" alt="" />
      </div>
      <div
        className="mobileBanner"
        onDragStart={handleDragStart}
        role="presentation"
      >
        <img src="/images/home/mobileBanner1.png"  alt="" />
      </div>
    </div>,
    <div>
      <div
        className="desktopBanner"
        onDragStart={handleDragStart}
        role="presentation"
      >
        <img src="images/banner.png" alt="" />
      </div>
      <div
        className="mobileBanner"
        onDragStart={handleDragStart}
        role="presentation"
      >
        <img src="/images/home/mobileBanner1.png" alt="" />
      </div>
    </div>,
  ];
  // BANNER CAROUSEL ITEMS ENDS HERE

  // HERO SECTION ITEMS STARTS HERE
  const HeroBanner = [
    <div 
    onDragStart={handleDragStart}
    role="presentation"
    className={styles.backgroundimg}>

  </div>,
    <div 
    onDragStart={handleDragStart}
    role="presentation"
    className={styles.backgroundimg2}>

  </div>,
      <div 
      onDragStart={handleDragStart}
      role="presentation"
      className={styles.backgroundimg3}>
        <div className={styles.dark}>

        </div>
 
    </div>
  ];
  // HERO SECTION ITEMS ENDS HERE




  return (
    <>
<Template>
<div className={styles.container}>
      {/**/}
      
<div className="heroText">

<SideBarNavigation />

<div className="overlay">
      <div className="heading">Enjoy a New</div>

      <div className="heading">Digital Room</div>
      <p>With the best user engagement.</p>
      <div className="btndiv">
        <div className="watchbtn">Watch</div>
      </div>
    </div>
</div>
      <div  id="carousel0">
        <AliceCarousel
          mouseTracking
          infinite
          items={HeroBanner}
          disableDotsControls
          animationDuration={4000}
          autoPlay={true}
          autoHeight
          autoPlayStrategy="default"
          autoPlayInterval={2000}
          renderPrevButton={() => (
            <div
              style={{
                display: "none",
              }}
            ></div>
          )}
          renderNextButton={() => (
            <div
              style={{
                display: "none",
              }}
            ></div>
          )}
        />
      </div>
     
      <div className="slider">
        <div className="videodiv">
          <div className="liveNow">Live Now </div>
          <div className="cameraIcon">
            <VscDeviceCameraVideo className="camera" />
          </div>
        </div>
        <div    id="carousel1">
        <AliceCarousel
       
          mouseTracking
          items={items}
          autoWidth
          disableDotsControls
          animationDuration={1000}
          infinite
      
          renderPrevButton={() => (
            <div
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                top: "30%",
                left: 0,
                marginLeft: 20,
                backgroundImage: `url(/images/home/prev.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          )}
          renderNextButton={() => (
            <div
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                right: 0,
                top: "30%",
                marginRight: 20,
                backgroundImage: `url(/images/home/next.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          )}
        />
        </div>

      </div>
 
      <div id="carousel2">
        <AliceCarousel
          mouseTracking
          infinite
          items={itemBanner}
          disableDotsControls
          animationDuration={4000}
          autoPlay={true}
          autoHeight
          autoPlayStrategy="default"
          autoPlayInterval={2000}
          renderPrevButton={() => (
            <div
              style={{
                display: "none",
              }}
            ></div>
          )}
          renderNextButton={() => (
            <div
              style={{
                display: "none",
              }}
            ></div>
          )}
        />
      </div>

      <div className={styles.connectdiv}>
        <div className={styles.connectword}>
          <h4>Explore the Best Solutions for Connectivity</h4>
          <p>
            Imprxx is a dedicated innovation showcasing the potential of
            passions and technology in redefining entertainment, event hosting
            and management, shopping and social media experiences thus creating
            better ways for people to connect and interact with content and
            creators. Through Studio, booking, ticketing, monetization and
            users’ engagement are given new possibilities. With B2B, we are
            delivering tailored management solutions for event-content
            businesses in sync with dedicated manpower, Anchors to ensure best
            delivery at all times. Novel possibility that brings together
            everyone into the best interactive and immersive experiences is
            borne from a dedicated Interface. Our ADS delivers cost-effective
            personalized brand adverts management.
          </p>
        </div>

        <div className={styles.tableData}>
          {itemImg.map((items, index) => (
            <div key={index.toString()} className={styles.tableDatas}>
              <div
                className={`${items.id === 3 ? "carddivs img" : "carddiv img"}`}
              ></div>

              <div className={styles.imagesdiv}>
                <img src={items.images} alt={`images ${index}`} />
              </div>

              <div className={styles.carddiv}>
                <img src={items.card} alt={`images ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Template> 
    </>

  );
};

export default HomeScreen;

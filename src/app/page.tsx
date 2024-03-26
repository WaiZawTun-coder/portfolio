"use client";

import React from "react";
import Image from "next/image";

// import custom components
import useWindowSize from "@/components/hooks/useWindowSize";
import Xbutton from "@/components/js/button";

// import css
import "./page.css";

// import images
import profileImage from "@/assests/images/profile-image.jpg";
import aboutImage from "@/assests/images/about-image.jpg";

// import icons
import BrushIcon from "@mui/icons-material/Brush";
import DnsIcon from "@mui/icons-material/Dns";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Home() {
  const size = useWindowSize();
  const image_width = (size.width * 33.333) / 100;
  const image_height = (image_width * 4) / 3;

  return (
    <div className="main-container">
      <div className="introduction-container">
        <div className="image">
          <Image
            alt="Wai Zaw Tun's image"
            src={profileImage}
            style={{
              maxWidth: "100%",
              minWidth: "300px",
              height: "300px",
              width: "300px",
              aspectRatio: 1,
            }}
            priority
            sizes={`(max-width: 768px) 100vw, 33vw`}
          />
        </div>
        <div className="paragraph">
          <p className="title">I'm Wai Zaw Tun</p>
          <p className="description">
            A <span className="item">full stack developer</span>,{" "}
            <span className="item">designer</span>,{" "}
            <span className="item">blogger</span>, and{" "}
            <span className="item">freelancer</span> with 2 years experience of
            software developing using <span className="item">react</span> and{" "}
            <span className="item">laravel</span>. For more information, please
            contact me.
          </p>
          <Xbutton title="Contact Me" onClick={() => {}} />
        </div>
      </div>
      <div className="about-container">
        <p className="title">About</p>
        <div className="about-description">
          <div className="image">
            <Image
              alt="about-image"
              src={aboutImage}
              style={{
                maxWidth: "100%",
                minWidth: "300px",
                height: "300px",
                width: "300px",
                aspectRatio: 1,
              }}
              priority
            />
          </div>
          <div className="cards-container">
            <div className="about-card">
              <BrushIcon fontSize="large" className="about-icon" />
              <div className="description-container">
                <p className="card-title">Frontend Developer</p>
                <p className="card-description">
                  I'm a frontend developer with experience in building
                  responsive and optimized sites.
                </p>
              </div>
            </div>
            <div className="about-card">
              <DnsIcon fontSize="large" className="about-icon" />
              <div className="description-container">
                <p className="card-title">Backend Developer</p>
                <p className="card-description">
                  I've experienced developing fast and optimized back-end
                  systems and APIs.
                </p>
              </div>
            </div>
            <div className="about-card">
              <DashboardIcon fontSize="large" className="about-icon" />
              <div className="description-container">
                <p className="card-title">UI Designer</p>
                <p className="card-description">
                  I've designed multiple landing pages and have created design
                  systems as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

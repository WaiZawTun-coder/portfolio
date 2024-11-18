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

// json
import Projects from "@/assests/json/projects.json";
import IconResolver from "@/components/js/icon_resolver";

export default function Home() {
  const size = useWindowSize();
  const image_width = (size.width * 33.333) / 100;
  const image_height = (image_width * 4) / 3;

  const [projects, setProjects] = React.useState({
    projects: [Projects.projects[0], Projects.projects[1]],
  });

  function toggle_project_description(index: Number, toOpen: Boolean) {
    if (size.width < 768) {
      const container = document.getElementById(`project-card-${index}`);
      const description = document.getElementById(`project-${index}`);
      if (container && description) {
        if (toOpen) {
          container.style.zIndex = "9";
          description.style.display = "flex";
        } else {
          container.style.zIndex = "";
          description.style.display = "none";
        }
      }
    }
  }

  function getMoreProject() {
    console.log("Get More Projects");
    if (projects.projects.length < Projects.projects.length)
      setProjects((projects) => {
        return {
          projects: [
            ...projects.projects,
            Projects.projects[projects.projects.length],
            Projects.projects[projects.projects.length + 1],
          ],
        };
      });
  }

  return (
    <div className="container">
      {/* Introduction */}
      <div className="introduction-container">
        <div className="image">
          <Image
            alt="Wai Zaw Tun&spos;s image"
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
          <p className="title">I&apos;m Wai Zaw Tun</p>
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
      {/* About */}
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
            {/* about (skills) */}
            <div className="about-card">
              <BrushIcon fontSize="large" className="about-icon" />
              <div className="description-container">
                <p className="card-title">Frontend Developer</p>
                <p className="card-description">
                  I&apos;m a frontend developer with experience in building
                  responsive and optimized sites.
                </p>
              </div>
            </div>
            <div className="about-card">
              <DnsIcon fontSize="large" className="about-icon" />
              <div className="description-container">
                <p className="card-title">Backend Developer</p>
                <p className="card-description">
                  I&apos;ve experienced developing fast and optimized back-end
                  systems and APIs.
                </p>
              </div>
            </div>
            <div className="about-card">
              <DashboardIcon fontSize="large" className="about-icon" />
              <div className="description-container">
                <p className="card-title">UI Designer</p>
                <p className="card-description">
                  I&apos;ve designed multiple landing pages and have created
                  design systems as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="project-container">
        <p className="title">Projects</p>
        {/* project cards */}
        <div className="project-card-container">
          {projects.projects.map((project, index) => {
            return (
              <div
                className="home-project-card"
                key={project.name}
                id={`project-card-${index}`}
              >
                <div
                  className="card-image"
                  onClick={() => {
                    toggle_project_description(index, true);
                  }}
                >
                  <Image
                    src={profileImage}
                    alt="Project name"
                    style={{
                      maxWidth: "250px",
                      minWidth: "250px",
                      width: "250px",
                      height: "300px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                    priority
                  />
                  <p className="mobile-project-name">{project.name}</p>
                </div>
                <div
                  className="project-description-container"
                  id={`project-${index}`}
                >
                  <div
                    className="close-btn"
                    onClick={() => {
                      toggle_project_description(index, false);
                    }}
                  >
                    <IconResolver
                      iconName="Close"
                      key={`project-${index}-close`}
                    />
                  </div>
                  <div className="description-detail">
                    <p className="project_name">{project.name}</p>
                    <div className="mini-description">
                      {project.description}
                    </div>
                  </div>
                  <div className="action-btn">
                    <Xbutton
                      onClick={() => {}}
                      title="Learn More"
                      key={project.name}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {Projects.projects.length > projects.projects.length ? (
          <Xbutton
            onClick={getMoreProject}
            title="Load More..."
            key="load-more"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

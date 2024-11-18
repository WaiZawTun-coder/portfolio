"use client";

import getUTC from "@/components/utils/functions/getUTC";
import Image from "next/image";

// import css
import "./page.css";

// icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

export default function BlogContainer({
  id,
  aurthor,
  time,
  tags,
  body: { image, text },
}: {
  id: number;
  aurthor: string;
  time: {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
  };
  tags: string[];
  body: {
    image: string | null;
    text: string | null;
  };
}) {
  function displayTags(id: number) {
    var tags = document.getElementById(`blog-post-${id}-tags`);
    tags?.classList.toggle("active");
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <div className="author-detail">
          <Image
            alt="Wai Zaw Tun&spos;s image"
            src="http://localhost:3000/profile-image.jpg"
            style={{
              maxWidth: "100%",
              minWidth: "50px",
              height: "50px",
              width: "50px",
              aspectRatio: 1,
              borderRadius: 25,
            }}
            priority
            width={100}
            height={100}
          />
          <div className="author">
            <p className="name">{aurthor}</p>
            <p className="upload-time">{getUTC(time)}</p>
          </div>
        </div>
        {tags.length > 0 ? (
          <>
            <div
              className="tags"
              id={`blog-post-${id}-tags`}
              onClick={() => displayTags(id)}
            >
              {tags.map((tag) => (
                <label key={tag} className="blog-post-tag">
                  {tag}
                </label>
              ))}
            </div>
            <ArrowDropDownIcon
              width={15}
              height={15}
              onClick={() => displayTags(id)}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="blog-post-body">
        {image ? (
          <Image
            alt="image"
            src={image}
            style={{
              maxWidth: "100%",
              minWidth: "350px",
              width: "350px",
              height: "350px",
              aspectRatio: 1,
            }}
            priority
            sizes={`(max-width: 768px) 100vw, 33vw`}
            width={350}
            height={350}
          />
        ) : (
          <></>
        )}
        <div className="blog-post-body-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

// Preloader.js
import React, { useEffect, useState } from "react";
import "./Preloader.css"; // Ensure you have styles for .preloader-active and .preloader-exit

const Preloader = ({ loading }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);
  
  // List of greetings
  const greetings = [
    "Hello", "नमस्ते", "வணக்கம்", "Holla", 
     "مرحبا", 'السلام عليكم'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (greetingIndex < greetings.length - 1) {
        setGreetingIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => setShowMainContent(true), 1000); // Delay before showing main content
      }
    }, 500); // Adjust the interval time as needed (1 second per greeting)

    return () => clearInterval(intervalId);
  }, [greetingIndex, greetings.length]);

  // If loading is finished and preloader is out, return nothing
  if (showMainContent) {
    return null;
  }

  return (
    <div className={`preloader ${loading ? 'preloader-active' : 'preloader-exit'}`}>
      <div
        id="greeting"
        style={{
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          fontFamily: "champ",
        }}
      >
        <p className="fadeIn">{greetings[greetingIndex]}</p>
      </div>
    </div>
  );
};

export default Preloader;
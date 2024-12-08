import React from "react";
import MyImage from '../../assets/images/MyImg.png';

const About = () => {
  const Line = ({ text }) => (
    <span
      style={{
        display: "block",
        fontWeight: "bold",
        fontSize: "1.25rem",
        whiteSpace: "normal",
        lineHeight: "1.75",
        color: "#FFFFFF",
      }}
    >
      {text}
    </span>
  );

  return (
    <div
      className="flex flex-col md:flex-row bg-[rgb(55,55,55)] px-6 md:px-20 justify-between items-center min-h-screen"
      id="about"
    >
      {/* Image Section */}
      <div className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] mt-10 flex-shrink-0">
        <img
          src={MyImage}
          alt="Profile"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="py-10 md:py-40 md:pl-10 text-center md:text-left">
        {/* First Block */}
        <div>
          <Line text="Hey there! 👋" />
        </div>

        {/* Second Block */}
        <div className="py-3">
          <Line text="I'm a React JS Frontend Developer" />
          <Line text="Currently rocking it at Crisfood Online LLP since 2023." />
        </div>

        {/* Third Block */}
        <div className="py-3">
          <Line text="Providing Frontend Development services at Crisfood" />
          <Line text="I collaborate remotely with a team of awesome people" />
          <Line text="from different corners of the world." />
        </div>

        {/* Fourth Block */}
        <div className="py-4">
          <Line text="Feel free to explore my projects and get in touch if you'd like to collaborate!" />
          <Line text="Let's create some magic! ✨" />
        </div>
      </div>
    </div>
  );
};

export default About;

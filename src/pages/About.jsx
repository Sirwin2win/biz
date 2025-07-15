import React from "react";
import Team from "../components/Team";
import { useTheme } from "../components/ThemeContext";
// import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BiAdjust } from "react-icons/bi";
import Items from "../components/Items";

const About = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className="container"
      style={{ backgroundColor: theme === "white" ? "black" : "white" }}
    >
      <BiAdjust onClick={toggleTheme} style={{ fontSize: "100px" }} />
      <Team />

      <Items />
    </div>
  );
};

export default About;

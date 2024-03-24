import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //local state to follow the status of the button (clicked or not, because we want the clicked button to be a certain color)
  const [selectedButton, setSelectedButton] = useState("Home");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <ul className="navbar-container">
        {/*if a button is clicked, the class "navbar-button-selected" will be assigned to it so it can have a specific color in the styles.css*/}
        <li
          className={
            selectedButton === "Home"
              ? "navbar-button-selected"
              : "navbar-button"
          }
          onClick={() => handleClick("Home")}
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          className={
            selectedButton === "Career-and-education"
              ? "navbar-button-selected"
              : "navbar-button"
          }
          onClick={() => handleClick("Career-and-education")}
        >
          <Link to="/career-and-education">CAREER & EDUCATION</Link>
        </li>
        <li
          className={
            selectedButton === "Skills"
              ? "navbar-button-selected"
              : "navbar-button"
          }
          onClick={() => handleClick("Skills")}
        >
          <Link to="/skills">
            SKILLS
          </Link>
        </li>
        <li
          className={
            selectedButton === "Hobbies"
              ? "navbar-button-selected"
              : "navbar-button"
          }
          onClick={() => handleClick("Hobbies")}
        >
          <Link to="/hobbies">
            HOBBIES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

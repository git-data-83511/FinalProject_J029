import React, { useState } from "react";
import "../styles/SidebarStyles.css";
import { NavLink } from "react-router-dom";

import { BiHomeCircle } from "react-icons/bi";
import { FaTrain } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { FaBars, FaRegChartBar, FaCommentAlt } from "react-icons/fa";

const UserSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/userhome",
      name: "Dashboard",
      icon: <BiHomeCircle />,
    },

    {
      path: "/booktrain",
      name: "Book Train",
      icon: <FaTrain />,
    },

    {
      path: "/userhistory",
      name: "Past Bookings",
      icon: <FaTrain />,
    },

    

   
  ];

  return (
    <div className="containerCustom">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Home
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default UserSidebar;

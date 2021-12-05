import React, { useState } from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import Menubar from "../Menubar";
import Logo from "../../assets/Images/logo.png";
import Reminder from "../../assets/Images/reminder.png";

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(collapsed ? false : true);
  };
  return (
    <>
      <div className="Navbar-css">
        <div>
          <MenuOutlined onClick={toggleCollapsed} className="menu-btn-css" />
        </div>
        <div className="logo-css">
          <img src={Logo} alt="hello" />
          <span>Beloved Ummah</span>
        </div>
        <div className="reminder-css">
          <img src={Reminder} alt="hello" />
        </div>
      </div>
      <Menubar ToggleCollapsed={toggleCollapsed} Collapsed={collapsed} />
    </>
  );
}

export default Navbar;

import React from "react";
import { Drawer } from "antd";
import "./Menubar.css";
import Trending from "../../assets/Images/trend.png";
import menuBarData from "./menuBarData";
import Item from "antd/lib/list/Item";
import { useHistory } from "react-router";

function Menubar({ ToggleCollapsed, Collapsed }) {
  const history = useHistory();

  const handleTabChange = (path) => {
    ToggleCollapsed();
    history.push(path);
  };
  return (
    <div>
      <Drawer
        className="menubar-css"
        title={<span>Menu</span>}
        placement="left"
        onClose={ToggleCollapsed}
        visible={Collapsed}
      >
        <div className="menu-items-css">
          <div className="menu-sec1-css">
            {React.Children.toArray(
              menuBarData.map((item) => (
                <div className="menu-item-css">
                  <p onClick={() => handleTabChange(item.path)}>
                    {" "}
                    <img
                      className="menu-icons"
                      src={item.icon}
                      alt="trending"
                    />
                    {item.name}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="menu-sec2-css"></div>
          <div className="menu-sec3-css"></div>
        </div>
      </Drawer>
    </div>
  );
}

export default Menubar;

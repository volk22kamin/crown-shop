import React from "react";

import Menu from "../../components/menu/menu.component";
import "./homePage.style.css";

const HomePage = () => {
  console.log("homepage renderd");
  return (
    <div className="homePage">
      <Menu />
    </div>
  );
};

export default HomePage;

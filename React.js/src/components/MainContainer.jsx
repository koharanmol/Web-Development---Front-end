import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MainContainer = props => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <SideBar highlight={props.sidebar}/>
          <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

import React from "react";
import MyLinks from "../../MyLinks/MyLinks";
import { Outlet } from "react-router";

const Host = () => {
  return (
    <div>
      <nav>
        <MyLinks to={"/host/income"}>Incomes </MyLinks>
        <MyLinks to={"/host/reviews"}>reviews</MyLinks>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Host;

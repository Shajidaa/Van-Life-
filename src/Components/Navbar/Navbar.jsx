import { NavLink } from "react-router";
import MyContainer from "../../MyContainer/MyContainer";
import MyLinks from "../../MyLinks/MyLinks";

const Navbar = () => {
  const links = (
    <>
      {" "}
      <MyLinks to={"/host"} className="text-[#4D4D4D]  text-base ml-2 ">
        Host
      </MyLinks>
      <MyLinks
        to={"/about"}
        className="text-[#4D4D4D] font-semibold text-base ml-2 "
      >
        About
      </MyLinks>
      <MyLinks to={"/vans"} className="text-[#4D4D4D]  text-base ml-2 ">
        Vans
      </MyLinks>
    </>
  );
  return (
    <div className="   shadow-sm">
      <MyContainer className="navbar">
        <div className="flex-1">
          <NavLink
            to="/"
            className="cursor-pointer font-bold text-black text-xl"
          >
            #VANLIFE
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;

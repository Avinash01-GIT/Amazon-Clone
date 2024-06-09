import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import CloseIcon from "@mui/icons-material/Close";

const HeaderBottom = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="bg-amazon_light text-white w-full px-4 h-[36px] flex items-center">
      {/* Listitems Starts here */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-2 text-sm"
        >
          <MenuIcon /> All
        </li>
        <li className="headerHover">Today&apos;s Deals</li>
        <li className="headerHover">Customer Services</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Registry</li>
        <li className="headerHover">Sell</li>
      </ul>
      {/* Listitems Ends here */}
      {/* SideNav Starts here */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative ">
            <div className="w-[350px] h-full bg-white border border-black overflow-y-scroll">
              <div className="w-full py-2 px-6 bg-amazon_light text-white flex items-center gap-4">
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign in
                </h3>
              </div>
              <SideNavContent
                title="Trending"
                one="Best Sellers"
                two="New Releases"
                three="Movers and Shakers"
              />
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Prime Music"
                two="Amazon Prime Video"
                three="Audible AudioBooks"
              />
              <SideNavContent
                title="Shop by Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards & Mobile Recharges"
                two="Amazon Launchpad"
                three="Clearnce store"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Sign in"
              />
            </div>
            <span
              onClick={() => setSidebar(false)}
              className="absolute top-1 left-[360px] cursor-pointer w-10 h-10 text-white flex items-center justify-center "
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      )}
      {/* SideNav Ends here */}
    </div>
  );
};

export default HeaderBottom;

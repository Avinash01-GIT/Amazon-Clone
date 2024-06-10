import { logo } from "../../assets/images";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
const Header = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full">
    <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
      {/* Image Starts here */}
      <div className="headerHover">
        <img src={logo} alt="" className="w-24 mt-2" />
      </div>
      {/* Image Ends here */}
      {/* Deliver Starts here  */}
      <div className="headerHover">
        <LocationOnOutlinedIcon />
        <p className="text-sm text-lightText font-light flex flex-col">
          Deliver to
          <span className="text-sm font-semibold -mt-1 text-whiteText">
            Vizag
          </span>
        </p>
      </div>
      {/* Deliver Ends here */}
      {/* Search Starts here */}
      <div className="h-10 rounded-md flex flex-grow relative ">
        <span
          onClick={() => setShowAll(!showAll)}
          className=" text-amazon_blue bg-gray-200 w-14 h-fill border-2 text-sm font-titleFont flex items-center justify-center rounded-bl-md rounded-tl-md hover:bg-gray-300  cursor-pointer duration-300 "
        >
          All <span></span>
          <ArrowDropDownOutlined />
        </span>
        {showAll && (
          <div>
            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
              {allItems.map((item) => (
                <li
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  key={item._id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        <input
          className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          type="text"
          placeholder="Search here..."
        />
        <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#F3A847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md">
          <SearchIcon />
        </span>
      </div>
      {/* Search Ends here */}
      {/* Siginin Starts here */}
      <div className="flex flex-col items-start justify-center headerHover">
        <p className="text-xs text-lightText font-light">Hello, sign in</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText">
          Acconts & Lists{" "}
          <span>
          <ArrowDropDownOutlined />
          </span>
        </p>
      </div>
      {/* Siginin Ends here */}
      {/* Orders Starts here */}
      <div className="flex flex-col items-start justify-center headerHover">
        <p className="text-xs text-lightText font-light">Returns</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText ">
          & Orders
        </p>
      </div>
      {/* Orders Ends here */}
      {/* Cart Starts here */}
      <div className="flex items-start justify-center headerHover relative">
        <ShoppingCartOutlinedIcon />
        <p className="text-xs font-semibold mt-3 text-whiteText">
          Cart{" "}
          <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#F3A847] text-amazon_blue rounded-full flex justify-center items-center">
            0
          </span>
        </p>
      </div>
      {/* Cart Ends here */}
    </div>
    <HeaderBottom />
  </div>
  );
};

export default Header;

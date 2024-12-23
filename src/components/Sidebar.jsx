
import logo from "../assets/logo.png"
import grid from "../assets/grid.svg"
import box from "../assets/box.svg"
import icon from "../assets/icon.svg"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import money from "../assets/money.svg"
import chats from "../assets/chats.svg"
import doc from "../assets/doc.svg"
import calendar from "../assets/calendar.svg"
import question from "../assets/question.svg"
import settings from "../assets/settings.svg"
import benson from "../assets/benson.jpeg"
import signout from "../assets/signout.svg"




const Sidebar = () => {
    return (
      <div className="bg-white w-[270px] flex flex-col shadow-lg  relative min-h-[1163px] text-sm font-normal text-[#344054]">

        <img src={logo} alt="logo" className="mt-[32px] mb-3 mx-auto" />
  
        {/* Navigation Links */}
        <nav className=" cursor-default">
          {/* <a className="block py-2 px-4 rounded hover:bg-gray-200">Dashboard</a> */}
          <a className="w-[256px] py-3 px-4 flex gap-3 items-center mx-auto"><img src={grid} alt="dashboard"/> <p>Dashboard</p></a>
          <a className="w-[256px] py-3 px-4 flex gap-3 items-center mx-auto"> <img src={box} alt="Inventory"/> <p>Inventory</p></a>
          <div>
            <a className="w-[256px] py-3 px-4 flex items-center mx-auto bg-[#E3EAFB] rounded"> 
            <span className="flex gap-3 w-[184px]"><img src={icon} alt="Inventory"/> <p>Procurement</p></span> 
            <FaChevronUp />
            </a>
            <a className="w-[256px] py-3 pr-4 pl-[42px] flex items-center mx-auto mt-1 bg-[#E3EAFB] rounded">Quotes</a>
          </div>
          <a className="w-[256px] py-3 pr-4 pl-[42px] flex items-center mx-auto mt-1">Orders</a>
          <a className="w-[256px] py-3 px-4 flex items-center mx-auto rounded"> 
            <span className="flex gap-3 w-[184px]"><img src={money} alt="Inventory"/> <p>Finance</p></span> 
            <FaChevronDown />
            </a>
            <a className="w-[256px] py-3 px-4 flex items-center mx-auto rounded "> 
            <span className="flex gap-3 w-[181px]"><img src={chats} alt="Inventory"/> <p>Communication</p></span> 
            <span className="bg-blue-500 text-white text-xs py-1 px-2  rounded-full">10</span>
            </a>
            <a className="w-[256px] py-3 px-4 flex items-center mx-auto rounded "> 
            <span className="flex gap-3 w-[181px]"><img src={calendar} alt="Inventory"/> <p>Calendar</p></span> 
            <span className="bg-blue-500 text-white text-xs py-1 px-2  rounded-full">10</span>
            </a>
            <a className="w-[256px] py-3 px-4 flex gap-3 items-center mx-auto"> <img src={doc} alt="Inventory"/> <p>Contracts</p></a>
        </nav>
  
        {/* Footer */}
        <div className="absolute bottom-6 w-[272px] ">
        <div>
        <a className="w-[256px] py-3 px-4 flex gap-3 items-center mx-auto"> <img src={question} alt="Inventory"/> <p>Support</p></a>
        <a className="w-[256px] py-3 px-4 flex gap-3 items-center mx-auto"> <img src={settings} alt="Inventory"/> <p>settings</p></a> 
        </div>
        <div className="w-[256px] py-3 px-4 flex gap-3 items-center mx-auto">
            <img src={benson} className="w-[40px] h-[40px] rounded-full" alt="ben"/>
            <div>
            <p className="text-sm font-medium text-[#101928]">Mark Benson</p>
            <p className="text-sm text-[#475367]">markbenson@core.com</p>
            </div>
            <div><img src={signout} className=""/></div>
        </div>
          
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
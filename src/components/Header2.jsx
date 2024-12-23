
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import chats from "../assets/chats.svg"
import she from "../assets/she.png"

const Header2 = () => {


    return (
      <div className="bg-[white] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto overflow-hidden pl-6 pr-7 rounded-[16px_16px_0px_0px] border-b-[#f0f2f5] border-b border-solid">
        <div className="box-border flex justify-center items-center flex-col gap-2.5 self-stretch grow-0 shrink-0 basis-auto overflow-hidden py-3">
          <div className="box-border flex justify-between items-center flex-row self-stretch grow-0 shrink-0 basis-auto">
            {/* back button */}
            <div className="box-border flex justify-center items-center flex-row gap-2 grow-0 shrink-0 basis-auto">
              {/* <FaChevronLeft className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
              <p className="[font-family:Satoshi] text-sm font-medium text-[#667185] grow-0 shrink-0 basis-auto m-0 p-0">Back</p> */}
            </div>

            {/* { user Links} */}
            <div className="box-border flex justify-start items-center flex-row gap-10 w-[642px] grow-0 shrink-0 basis-auto">
              <div className="box-border flex justify-start items-start flex-col gap-1 grow shrink basis-auto">
                <div className="border shadow-[0px_2px_4px_rgba(0,0,0,0.04),0px_4px_8px_rgba(0,0,0,0.08)] box-border flex justify-start items-center flex-row gap-3 self-stretch grow-0 shrink-0 basis-auto px-3 py-2.5 rounded-md border-solid border-[#e4e7ec]">

                {/* Search box */}
                  <div className="box-border flex justify-start items-center flex-row gap-2 min-w-[426px] grow shrink basis-auto">
                    <IoIosSearch className="w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                    <p className="[font-family:Satoshi] text-sm font-normal text-[#667185] grow-0 shrink-0 basis-auto m-0 p-0">Search here...</p>
                  </div>
                </div>
              </div>

              {/* notification */}
              <div className="box-border flex justify-end items-center flex-row gap-4 grow-0 shrink-0 basis-auto">
                <FaRegBell className="w-[31px] h-8 text-[#667185] flex grow-0 shrink-0 basis-auto box-border" />
                <img src={chats} className="w-[31px] h-8 text-[#667185] flex grow-0 shrink-0 basis-auto box-border" />
                {/* user Icon */}
                <div className="box-border flex justify-end items-center flex-row gap-2 grow-0 shrink-0 basis-auto">
                  <img src={she} className="h-8 max-w-[initial] object-cover w-8 box-border block grow-0 shrink-0 basis-auto rounded-[200px] border-[1.5px] border-solid border-[white]" />
                  <FaChevronDown className="w-[18px] h-[18px] text-[#667185] flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header2;
  
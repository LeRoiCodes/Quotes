// import React from 'react'
import { useEffect } from "react";
import success from "../../assets/success.svg"
import cross from "../../assets/cross.png"
import { useNavigate } from "react-router-dom";


const Success = ({onclose}) => {
    const navigate =useNavigate()

    useEffect(() => {
            // Redirect to another page after 3 seconds
            const timer = setTimeout(() => {
            //   setIsSuccess()
              onclose()
              navigate("/")
            }, 3000);
        
            return () => clearTimeout(timer); // Cleanup the timer on component unmount
          }, []);

  return (
    <div className=" fixed inset-0 z-50 bg-white rounded box-border flex justify-start items-start flex-row gap-3 overflow-hidden px-4 py-3 border border-[#e4e7ec] border-solid w-[390px] h-[50px] m-auto">
      <img src={success} className="w-6 h-6 flex grow-0 shrink-0 basis-auto box-border" />
      <p className="[font-family:Satoshi] text-sm font-bold text-left text-[#101928] grow shrink basis-auto m-0 p-0">RFQ ID sent successfully!</p>
      <img src={cross} alt="" className="h-6 max-w-[initial] w-[33px] block self-stretch grow-0 shrink-0 basis-auto box-border" />
    </div>
  )
}

export default Success
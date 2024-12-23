// import React from 'react'
import { useEffect } from "react";
import indicator from "../../assets/indicator.png"

const SendQuote = ({onclose, setIsSuccess}) => {

    useEffect(() => {
        // Redirect to another page after 3 seconds
        const timer = setTimeout(() => {
            setIsSuccess()
          onclose()
        }, 3000);
    
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }, []);

  return (
    <div className=" fixed inset-0 z-50  bg-white box-border flex justify-center items-center flex-col gap-2 w-[349px] h-[194px] m-auto p-2 border rounded-2xl">
      <div className="box-border flex justify-start items-center flex-col w-12 h-12 grow-0 shrink-0 basis-auto">
        <div className="flex justify-center items-stretch flex-col w-9 h-12 box-border">
          <img src={indicator} alt="" className="h-9 max-w-[initial] block grow-0 shrink-0 basis-auto" />
        </div>
      </div>
      <p className="[font-family:Satoshi] text-sm font-medium text-[black] grow-0 shrink-0 basis-auto m-0 p-0">Sending Quote...</p>
    </div>
  )
}

export default SendQuote
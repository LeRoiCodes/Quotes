// import React from 'react'

import ItemsBox from "./ItemsBox"

const Form = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto">
      <div className="box-border flex justify-start items-start flex-row gap-[18px] self-stretch grow-0 shrink-0 basis-auto">
        {/* input rfq box */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="rfq" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">RFQ No</label>
            <input type="text" placeholder="RFQ-10234" className="border bg-[#f0f2f5] box-border flex justify-start items-center flex-row gap-3 h-10 self-stretch grow-0 shrink-0 basis-auto overflow-hidden px-3 py-2 rounded-md border-solid border-[#d0d5dd]" />                
        </div>
        {/* equipment input */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="equipment" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Title</label>
            <input type="text" placeholder="Request for equipment" className="border bg-[#f0f2f5] box-border flex justify-start items-center flex-row gap-3 h-10 self-stretch grow-0 shrink-0 basis-auto overflow-hidden px-3 py-2 rounded-md border-solid border-[#d0d5dd]" />                
        </div>
      </div>
      <div className="box-border flex justify-start items-start flex-row gap-[18px] self-stretch grow-0 shrink-0 basis-auto">
        {/* Department input */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="department" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Department</label>
            <input type="text" placeholder="Maternity" className="border bg-[#f0f2f5] box-border flex justify-start items-center flex-row gap-3 h-10 self-stretch grow-0 shrink-0 basis-auto overflow-hidden px-3 py-2 rounded-md border-solid border-[#d0d5dd] w-[516px]" />                
        </div>
        {/* Delivery time */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="department" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Expected delivery date</label>
            <div className="relative w-[516px]">
                {/* Calendar Icon */}
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7h12v9H4V7z" clipRule="evenodd"/>
                    </svg>
                </span>
                <input type="date" placeholder="04/04/2024"  className="appearance-none block w-full bg-[#f0f2f5] pl-10 border text-sm text-gray-700 placeholder-gray-400 h-10 overflow-hidden px-3 py-2 rounded-md border-solid border-[#d0d5dd]" />
            </div>
            <p className="[font-family:Satoshi] text-xs font-medium tracking-[-0.06px] text-left text-[#667185] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">
                Calculated based on lead time and issue date
            </p>               
        </div>
      </div>
      <ItemsBox />
    </div>
  )
}

export default Form
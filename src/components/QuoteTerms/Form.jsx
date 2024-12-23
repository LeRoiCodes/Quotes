// import React from 'react'

import { FaChevronDown } from "react-icons/fa6"
import Upload from "./upload"

// import ItemsBox from "./ItemsBox"

const Form = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto">
      <div className="box-border flex justify-start items-start flex-row gap-[18px] self-stretch grow-0 shrink-0 basis-auto">
        {/* payment terms input */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="rfq" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Payment Terms</label>
            <div className="border box-border flex justify-between items-center flex-row gap-3 h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] w-full">
                <select className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none w-[95%]">
                    <option className="[font-family:Satoshi] text-sm font-normal text-[#98a2b3] grow-0 shrink-0 basis-auto m-0 p-0">{"Net 30"}</option>
                </select>
                <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
            </div>
        </div>
        {/* Delivery schedule input */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="rfq" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Delivery Schedule</label>
            <div className="border box-border flex justify-between items-center flex-row gap-3 h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] w-full">
                <select className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none w-[95%]">
                    <option className="[font-family:Satoshi] text-sm font-normal text-[#98a2b3] grow-0 shrink-0 basis-auto m-0 p-0">{"Immediate delivery"}</option>
                </select>
                <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
            </div>
        </div>
      </div>
      <div className="box-border flex justify-start items-start flex-row gap-[18px] self-stretch grow-0 shrink-0 basis-auto">
        {/* Shipping input */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto max-w-[480px]">
            <label htmlFor="rfq" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Shipping Method</label>
            <div className="border box-border flex justify-between items-center flex-row gap-3 h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] w-full">
                <select className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none w-[95%]">
                    <option className="[font-family:Satoshi] text-sm font-normal text-[#98a2b3] grow-0 shrink-0 basis-auto m-0 p-0">{"Courier Services"}</option>
                </select>
                <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
            </div>
        </div>
        {/* Delivery time */}
        <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
            <label htmlFor="rfq" className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Lead Time</label>
            <div className="border box-border flex justify-between items-center flex-row gap-3 h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] w-full">
                <select className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none w-[95%]">
                    <option className="[font-family:Satoshi] text-sm font-normal text-[#98a2b3] grow-0 shrink-0 basis-auto m-0 p-0">{"10"}</option>
                </select>
                <div className="rounded bg-[#f7f9fc] box-border flex justify-start items-center flex-row gap-1 grow-0 shrink-0 basis-auto px-2 py-1">
                    <p className="[font-family:Satoshi] text-xs font-normal text-[#667185] grow-0 shrink-0 basis-auto m-0 p-0">Days</p>
                    <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
                </div>
                {/* <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" /> */}
            </div>
        </div>
      </div>
      <div className="box-border flex justify-start items-start flex-col gap-4 self-stretch grow-0 shrink-0 basis-auto pt-4 border-t-[#e7e9ee] border-t border-solid">
        <div className="box-border flex justify-start items-start flex-col gap-2 grow-0 shrink-0 basis-auto">
            <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
                <div className="box-border flex justify-center items-start flex-col gap-2 self-stretch grow-0 shrink-0 basis-auto">
                    <p className="[font-family:Satoshi] text-base font-bold text-[#1d2739] grow-0 shrink-0 basis-auto m-0 p-0">Attachments</p>
                    <p className="[font-family:Satoshi] text-sm font-normal text-left text-[#98a2b3] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Attach all necessary files or documents</p>
                </div>
            </div>
          </div>
            {/* <NoteSection /> */}
            <Upload />
            
        </div>
    </div>
  )
}

export default Form
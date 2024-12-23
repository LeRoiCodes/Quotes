// import React from 'react'

import Table from "./table"
import Total from "./Total"
import signDoc from "../../assets/sign-doc.svg"
import { FaChevronDown } from "react-icons/fa6"

const ProductContainer = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto">
        {/* title */}
        <div className="border shadow-[0px_4px_4px_rgba(0,0,0,0.04)] bg-[white] box-border flex justify-start items-center flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto overflow-hidden rounded-[10px] border-solid border-[#e4e7ec]">
            <div className="box-border flex justify-start items-start flex-col gap-4 self-stretch grow-0 shrink-0 basis-auto pb-6">
            <div className=" bg-[white] box-border flex justify-center items-start flex-col gap-8 self-stretch grow-0 shrink-0 basis-auto px-8 py-6">

        {/* title */}
        <h2 className="h-6 min-w-[778px] [font-family:Satoshi] text-xl font-bold tracking-[-0.40px] text-left leading-6 box-border grow shrink basis-auto pl-0 border-[none] text-[#1d2739]" >{"Item(s)"}</h2>
      </div>

                <div className="box-border flex justify-center items-end flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto px-4">
                    <div className="border box-border flex justify-start items-start flex-row self-stretch grow-0 shrink-0 basis-auto overflow-hidden rounded-[10px] border-solid border-[#e4e7ec]">
                        <div className="border box-border flex justify-start items-start flex-row w-[1067px]  self-stretch grow-0 shrink-0 basis-auto overflow-hidden rounded-[10px] border-solid border-[#e4e7ec]">
                        <Table />
                        </div>
                    </div>
                    <Total />
                </div>
            </div>
        </div>

      {/* terms and condition */}
      <div className="border box-border flex justify-start items-start flex-col self-stretch grow-0 shrink-0 basis-auto p-6 rounded-lg border-solid border-[#d0d5dd]">
        <div className="box-border flex justify-between items-center flex-row self-stretch grow-0 shrink-0 basis-auto">
            <div className="box-border flex justify-start items-start flex-row gap-3 w-[263px] grow-0 shrink-0 basis-auto">
                <img src={signDoc} className="w-8 h-8 text-[#344054] flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                <div className="box-border flex justify-center items-start flex-col gap-2 grow shrink basis-auto">
                    <p className="[font-family:Satoshi] text-xl font-bold tracking-[-0.40px] text-left leading-6 text-[#1d2739] w-[219px] h-5 grow-0 shrink-0 basis-auto box-border m-0 p-0">
                        Terms and Attachments
                    </p>
                    <p className="[font-family:Satoshi] text-sm font-normal text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Review payment and delivery terms</p>
                </div>
            </div>
            <FaChevronDown className="w-7 h-8 text-[#98a2b3] flex grow-0 shrink-0 basis-auto" />
        </div>
     </div>
    </div>
  )
}

export default ProductContainer
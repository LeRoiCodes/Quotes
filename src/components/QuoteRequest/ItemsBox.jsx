// import React from 'react'

import NoteSection from "./NoteSection"
import Table from "./Table"

const ItemsBox = () => {
  return (
    <div className="box-border flex justify-center items-center flex-col gap-8 self-stretch grow-0 shrink-0 basis-auto">
      <div className="box-border flex justify-start items-start flex-col gap-8 self-stretch grow-0 shrink-0 basis-auto">
        <div className="box-border flex justify-start items-start flex-col gap-4 self-stretch grow-0 shrink-0 basis-auto">
            <div className="box-border flex justify-start items-start flex-col gap-4 self-stretch grow-0 shrink-0 basis-auto">
                <div className="h-px self-stretch grow-0 shrink-0 basis-auto box-border border-t-[#e9e9e9] border-t border-solid" />
                <div className="box-border flex justify-start items-center flex-row gap-2 min-w-[1051px] self-stretch grow-0 shrink-0 basis-auto">
                    <p className="[font-family:Satoshi] text-base font-bold text-[#1d2739] grow-0 shrink-0 basis-auto m-0 p-0">Add Items</p>
                </div>
            </div>
            <Table />
        </div>
        {/* <TotalSummaryBox />  */}
        <div className="box-border flex justify-start items-start flex-col gap-4 self-stretch grow-0 shrink-0 basis-auto pt-4 border-t-[#e7e9ee] border-t border-solid">
            <div className="box-border flex justify-end items-center flex-row gap-4 w-[1051px] self-stretch grow-0 shrink-0 basis-auto">
                <p className="[font-family:Satoshi] text-base font-normal text-left text-[#475367] w-[118px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Sub Total</p>
                <p className="[font-family:Satoshi] text-base font-normal text-left text-[#475367] w-[179px] grow-0 shrink-0 basis-auto box-border m-0 p-0">$1200.00</p>
            </div>
            <NoteSection />
        </div>
      </div>
      <div className="h-px self-stretch grow-0 shrink-0 basis-auto box-border border-t-[#e9e9e9] border-t border-solid" />
    </div>
  )
}

export default ItemsBox
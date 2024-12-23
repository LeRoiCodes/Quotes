// import React from 'react'

const Total = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-4 self-stretch grow-0 shrink-0 basis-auto pt-4">
            <div className="box-border flex justify-end items-center flex-row gap-4 w-[1051px] self-stretch grow-0 shrink-0 basis-auto">
                <p className="[font-family:Satoshi] text-base font-normal text-left text-[#475367] w-[118px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Sub Total</p>
                <p className="[font-family:Satoshi] text-base font-normal text-left text-[#475367] w-[179px] grow-0 shrink-0 basis-auto box-border m-0 p-0">$8000.00</p>
            </div>
            <div className="box-border flex justify-end items-center flex-row gap-4 w-[1051px] self-stretch grow-0 shrink-0 basis-auto">
                <p className="[font-family:Satoshi] text-base font-normal text-left text-[#475367] w-[118px] grow-0 shrink-0 basis-auto box-border m-0 p-0 ">Total</p>
                <p className="[font-family:Satoshi] text-base font-normal text-left text-[#475367] w-[179px] grow-0 shrink-0 basis-auto box-border m-0 p-0">$8750.00</p>
            </div>
            {/* <NoteSection /> */}
        </div>
  )
}

export default Total
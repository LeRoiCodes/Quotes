// import React from 'react'

import FormBox from "./FormBox"

const RequestFormSection = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-8 grow shrink basis-auto">
      {/* Form title */}
      <div className="box-border flex justify-start items-start flex-col gap-2 self-stretch grow-0 shrink-0 basis-auto">
        <p className="[font-family:Satoshi] text-2xl font-bold tracking-[-0.48px] text-left leading-[29px] text-[#1a1a21] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Request for Quote</p>
        <p className="[font-family:Satoshi] text-base font-normal text-left text-[#98a2b3] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Fill out these details to send the RFQ</p>
      </div>
      <FormBox />
    </div>
  )
}

export default RequestFormSection
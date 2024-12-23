// import React from 'react'

import { useNavigate } from "react-router-dom"
import Form from "./Form"

const FormBox = () => {
  const navigate = useNavigate()
  return (
    <div className="box-border flex justify-start items-center flex-col gap-10 self-stretch grow-0 shrink-0 basis-auto">
      <Form />
      <div className="box-border flex justify-end items-start flex-row gap-6 min-w-[1051px] self-stretch grow-0 shrink-0 basis-auto">
        <div className="border bg-[white] box-border flex justify-center items-center flex-col gap-2.5 w-[68px] grow-0 shrink-0 basis-auto overflow-hidden px-4 py-2.5 rounded-lg border-solid border-[#e4e7ec]">
          <p className="[font-family:Satoshi] text-sm font-bold text-[#475367] grow-0 shrink-0 basis-auto m-0 p-0">Cancel</p>
        </div>
        <div className="bg-[white] box-border flex justify-center items-center flex-col gap-2.5 w-[188px] grow-0 shrink-0 basis-auto overflow-hidden px-4 py-2.5 rounded-lg border-[1.5px] border-solid border-[#175cff]">
          <p className="[font-family:Satoshi] text-sm font-bold text-[#175cff] grow-0 shrink-0 basis-auto m-0 p-0">Save as draft</p>
        </div>
        <div className="bg-[#175cff] box-border flex justify-center items-center flex-col gap-2.5 w-[188px] grow-0 shrink-0 basis-auto overflow-hidden px-4 py-2.5 rounded-lg" onClick={() => navigate("/review")}>
          <p className="[font-family:Satoshi] text-sm font-bold text-[white] grow-0 shrink-0 basis-auto m-0 p-0">Continue</p>
        </div>
      </div>
    </div>
  )
}

export default FormBox
// import React from 'react'
import line from "../../assets/line.png"

const TableBody = ({text}) => {
  return (
    <div>
        <div className=" flex justify-start items-center h-[53px] w-[130px] m-0 p-0">
                      <div className=" flex justify-start items-center flex-row gap-3">
                        <div className="box-border flex justify-start items-start py-1">
                          <p className="[font-family:Satoshi] text-sm font-normal text-[#101928]">{text}</p>
                        </div>
                      </div>
                    </div>
                    {/* <img src={line} alt="" className="h-px block self-stretch grow-0 shrink-0 basis-auto box-border" /> */}
    </div>
  )
}

export default TableBody
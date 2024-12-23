// import React from 'react'
import kit from "../../assets/kit.png"
// import line from "../../assets/line.png"

import TableBody from "./TableBody"

// eslint-disable-next-line react/prop-types
export const TableRow = ({item, variant, quantity, price, amount}) => {
  return (
    <tr className="flex gap-4 border-b">
      <td className="w-[232px]">
    <div className=" flex justify-start items-center flex-row gap-3 h-[53px] pl-7 ">
      <div className=" flex justify-start items-center flex-row gap-3">
        <div className="h-5 w-5 border box-border grow-0 shrink-0 basis-auto rounded-[3px] ">
          <input type="checkbox" defaultChecked={false} className="h-full w-full opacity-0 cursor-pointer m-0 peer" />
        </div>
        <img src={kit} className="border h-10 max-w-[initial] object-cover w-10 box-border block grow-0 shrink-0 basis-auto rounded-lg border-solid border-[#e4e7ec]"/>
        <div className="box-border flex justify-start items-start flex-col p-1">
          <p className="[font-family:Satoshi] text-xs font-medium text-[#101928]">{item}</p>
          <p className="[font-family:Satoshi] text-sm font-normal text-left text-[#475367] m-0 p-0">#28373</p>
        </div>
      </div>
    </div>
    {/* <img src={line} alt="" className="h-px block  box-border" /> */}
    </td>
    <td>
      <TableBody text={variant}/>
    </td>
    <td>
    <TableBody text={quantity}/>
    </td>
    <td>
    <TableBody text={price}/>
    </td>
    <td>
    <TableBody text={amount}/>
    {/* <TableHead text={"text"} /> */}
    </td>
    <td>
    <TableBody text={"24-08-07"}/>
    </td>
    </tr>
  )
}

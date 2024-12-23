// import React from 'react'
import { FaChevronDown } from "react-icons/fa6"
import dollar from "../../assets/dollar.svg"
import bin from "../../assets/bin.svg"

const TableRow = ({text}) => {
  return (
    <tr className=" flex gap-2">
                <td className="border bg-[#f0f2f5] box-border flex justify-start items-center flex-row gap-3 w-[232px] h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] mt-1">
                    <select className=" bg-[#f0f2f5] box-border flex justify-start items-center flex-row gap-2 min-w-[176px] focus:outline-none [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none">
                        <option className="[font-family:Satoshi] text-sm font-normal text-[#98a2b3] grow-0 shrink-0 basis-auto m-0 p-0">{text}</option>
                    </select>
                    <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
                </td>
                <td className="border  box-border flex justify-start items-center flex-row gap-3 w-[140px] h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] mt-1">
                    <select className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none min-w-[90px] [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none">
                        <option className="[font-family:Satoshi] text-sm font-normal text-[#98a2b3] grow-0 shrink-0 basis-auto m-0 p-0">Blue</option>
                    </select>
                    <FaChevronDown className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
                </td>
                <td className="border box-border flex justify-start items-center flex-row w-[140px] h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] mt-1">
                    <input className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none min-w-[80px] [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none" placeholder="100" />
                    <p className="rounded bg-[#f7f9fc] [font-family:Satoshi] text-xs font-normal text-center text-[#667185] cursor-pointer h-6 min-w-[40px] w-[40px] flex items-center justify-center box-border border-[none]">Pack</p>
                </td>
                <td className="border box-border flex justify-start items-center flex-row w-[140px] h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] mt-1">
                <img src={dollar} className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
                    <input className=" box-border flex justify-start items-center flex-row gap-2 focus:outline-none min-w-[80px] [font-family:Satoshi] text-[#98a2b3] text-sm font-normal appearance-none" placeholder="12.0" />    
                </td>
                <td className="border box-border flex justify-start items-center flex-row w-[150px] h-9 overflow-hidden px-3 py-2 rounded-md border-[#d0d5dd] relative mt-1">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7h12v9H4V7z" clipRule="evenodd"/>
                    </svg>
                </span>
                <input type="date" placeholder="04/04/2024"  className="appearance-none text-sm text-gray-700 pl-5 placeholder-[#98a2b3] h-10 overflow-hidden px-3 py-2 rounded-md" />    
                </td>
                <td className=" flex justify-start items-center flex-row w-[150px] h-9 overflow-hidden px-3 py-2 mt-1">
                {/* <img src={dollar} className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" /> */}
                    <p className=" box-border flex justify-start items-center flex-row gap-2  [font-family:Satoshi] text-[#344054] text-sm font-normal" >$12000.00</p>    
                </td>
                <td className=" flex justify-start items-center flex-row h-9 overflow-hidden px-3 py-2 mt-1">
                <img src={bin} className="w-5 h-5 text-[#667185] flex grow-0 shrink-0 basis-auto" />
                    {/* <p className=" box-border flex justify-start items-center flex-row gap-2  [font-family:Satoshi] text-[#344054] text-sm font-normal" >$12000.00</p>     */}
                </td>
            </tr>
  )
}

export default TableRow
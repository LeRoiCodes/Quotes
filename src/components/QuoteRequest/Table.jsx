// import React from 'react'

import TableRow from "./TableRow"



const Table = () => {
  return (
    <table className="table-auto w-full">
          <thead className="bg-[#f7f9fc] box-border flex justify-start items-start flex-row gap-4 px-2 py-1 w-[1051px]">
            <tr>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] w-[232px] m-0 p-0">Items</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] w-[150px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Variants</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 w-[150px]">Quantity</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 w-[150px]">Price</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 w-[150px]">Expected Delivery Date</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 pl-2 w-[150px]">Amount</th>
              
            </tr>
          </thead>
          <tbody className="">
            <TableRow text={"Oxygen Concentrator"} />
            <TableRow text={"Mechanical Ventilator"} />
            <TableRow text={"Patient Monitor"} />
            <TableRow text={"Mechanical Ventilator"} />
          </tbody>
        </table>
  )
}

export default Table
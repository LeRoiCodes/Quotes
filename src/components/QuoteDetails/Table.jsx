// import React from 'react'
// import kit from "../../assets/kit.png"
// import line from "../../assets/line.png"
// import TableBody from "./TableBody"
// import { TableHead } from "./TableHead"
import { TableRow } from "./TableRow"

const Table = () => {
  return (
    <table className="table-auto max-w-[1067px]">
          <thead className="bg-[#f7f9fc] box-border flex justify-start items-start flex-row gap-4 px-2 py-1 w-[1067px]">
            <tr>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] w-[232px] m-0 p-0">
                                    {/* <CheckboxItem /> */}
                                    <div className=" box-border flex justify-start items-center flex-row gap-3 self-stretch grow-0 shrink-0 basis-auto px-6 py-3">
                                        <div className="h-5 w-5 border relative box-border grow-0 shrink-0 basis-auto rounded-[3px] border-solid border-[gray]">
                                            <input type="checkbox" defaultChecked={false} className="h-full w-full absolute opacity-0 cursor-pointer m-0 peer" />
                                            {/* <img className="w-5 h-5 max-w-[initial] hidden -ml-px -mt-px content-[url('blob:https://app.kombai.com/2...6-be44-4377-8112-849fedafe1e5')] peer-checked:block" /> */}
                                        </div>
                                        <p className="[font-family:Satoshi] text-xs font-normal text-left text-[#344054] grow shrink basis-auto m-0 p-0">Items</p>
                                    </div>
                                    <img src="/assets/image_36b616b5.png" alt="" className="h-px max-w-[initial] block self-stretch grow-0 shrink-0 basis-auto box-border" />
                                {/* </div> */}
              </th>
              
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] w-[150px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Variants</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 w-[150px]">Quantity</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 w-[150px]">Price</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 pl-2 w-[150px]">Amount</th>
              <th className="[font-family:Satoshi] text-sm font-medium text-left text-[#667185] grow-0 shrink-0 basis-auto box-border m-0 p-0 w-[150px]">Expected Delivery Date</th>
              
            </tr>
          </thead>
          <tbody className="max-w-[1067px]">
          <TableRow item={"Oxygen contration"} variant={"Blue"} price={"200"} amount={"2000"} quantity={"100 pieces"} />
          <TableRow item={"Oxygen contration"} variant={"Blue"} price={"200"} amount={"2000"} quantity={"100 pieces"}/>
          <TableRow item={"Oxygen contration"} variant={"Blue"} price={"200"} amount={"2000"} quantity={"100 pieces"}/>
          <TableRow item={"Oxygen contration"} variant={"Blue"} price={"200"} amount={"2000"} quantity={"100 pieces"}/>

          </tbody>
    </table>
  )
}

export default Table
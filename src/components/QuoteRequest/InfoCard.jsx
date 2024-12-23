// import React from 'react'

export const InfoCard = ({number, title, info, tab}) => {

    const isOne = number === tab
  return (
    <div className="box-border flex justify-start items-start flex-row gap-4 grow shrink basis-auto">
        <div className={`w-8 h-8 flex justify-center items-center px-[11px] border rounded-full ${isOne ? 'bg-[#175CFF]' : ''}`}>
            <p className={`[font-family:Satoshi] text-lg  grow-0 shrink-0 basis-auto m-0 p-0 ${isOne ? 'text-white' : 'text-[#101928]'}`}>{number}</p>
        </div>
        <div className="box-border flex justify-center items-start flex-col gap-1 grow shrink basis-auto">
            <p className={`font-family:Satoshi] text-base font-bold text-left m-0 p-0 ${isOne ? 'text-[#101928] font-bold' : 'text-[#101928] font-normal'}`}>{title}</p>
            <p className={`[font-family:Satoshi] text-xs font-normal text-left  m-0 p-0 ${isOne ? 'text-[#101928]' : 'text-[#101928]'}`}>{info}</p>
        </div>
    </div>
  )
}

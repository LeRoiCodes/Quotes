// import React from 'react'

const NoteSection = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-2 w-[472px] h-[155px] grow-0 shrink-0 basis-auto">
      <div className="box-border flex justify-start items-start flex-col gap-1 self-stretch grow shrink basis-auto">
        <p className="[font-family:Satoshi] text-sm font-bold text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Note</p>
        <textarea className="border bg-[white] box-border flex justify-start items-start flex-row gap-3 self-stretch grow shrink basis-auto overflow-hidden p-4 rounded-md border-solid border-[#d0d5dd]" placeholder="Enter note here" />
      </div>
      <p className="[font-family:Satoshi] text-xs font-medium tracking-[-0.06px] text-right text-[#667185] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">0/200</p>
    </div>
  )
}

export default NoteSection
// import React from 'react'

const Confirm = ({onclose, setIsSending}) => {

    const onConfirm = () => {
        setIsSending()
        onclose()

    }
  return (
    <div className=" fixed inset-0 z-50  rounded bg-[white] border box-border flex justify-start items-start flex-row gap-4 overflow-hidden px-6 py-8 w-[568px] h-[220px] m-auto ">
      <div className="box-border flex justify-center items-start flex-col gap-8">
        <div className="box-border flex justify-start items-start flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto">
            <p className="[font-family:Satoshi] text-xl font-bold tracking-[-0.40px] text-left leading-6 text-[#101928] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Confirmation</p>
            <p className="[font-family:Satoshi] text-sm font-medium text-left leading-[20.5px] text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">
                You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
            </p>
        </div>
        <div className="box-border flex justify-end items-center flex-row flex-wrap gap-4 min-w-[520px] self-stretch grow-0 shrink-0 basis-auto">
            <div className="border bg-[white] box-border flex justify-center items-start flex-col gap-2.5 grow-0 shrink-0 basis-auto overflow-hidden px-4 py-2 rounded-lg border-solid border-[#d0d5dd]" onClick={onclose}>
                <p className="[font-family:Satoshi] text-sm font-bold text-[#344054] grow-0 shrink-0 basis-auto m-0 p-0">Cancel</p>
            </div>
            <div className="bg-[#175cff] box-border flex justify-center items-center flex-col gap-2.5 grow-0 shrink-0 basis-auto overflow-hidden px-4 py-2 rounded-lg" onClick={onConfirm}>
                <p className="[font-family:Satoshi] text-sm font-bold text-[white] grow-0 shrink-0 basis-auto m-0 p-0">Continue</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
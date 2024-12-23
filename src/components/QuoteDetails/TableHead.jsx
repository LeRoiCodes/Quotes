

export const TableHead = ({text}) => {
  return (
    <div className="box-border flex justify-start items-center flex-col w-[150px] grow-0 shrink-0 basis-auto">

                    <div className="box-border flex justify-start items-start flex-col self-stretch grow-0 shrink-0 basis-auto">
                        {/* <CheckboxItem /> */}
                        <div className=" box-border flex justify-start items-center flex-row gap-3 self-stretch grow-0 shrink-0 basis-auto px-6 py-3">
                            <p className="[font-family:Satoshi] text-xs font-normal text-left text-[#344054] grow shrink basis-auto m-0 p-0">{text}</p>
                        </div>
                    </div>
                </div>
  )
}

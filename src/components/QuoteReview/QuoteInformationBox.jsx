import ProfileCard from "../QuoteDetails/ProfileCard"
import dot from "../../assets/dot.png"
// import house from "../../assets/house.svg"
import pencil from "../../assets/pencil.svg"



const QuoteInformationBox = () => {
  return (
    <div className="border bg-[white] box-border flex justify-center items-start flex-col gap-8 self-stretch grow-0 shrink-0 basis-auto px-8 py-6 rounded-lg border-solid border-[#e4e7ec]">
      <div className="box-border flex justify-start items-start flex-row gap-8 self-stretch grow-0 shrink-0 basis-auto">
        {/* title */}
        <h2 className="h-6 min-w-[778px] [font-family:Satoshi] text-xl font-bold tracking-[-0.40px] text-left leading-6 box-border grow shrink basis-auto pl-0 border-[none] text-[#1d2739]" >Request Information</h2>
        {/* Date */}
        <img src={pencil} className="w-6 h-6 text-[#98a2b3] flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
      </div>
      {/* Details */}
      <div className="box-border flex justify-between items-start flex-row self-stretch grow-0 shrink-0 basis-auto">
        {/* left div */}
        <div className="box-border flex justify-start items-start flex-col gap-4 w-[559px] grow-0 shrink-0 basis-auto">
            {/* div title */}
            <div className="box-border flex justify-between items-center flex-row self-stretch grow-0 shrink-0 basis-auto overflow-hidden">
                <p className="[font-family:Satoshi] text-base font-medium text-left opacity-[0.64] text-[#555e68] grow shrink basis-auto m-0 p-0">Title</p>
                <p className="[font-family:Satoshi] text-base font-medium text-left text-[#344054] w-[303px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Request for Equipments</p>
            </div>
            {/* request no */}
            <div className="box-border flex justify-between items-center flex-row h-[23px] self-stretch grow-0 shrink-0 basis-auto overflow-hidden">
                <p className="[font-family:Satoshi] text-base font-medium text-left opacity-[0.64] text-[#555e68] grow shrink basis-auto m-0 p-0">RFQ No</p>
                <p className="[font-family:Satoshi] text-base font-medium text-left text-[#344054] w-[303px] grow-0 shrink-0 basis-auto box-border m-0 p-0">RQ #01234</p>
            </div>
            {/* requester */}
            <div className="box-border flex justify-between items-center flex-row w-[559px] grow-0 shrink-0 basis-auto">
                <p className="[font-family:Satoshi] text-base font-medium text-left opacity-[0.64] text-[#555e68] grow shrink basis-auto m-0 p-0">Requestor</p>
                {/* Profile card */}
                <div className="box-border flex justify-start items-center flex-row gap-2 w-[303px] grow-0 shrink-0 basis-auto">
                    <ProfileCard text="JD" />
                    <div className="box-border flex justify-start items-center flex-row gap-2 min-w-[263px] grow shrink basis-auto">
                        <p className="[font-family:Satoshi] text-base font-medium text-[#344054] grow-0 shrink-0 basis-auto m-0 p-0">Jane Doe</p>
                        <img src={dot} alt="" className="h-1.5 max-w-[initial] w-1.5 block grow-0 shrink-0 basis-auto box-border" />
                        <p className="[font-family:Satoshi] text-base font-medium text-left text-[#98a2b3] w-[180px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Head Nurse, Paediatrics</p>
                    </div>
                </div>  
            </div>
            {/* status */}
            <div className="box-border flex justify-between items-center flex-row self-stretch grow-0 shrink-0 basis-auto">
                <p className="[font-family:Satoshi] text-base font-medium text-left opacity-[0.64] text-[#555e68] grow shrink basis-auto m-0 p-0">Status</p>
                <div className="box-border flex justify-start items-center flex-row gap-2 w-[303px] grow-0 shrink-0 basis-auto">
                    <div className="bg-[#ffece5] box-border flex justify-center items-center flex-col gap-2 grow-0 shrink-0 basis-auto px-2 rounded-[50px]">
                        <p className="[font-family:Satoshi] text-xs font-medium tracking-[-0.06px] text-[#f56630] grow-0 shrink-0 basis-auto m-0 p-0">Awaiting</p>
                    </div>
                </div>
            </div>
            {/* department */}
            <div className="box-border flex justify-between items-center flex-row self-stretch grow-0 shrink-0 basis-auto overflow-hidden">
                <p className="[font-family:Satoshi] text-base font-medium opacity-[0.64] text-[#555e68] grow-0 shrink-0 basis-auto m-0 p-0">Department</p>
                <p className="[font-family:Satoshi] text-base font-medium text-left text-[#101928] w-[303px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Maternity</p>
            </div>
        </div>
        {/* right div */}
        {/* <div className="border box-border flex justify-start items-start flex-col gap-2 w-[352px] grow-0 shrink-0 basis-auto p-4 rounded-[10px] border-solid border-[#e4e7ec]">
            <div className="box-border flex justify-start items-center flex-row gap-2 self-stretch grow-0 shrink-0 basis-auto">
                <img src={house} className="w-5 h-5 text-[#98a2b3] flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                <p className="[font-family:Satoshi] text-xs font-normal text-left text-[#475367] grow shrink basis-auto m-0 p-0">Client</p>
            </div>
            <div className="box-border flex justify-start items-center flex-row gap-3 w-[314px] grow-0 shrink-0 basis-auto">
                <ProfileCard text={"W"}/>
                <div className="box-border flex justify-start items-start flex-col grow shrink basis-auto">
                    <p className="[font-family:Satoshi] text-sm font-medium text-left text-[#101928] w-[270px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Westend Hospital</p>
                    <p className="[font-family:Satoshi] text-xs font-normal text-left text-[#475367] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Clear street</p>
                </div>
            </div>
            </div> */}
    </div>
    </div>
  )
}

export default QuoteInformationBox
import Header from "./Header";
import MainLayout from "./QuoteDetails/MainLayout";

const QuoteDetails = () => {
    return (
      <>
      <Header />
      <div className="grow-0 shrink-0 basis-auto mt-8 pl-8 pr-[29px]">
      <div className="box-border flex justify-start items-start flex-col gap-8 w-[1099px]">
      {/* Quote title div */}
        <div className="box-border flex justify-between items-center flex-row self-stretch grow-0 shrink-0 basis-auto">
        {/* Quote title */}
          <div className="box-border flex justify-start items-start flex-col gap-0.5 grow-0 shrink-0 basis-auto">
            <p className="[font-family:Satoshi] text-2xl font-bold tracking-[-0.48px] leading-[29px] text-[black] grow-0 shrink-0 basis-auto m-0 p-0">Quote details</p>
            <p className="[font-family:Satoshi] text-sm font-normal text-[#667185] grow-0 shrink-0 basis-auto m-0 p-0">Created on Wed, 12th June 2022, 08:00am</p>
          </div>
        {/* Quote buttons */}
          <div className="box-border flex justify-end items-center flex-row gap-3 grow-0 shrink-0 basis-auto">
            <div className="bg-[#175cff] box-border flex justify-center items-center flex-col gap-2.5 grow-0 shrink-0 basis-auto overflow-hidden px-4 py-2 rounded-lg">
              <p className="[font-family:Satoshi] text-sm font-bold text-[white] grow-0 shrink-0 basis-auto m-0 p-0">Respond</p>
            </div>
            <div className="bg-[#d42620] box-border flex justify-center items-center flex-col gap-2.5 grow-0 shrink-0 basis-auto overflow-hidden px-3 py-2 rounded-lg">
              <div className="box-border flex justify-center items-center flex-row gap-2 min-w-[69px] grow-0 shrink-0 basis-auto">
                <p className="[font-family:Satoshi] text-sm font-bold text-[white] grow-0 shrink-0 basis-auto m-0 p-0">Reject</p>
              </div>
            </div>
          </div>  
        </div>
        <MainLayout />
      </div>
    </div>
    </>
    );
  };
  
  export default QuoteDetails;
  

import Header2 from "./Header2"
import UserDashboardView from "./QuoteRequest/UserDashboardView"
import RequestTermsSection from "./QuoteTerms/RequestTermsSection"

const QuoteTerms = () => {
  return (
    <>
    <Header2 />
    <div className="box-border flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pt-6 pb-[43px] px-8">
      <div className="box-border flex justify-start items-start flex-col gap-14 grow-0 shrink-0 basis-auto">
        <div className="box-border flex justify-start items-start flex-col gap-8 self-stretch grow-0 shrink-0 basis-auto">
            {/* Page title */}
            <div className="box-border flex justify-start items-start flex-row gap-1 w-[1089px] grow-0 shrink-0 basis-auto">
                <div className="box-border flex justify-center items-center flex-row h-[38px] grow-0 shrink-0 basis-auto">
                    <div className="box-border flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                        <p className="[font-family:Satoshi] text-sm font-medium text-[#175cff] grow-0 shrink-0 basis-auto m-0 p-0">Quotes</p>
                        <p className="[font-family:Satoshi] text-sm font-medium text-center text-[#98a2b3] w-5 h-5 grow-0 shrink-0 basis-auto box-border m-0 p-0">/</p>
                    </div>
                </div>
                <div className="box-border flex justify-center items-center flex-row h-[38px] grow-0 shrink-0 basis-auto">
                    <p className="[font-family:Satoshi] text-sm font-medium text-[#667185] grow-0 shrink-0 basis-auto m-0 p-0">Quote Response</p>
                </div>
            </div>
            {/* <DashboardLayout1 /> */}
            {/* Content */}
            <div className="box-border flex justify-start items-center flex-col gap-8 w-[1099px] grow-0 shrink-0 basis-auto">
                {/* path information */}
                <UserDashboardView tab={"2"} />
                {/* Request for quote */}
                <div className="border bg-[white] box-border flex justify-start items-start flex-row gap-5 self-stretch grow-0 shrink-0 basis-auto pt-8 pb-6 px-6 rounded-[10px] border-solid border-[#e4e7ec]">
                    <RequestTermsSection />
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default QuoteTerms
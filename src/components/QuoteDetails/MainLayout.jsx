import ProductContainer from "./ProductContainer"
import QuoteInformationBox from "./QuoteInformationBox"
// import Table from "./table"


const MainLayout = () => {
  return (
    <div className="box-border flex justify-start items-start flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto">
      <QuoteInformationBox />
      <ProductContainer />
    </div>
  )
}

export default MainLayout
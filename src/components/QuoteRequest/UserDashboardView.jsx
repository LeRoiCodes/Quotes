// import UserCard from "../UserCard";
// import BoxNumber from "../BoxNumber";
// import FlexBoxCounter from "../FlexBoxCounter";

import { InfoCard } from "./InfoCard";

function UserDashboardView({tab}) {
  return (
    <div className="border bg-[white] box-border flex justify-start items-start flex-col gap-2 self-stretch grow-0 shrink-0 basis-auto px-5 py-6 rounded-[10px] border-solid border-[#e4e7ec]">
      <div className="box-border flex justify-start items-start flex-row gap-6 self-stretch grow-0 shrink-0 basis-auto">
        <InfoCard tab={tab}  number={"1"} title={"Request Information"} info={"Provide details about the RFQ"} />
        <InfoCard tab={tab} number={"2"} title={"Terms and Attachments"} info={"Payment and delivery terms"} />
        <InfoCard tab={tab} number={"3"} title={"Review"} info={"Confirm all information provided"} />
      </div>
    </div>
  );
}

export default UserDashboardView;
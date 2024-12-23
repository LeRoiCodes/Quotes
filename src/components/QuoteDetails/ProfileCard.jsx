

const ProfileCard = ({text}) => {
  return (
    <div className="box-border flex justify-center items-stretch flex-col w-8 h-8 grow-0 shrink-0 basis-auto">
        <div className="bg-[#ffece5] box-border flex justify-center items-stretch flex-col h-[35px] grow-0 shrink-0 basis-auto px-[3.5px] rounded-[200px] border-[1.5px] border-solid border-[white]">
            <p className="[font-family:Satoshi] text-sm font-bold text-center text-[#101928] grow-0 shrink-0 basis-auto m-0 p-0">{text}</p>
        </div>
    </div>
  )
}

export default ProfileCard
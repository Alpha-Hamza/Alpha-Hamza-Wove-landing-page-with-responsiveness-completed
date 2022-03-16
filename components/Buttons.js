export default function Buttons() {
  return (
    <div className="2xl:space-x-[80px]  md:space-x-[36px] sm:space-x-[20px] space-x-[10px] lg:space-x-[72px] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] flex justify-center ">
      <button className="cursor-pointer   leading-[20px] font-medium text-[#ffffff]">
        Workshops
      </button>
      <button className="   leading-[20px] font-medium  text-[#A1A1AA]">
        Pair Design
      </button>
      <button className="   leading-[20px] font-medium  text-[#A1A1AA]">
        Group Documentation
      </button>
      <button className="  leading-[20px] font-medium  text-[#A1A1AA]">
        Hanging Out
      </button>
    </div>
  );
}

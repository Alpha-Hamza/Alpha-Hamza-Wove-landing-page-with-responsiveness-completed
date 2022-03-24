export default function Buttons() {
  return (
    <div className=" relative 2xl:space-x-[80px]  md:space-x-[40px] sm:space-x-[25px] space-x-[7px] lg:space-x-[72px] text-[12px] sm:text-[18px] lg:text-[22px] xl:text-[24px]  flex justify-center ">
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

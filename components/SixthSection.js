export default function SixthSection() {
  return (
    <div className="relative mx-auto container flex justify-center lg:mt-[100px] sm:mt-[150px] mt-[72.54px]    ">
      <div className="relative lg:max-w-[80%] sm:max-w-[90%] max-w-[90%]  ">
        <img
          src="./images/cover.png"
          alt=" "
          className="sm:h-[100%] h-[200%] "
        />
        <div className="absolute lg:top-[30%] sm:top-[20%] right-0  ">
          <img
            src="./images/bgcover.png"
            alt=" "
            className="relative opacity-20 sm:w-[50%] w-[0%] mx-auto md:w-[70%] lg:right-[0%] lg:w-[80%]  "
          />
        </div>

        <div className="  absolute sm:left-[0px]  lg:top-[30%]  sm:top-[20%] top-[20%]  lg:w-[50%] md:w-[50%] sm:w-[60%]">
          <h1 className="  xl:mx-[15%]  lg:mx-[10%] sm:mx-[10%] mx-[20%]   xl:text-[36px] lg:text-[30px] sm:text-[30px] text-[24px]  text-[#ffffff] tracking-[-0.01em] top-[119px] font-semibold  ">
            Stay in the loop
          </h1>
          <p className=" xl:mx-[15%]  lg:mx-[10%] sm:mx-[10%] mx-[20%] xl:text-[16px]  lg:text-[14px] text-[14px]   text-[#A3A3A3]  font-normal ">
            We are giving selected teams free access to Wove during our private
            beta
          </p>
          <div className="  relative  xl:mx-[15%] lg:mx-[10%] mx-[7%] bg-[#262626] xl:w-[80%] lg:w-[100%]  lg:h-[60px] md:h-[48px] h-[48px] md:w-[100%]  top-[25px] rounded-[56px] ">
            <input
              type={"text"}
              placeholder="Email Address"
              className="  relative  lg:h-[60px] md:h-[48px] h-[48px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[14px]   bg-[#262626] rounded-[56px] placeholder:px-[20px]"
            />

            <button className="absolute right-[6px] bg-[#0585F2] w-[40%] lg:h-[48px] h-[40px]  rounded-[56px] text-center lg:top-[6px] top-[4px]  text-[#ffffff] lg:text-[16px] md:text-[14px] text-[12px] font-medium tracking-tight    ">
              Request Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

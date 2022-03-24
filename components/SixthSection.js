export default function SixthSection() {
  return (
    <div className="relative mx-auto container flex justify-center lg:mt-[100px] md:mt-[150px] sm:mt-[42.54px] mt-[72.54px]    ">
      <div className="relative lg:max-w-[80%] sm:max-w-[90%] max-w-[90%]  ">
        <img
          src="./images/cover.png"
          alt=" "
          className="sm:h-[100%] h-[170%] "
        />
        <div className="absolute 2xl:top-[25%] lg:top-[30%] md:top-[20%] sm:top-[25%] right-0  ">
          <img
            src="./images/bgcover.png"
            alt=" "
            className="relative opacity-20 w-[0%] sm:w-[55%] 2xl:right-[15%]  mx-auto md:w-[65%] md:right-[0%] sm:right-[-18%]  lg:w-[70%] xl:w-[80%] 2xl:w-[100%]  "
          />
        </div>

        <div className="  absolute left-[0px]  lg:top-[30%]  sm:top-[20%] top-[30%]  lg:w-[50%] md:w-[50%] sm:w-[60%] w-full">
          <h1 className="  xl:mx-[15%]  lg:mx-[10%] sm:mx-[10%] mx-[5%]   xl:text-[36px] lg:text-[30px] sm:text-[30px] text-[24px]  text-[#ffffff] tracking-[-0.01em] top-[119px] font-semibold  ">
            Stay in the loop
          </h1>
          <p className=" xl:mx-[15%]  lg:mx-[10%] sm:mx-[10%] mx-[5%] xl:text-[16px]  lg:text-[14px] text-[14px]   text-[#A3A3A3]  font-normal ">
            We are giving selected teams free <br className="sm:hidden block" />{" "}
            access to Wove during our private <br className="sm:hidden block" />
            beta
          </p>
          <div className="  relative  xl:mx-[15%] lg:mx-[10%] sm:mx-[10%] mx-[5%] bg-[#262626] xl:w-[80%] lg:w-[95%]  xl:h-[60px] lg:h-[55px] md:h-[48px]  h-[40px] md:w-[100%] w-[80%]  md:top-[25px] top-[12px] rounded-[56px] ">
            <input
              type={"text"}
              placeholder="Email Address"
              className="  relative w-full  xl:h-[60px] lg:h-[55px] md:h-[48px]  h-[40px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[14px]   bg-[#262626] rounded-[56px] placeholder:px-[20px]"
            />

            <button className="absolute right-[6px] bg-[#0585F2] w-[45%] sm:w-[40%] xl:h-[48px] lg:h-[43px] md:h-[36px] h-[32px]  rounded-[56px] text-center  md:top-[6px] top-[4px]  text-[#ffffff] xl:text-[16px] md:text-[14px] text-[12px] font-medium tracking-tight    ">
              Request Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

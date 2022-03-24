import Logo from "./Logo";
export default function TopSection() {
  return (
    <div className="mx-auto container  ">
      <div className="relative flex justify-center sm:top-[64px] top-[32px]">
        <Logo />
      </div>
      <div className=" relative sm:top-[0px] top-[82px] flex justify-center   ">
        <div className="  relative    h-[428.17px]  sm:mt-[0px] mt-[-70px]   opacity-80 ">
          <img
            src="./images/Gradient.png"
            alt=" "
            className="sm:h-[170%] h-full  "
          />
        </div>
        <div className="absolute md:top-[210px] sm:top-[180px] top-[40px]  max-w-[80%]  ">
          <h1 className="text-[30px]  sm:text-[50px] lg:text-[60px] sm:leading-[66px] text-center  font-bold  text-[#ffffff]  tracking-[-1%]  ">
            The Collaboration <br />
            Meta-Layer for <span className="text-[#7FE3EC]">Work</span>
          </h1>
          <p className=" h-12  sm:my-[32px] my-[16px] not-italic text-lg  text-center text-[#D4D4D4] text-[16px] lg:text-[18px] ">
            Stop falling through the cracks. The tools you already know and
            love, all in <br className="md:block hidden" />
            one place.
            <span className=" font-bold">
              {" "}
              Meet, collaborate, and organize
            </span>{" "}
            all of your work in Wove.{" "}
          </p>
          \
        </div>
      </div>
      <div className="relative flex justify-center md:mt-[48px] sm:mt-[0px] mt-[30px]   ">
        <div className=" relative bg-[#262626] 2xl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[75%] sm:h-[60px] h-[48px] rounded-[56px] ">
          <input
            type={"text"}
            placeholder="Email Address"
            className="  relative  sm:h-[60px] h-[48px] w-full bg-[#262626] rounded-[56px] placeholder:px-[20px]"
          />

          <button className="  absolute   text-[#ffffff] font-medium tracking-tight xl:text-[16px] md:text-[14px]  text-[12px]  bg-[#0585F2] w-[40%]  sm:h-[48px] h-[36px]  rounded-[56px]    top-[6px] right-[6px]       ">
            Request Early Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ThirdSection() {
  return (
    <div className="mx-auto container">
      <div className=" relative  sm:my-[100px] my-[74px] ">
        <h1 className="md:text-[36px] sm:text-[30px] text-[20px] text-[#ffffff] text-center tracking-[-0.01em] font-semibold">
          Built for the New Normal
        </h1>

        <p className="xl:text-[18px] sm:text-[16px] text-center text-[14px] text-[#A3A3A3] max-w-[100%] max-w-[80%]  font-normal">
          Open any of your favorite apps right in Wove.
          <br className="sm:hidden block" /> With Wove&apos;s persistence,
          <br className="md:hidden sm:block hidden" /> you can access{" "}
          <br className="md:block hidden" />
          your <br className="sm:hidden block" /> work with a single click even
          after a meeting <br className="sm:hidden block" /> has ended.
        </p>

        <div className="relative lg:flex    mx-auto container  lg:max-w-[80%] sm:lg:max-w-[100%] max-w-[80%]      my-[70px]">
          <div className="text-center  xl:mx-[57px] lg:mx-[20px]   ">
            <img
              src="./images/icon1.png"
              alt=" "
              className=" block ml-auto mr-auto   "
            />
            <h3 className="xl:text-[24px]  sm:text-[20px] text-[16px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] lg:my-[25px] md:mt-[20px] mt-[16px]">
              Real Time Collaboration
            </h3>
            <p className=" sm:text-[16px]   text-[14px] font-normal leading-5 text-[#A3A3A3] sm:mt-[8px]">
              Tranform any website into mulitplayer{" "}
              <br className="lg:hidden block " /> with Wove&apos;s shared
              browser
            </p>
          </div>
          <div className="text-center lg:my-0 my-[56px] xl:pl-[50px] lg:pl-[40px]        ">
            <img
              src="./images/icon2.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="xl:text-[24px] sm:text-[20px] text-[16px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] mt-[16px] lg:my-[25px] md:mt-[20px]">
              Async Organization
            </h3>
            <p className="sm:text-[16px] 2xl:mx-[60px] xl:mx-[70px] lg:mx-[30px] text-[14px] font-normal leading-5 text-[#A3A3A3] sm:mt-[8px]">
              Post-meeting organization via nesting{" "}
              <br className="lg:hidden sm:block hidden" /> and{" "}
              <br className=" sm:hidden block" /> async, Internal and external
              stakeholders <br className="lg:hidden block " /> have a source of
              truth to reference.
            </p>
          </div>
          <div className="text-center  ">
            <img
              src="./images/icon3.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="xl:text-[24px] sm:text-[20px] text-[16px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] mt-[16px] lg:my-[25px] md:mt-[20px]">
              Work Persistence
            </h3>
            <p className="sm:text-[16px]  xl:mx-[70px] lg:mx-[30px] text-[14px] font-normal leading-5 text-[#A3A3A3] sm:mt-[8px]">
              Achive all work inside the room,{" "}
              <br className="lg:hidden md:block hidden" /> Wave{" "}
              <br className=" sm:hidden block" /> rooms{" "}
              <br className="md:hidden sm:block hidden" /> live and breathe.
              Participants can{" "}
              <br className="lg:hidden md:block sm:hidden block" /> return to{" "}
              <br className="md:hidden sm:block hidden" /> rooms after the
              meeting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

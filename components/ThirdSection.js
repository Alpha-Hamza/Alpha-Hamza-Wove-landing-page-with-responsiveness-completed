export default function ThirdSection() {
  return (
    <>
      <div className=" relative  sm:my-[100px] my-[74px]">
        <div className="text-center ">
          <h1 className="sm:text-[36px] text-[24px] text-[#ffffff] tracking-[-0.01em] font-semibold">
            Built for the New Normal
          </h1>
          <div className="flex justify-center">
            <p className="xl:text-[18px] sm:text-[16px] text-[14px] text-[#A3A3A3] max-w-[100%] max-w-[80%]  font-normal">
              Open any of your favorite apps right in Wove. With Wove&apos;s
              persistence, you can access <br className="sm:block hidden" />
              your work with a single click even after a meeting has ended.
            </p>
          </div>
        </div>
        <div className="relative lg:flex lg:justify-center   mx-auto container  my-[70px]">
          <div className="text-center mx-[87px] ">
            <img
              src="./images/icon1.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="xl:text-[24px] sm:text-[20px] text-[18px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] sm:my-[25px] mt-[16px]">
              Real Time Collaboration
            </h3>
            <p className=" sm:text-[16px] text-[14px] font-normal leading-5 text-[#A3A3A3] mt-[8px]">
              Tranform any website into mulitplayer{" "}
              <br className="sm:block hidden" /> with Wove&apos;s shared browser
            </p>
          </div>
          <div className="text-center lg:my-0 my-[56px] mx-[87px]">
            <img
              src="./images/icon2.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="xl:text-[24px] sm:text-[20px] text-[18px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] mt-[16px] sm:my-[25px]">
              Async Organization
            </h3>
            <p className="sm:text-[16px] text-[14px] font-normal leading-5 text-[#A3A3A3] mt-[8px]">
              Post-meeting organization via nesting{" "}
              <br className="sm:block hidden" /> and async, Internal and
              external <br className="sm:block hidden" /> shtakeholders have a
              source of truth to reference.
            </p>
          </div>
          <div className="text-center mx-[87px]">
            <img
              src="./images/icon3.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="xl:text-[24px] sm:text-[20px] text-[18px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] mt-[16px] sm:my-[25px]">
              Work Persistence
            </h3>
            <p className="sm:text-[16px] text-[14px] font-normal leading-5 text-[#A3A3A3] mt-[8px]">
              Achive all work inside the room, Wave{" "}
              <br className="sm:block hidden" /> rooms live and breathe.
              Participants can <br className="sm:block hidden" /> return to
              rooms after the meeting
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

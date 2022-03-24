export default function FifthSection() {
  return (
    <div className="relative mx-auto container sm:max-w-full max-w-[90%]">
      <div className="text-center">
        <h1 className="sm:text-[36px] text-[24px] text-[#ffffff] tracking-[-0.01em] font-semibold">
          A Single Source of Truth
        </h1>
        <p className=" xl:text-[18px] sm:text-[16px] text-[14px] text-[#A3A3A3] md:my-[15px] sm:my-[0px]    font-normal">
          Open any of your favorite apps within Wove.
          <br className=" sm:hidden block" /> With Wove&apos;s persistence,
          <br className="md:hidden sm:block hidden" /> you can access{" "}
          <br className="md:block hidden" /> your{" "}
          <br className=" sm:hidden block" />
          work with a single click even after a meeting{" "}
          <br className=" sm:hidden block" /> has ended.
        </p>
      </div>
      <div className="relative md:mt-0 mt-8 flex justify-center ">
        <img
          src="./images/Gradient1.png"
          alt=" "
          className="lg:my-[-110px] md:my-[-70px] sm:my-[-30px] my-[-40px]   "
        />
        <img
          src="./images/fifth.png"
          alt=" "
          className="absolute  sm:my-[50px] my-[30px]  lg:max-w-[100%]  max-w-[70%] "
        />
        <img
          src="./images/left.png"
          alt=" "
          className="absolute 2xl:left-[24px] xl:left-[5%]  left-[0px] md:left-[0%] left-[-2%]   sm:my-[152px] my-[70px] lg:max-w-[100%]  max-w-[15%] "
        />
        <img
          src="./images/right.png"
          alt=" "
          className="absolute 2xl:right-[24px] xl:right-[5%] md:right-[0%] right-[-2%]  right-[0px]  sm:my-[152px] my-[70px] lg:max-w-[100%] max-w-[15%] "
        />
      </div>
    </div>
  );
}

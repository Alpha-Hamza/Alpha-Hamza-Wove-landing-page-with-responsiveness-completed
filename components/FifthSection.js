export default function FifthSection() {
  return (
    <div className="relative mx-auto container">
      <div className="text-center">
        <h1 className="sm:text-[36px] text-[24px] text-[#ffffff] tracking-[-0.01em] font-semibold">
          A Single Source of Truth
        </h1>
        <p className=" xl:text-[18px] sm:text-[16px] text-[14px] text-[#A3A3A3] my-[15px]  font-normal">
          Open any of your favorite apps within Wove. With Wove&apos;s
          persistence, you can access <br className="sm:block hidden" /> your
          work with a single click even after a meeting has ended.
        </p>
      </div>
      <div className="relative  flex justify-center ">
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
          className="absolute xl:left-[24px]  left-[0px]    sm:my-[152px] my-[70px] lg:max-w-[100%] max-w-[15%] "
        />
        <img
          src="./images/right.png"
          alt=" "
          className="absolute xl:right-[24px]  right-[0px]  sm:my-[152px] my-[70px] lg:max-w-[100%] max-w-[15%] "
        />
      </div>
    </div>
  );
}

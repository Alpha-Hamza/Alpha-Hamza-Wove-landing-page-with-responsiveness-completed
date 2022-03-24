export default function FlowCharts() {
  return (
    <div className="relative mx-auto container sm:my-[114px] my-[74px] ">
      <div className="relative  ">
        <h1 className="  sm:text-[36px] text-[24px] text-center text-[#ffffff] tracking-[-0.01em] font-semibold ">
          Before Wove
        </h1>
        <p className="  xl:text-[18px]  sm:text-[16px] text-[14px] text-center text-[#A3A3A3] md:my-[16px] sm:my-[5px]     font-normal ">
          Silos that make it a nightmare to keep <br /> track, making you switch
          between tools <br /> back and forth
        </p>
      </div>
      <div className="relative flex justify-center sm:my-[40px] my-[32px]">
        <img
          src="./images/flow1.png"
          alt=" "
          className="lg:max-w-[100%] sm:max-w-[80%] max-w-[90%]  "
        />
      </div>
      <div className="relative sm:mt-[96.7px] mt-[72px]  ">
        <h1 className="  sm:text-[36px] text-[24px] text-center text-[#ffffff] tracking-[-0.01em] font-semibold ">
          After Wove
        </h1>
        <p className=" xl:text-[18px] sm:text-[16px] text-[14px] text-center text-[#A3A3A3] md:my-[16px] sm:my-[5px]    font-normal ">
          Fluid collaboration that allows everything <br /> to be tracked
          allowing you to focus on <br /> the most important of aspects
        </p>
      </div>
      <div className="relative flex justify-center sm:my-[40px] my-[32px] ">
        <img
          src="./images/flow2.png"
          alt=" "
          className="lg:max-w-[100%] sm:max-w-[80%] max-w-[90%] "
        />
      </div>
    </div>
  );
}

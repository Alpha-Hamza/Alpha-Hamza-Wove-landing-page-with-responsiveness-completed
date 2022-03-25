export default function FlowCharts() {
  return (
    <div className="relative  mx-auto container sm:my-[114px] my-[74px]  ">
      <div className="lg:relative lg:flex lg:justify-between lg:items-center  ">
        <div className=" relative lg:ml-[80px]    ">
          <h1 className="  sm:text-[36px] text-[24px] lg:text-left text-center text-[#ffffff] tracking-[-0.01em] font-semibold ">
            Before Wove
          </h1>
          <p className="  2xl:text-[18px]  sm:text-[16px] text-[14px] lg:text-left text-center text-[#A3A3A3] md:my-[16px] sm:my-[5px]    font-normal ">
            Silos that make it a nightmare <br className="xl:hidden lg:block hidden"/> to keep <br className="xl:block lg:hidden block" /> track, making you
            switch  between <br className="xl:block hidden"/> tools <br className="lg:hidden block"/> back and forth
          </p>
        </div>
        <div className="relative lg:mr-[80px]    flex lg:justify-end justify-center sm:my-[40px] my-[32px]">
          <img
            src="./images/flow1.png"
            alt=" "
            className=" 2xl:max-w-[100%]  sm:max-w-[80%] max-w-[90%]   "
          />
        </div>
      </div>
      <div className=" lg:relative lg:flex lg:justify-between lg:mt-[129px] lg:items-center  ">
      <div className="relative  lg:ml-[80px]  lg:mt-0 sm:mt-[96.7px] mt-[72px]  ">
        <h1 className="  sm:text-[36px] text-[24px] lg:text-left text-center text-[#ffffff] tracking-[-0.01em] font-semibold ">
          After Wove
        </h1>
        <p className=" 2xl:text-[18px] sm:text-[16px] text-[14px] lg:text-left text-center text-[#A3A3A3] md:my-[16px] sm:my-[5px]    font-normal ">
          Fluid collaboration that allows <br className="lg:block hidden"  /> everything <br className="lg:hidden block"  /> to  be   tracked 
          allowing <br className="lg:block hidden"  />  you to focus on <br className="lg:hidden block"  /> the most important <br className="xl:block hidden"  /> of aspects
        </p>
      </div>
      <div className="relative flex lg:justify-end justify-center   lg:mr-[80px] sm:my-[40px] my-[32px] ">
        <img
          src="./images/flow2.png"
          alt=" "
          className="2xl:max-w-[100%]  sm:max-w-[80%] max-w-[90%] "
        />
      </div>
      </div>
    </div>
  );
}

import Logo from "./Logo";
import Social from "./Social";
export default function Footer() {
  return (
    <div className="relative mx-auto container lg:mt-[129px] md:mt-[100px] sm:mt-[100px] mt-[150px]  max-w-[80%] ">
      <div className="relative  flex justify-center">
        <img src="./images/Line1.png" alt=" " />
      </div>
      <div className=" relative flex left-[0px] 2xl:left-[135px]  my-[32px]">
        <Logo />
        <Social />
      </div>
      <div className="relative  flex justify-center">
        <img src="./images/Line1.png" alt=" " />
      </div>
      <div className="relative sm:mt-[32px] mt-[24px] ">
        <p className=" text-center xl:text-[20px] sm:text-[16px] text-[12px] text-[#A3A3A3]  font-normal  ">
          Privacy Policy | Terms and Conditions
        </p>
        <p className=" text-center xl:text-[24px] sm:text-[18px] text-[14px] text-[#ffffff]  font-normal my-[8px]  ">
          @ 2022 Wove Labs, Inc, All rights reserved.
        </p>
      </div>
    </div>
  );
}

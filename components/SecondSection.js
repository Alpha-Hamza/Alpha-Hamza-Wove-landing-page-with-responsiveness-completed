import Buttons from "./Buttons";
import BgImage from "./BgImage";
import SecondIcons from "./SecondIcons";

export default function SecondSection() {
  return (
    <div className="mx-auto container">
      <div className=" xl:mt-[150px] lg:mt-[120px] md:mt-[100px] sm:mt-[100px] mt-[80px]  ">
        <Buttons />
        <img src="./images/Line.png" alt=" " className="  mt-[20px]" />
      </div>
      <div className="relative top-0 ">
        <BgImage />
        <div className=" absolute left-0 right-0 ml-auto mr-auto max-w-[80%] top-[0px]   ">
          <p className="  relative 2xl:top-[88px] xl:top-[48px] lg:top-[31.71px] md:top-[30.97px] sm:top-[25.97px] top-0  text-center text-[#ffffff]  2xl:text-[20px] xl:text-[20px]    lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]  ">
            Run the most effective client workshops in Wove using apps like
            Mural and Miro
          </p>
        </div>

        <div className=" absolute left-0 right-0 ml-auto mr-auto w-[80%] bottom-[0px]   ">
          <img
            src="./images/Frame.png"
            alt=" "
            className="absolute bottom-0   "
          />
        </div>
      </div>

      <SecondIcons />
    </div>
  );
}

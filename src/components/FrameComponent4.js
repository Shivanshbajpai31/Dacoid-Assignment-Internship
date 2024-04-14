import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[1.6px] pl-0.5 box-border max-w-full text-left text-xs text-black font-montserrat">
      <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
        <button className="cursor-pointer [border:none] py-[15px] px-5 bg-[transparent] self-stretch rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full">
          <div className="h-[50px] w-[343px] relative rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] hidden max-w-full" />
          <div className="relative text-base font-semibold font-montserrat text-white text-left inline-block min-w-[58px] z-[1]">
            Sign In
          </div>
        </button>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-[3px] gap-[8px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[102px]">
            <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-gray-100" />
          </div>
          <div className="relative font-medium inline-block min-w-[15px]">
            Or
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[102px]">
            <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-gray-100" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-1 pr-[21px] pl-5">
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <div className="h-11 w-11 relative rounded-lg box-border border-[1px] border-solid border-gray-100">
              <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-full h-full hidden border-[1px] border-solid border-gray-100" />
              <img
                className="absolute top-[13px] left-[13px] w-[18px] h-[18px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/flatcoloriconsgoogle.svg"
              />
            </div>
            <div className="h-11 w-11 relative rounded-lg box-border border-[1px] border-solid border-gray-100">
              <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-full h-full hidden border-[1px] border-solid border-gray-100" />
              <img
                className="absolute top-[13px] left-[18px] w-[8.9px] h-[17px] z-[1]"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px]">
          <div
            className="relative [text-decoration:underline] font-medium cursor-pointer"
            onClick={onDontHaveAnClick}
          >
            <span>{`Don’t have an account yet? `}</span>
            <span className="text-cornflowerblue-300">Create an account</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;

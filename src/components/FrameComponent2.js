import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/android-large-6");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/android-large-5");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[1.6px] pl-0.5 box-border max-w-full text-left text-xs text-black font-montserrat">
      <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[15px] px-5 relative whitespace-nowrap text-center text-base text-white">
          <div
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] cursor-pointer"
            onClick={onRectangleClick}
          />
          <div className="w-[153px] relative font-semibold inline-block z-[1]">
            Create an Account
          </div>
        </div>
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
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[74px]">
          <div
            className="relative font-medium cursor-pointer"
            onClick={onAlreadyHaveAnClick}
          >
            <span>{`Already have an account? `}</span>
            <span className="[text-decoration:underline] text-cornflowerblue-400">
              Login
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;

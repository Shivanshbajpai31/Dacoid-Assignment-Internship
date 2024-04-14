import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent6 = () => {
  const navigate = useNavigate();

  const onSkipTextClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-end py-0 pr-[2.4px] pl-[3px] box-border max-w-full text-center text-mini text-gray-300 font-montserrat">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="w-[54px] relative tracking-[-0.3px] font-semibold inline-block shrink-0">
          9:41
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-left text-base text-cornflowerblue-100">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[17px] h-[10.7px] relative"
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[16.7px]">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-[11px] w-[15.3px] relative"
                  loading="lazy"
                  alt=""
                  src="/wifi.svg"
                />
                <div className="h-[11.3px] w-[24.3px] relative">
                  <div className="absolute top-[0px] right-[2.3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gray-300" />
                  <img
                    className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 mix-blend-normal"
                    loading="lazy"
                    alt=""
                    src="/cap.svg"
                  />
                  <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-gray-300 w-[18px] h-[7.3px] z-[1]" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-[7px]">
                <div
                  className="relative [text-decoration:underline] font-medium inline-block min-w-[36px] whitespace-nowrap cursor-pointer"
                  onClick={onSkipTextClick}
                >
                  Skip
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent6;

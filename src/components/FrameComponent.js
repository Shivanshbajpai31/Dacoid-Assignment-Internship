import { useMemo } from "react";

const FrameComponent = ({
  trackYourGoal,
  dontWorryIfYouHaveTrouble,
  propWidth,
}) => {
  const trackYourGoalStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[1.6px] pl-0.5 box-border max-w-full text-left text-xl text-black font-montserrat">
      <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div
          className="w-[180px] relative font-semibold inline-block box-border pr-5"
          style={trackYourGoalStyle}
        >
          {trackYourGoal}
        </div>
        <div className="self-stretch relative text-base font-medium text-gray-200">
          {dontWorryIfYouHaveTrouble}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

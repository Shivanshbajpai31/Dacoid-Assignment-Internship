import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent from "../components/FrameComponent";

const AndroidLarge4 = () => {
  return (
    <div className="w-full relative rounded-3xs bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-3 pb-[202px] pr-3 pl-[11px] box-border gap-[92px] leading-[normal] tracking-[normal]">
      <img
        className="w-[60px] h-[60px] absolute !m-[0] right-[16px] bottom-[44px]"
        loading="lazy"
        alt=""
        src="/group-11.svg"
      />
      <FrameComponent6 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[16.4px] box-border max-w-full">
        <img
          className="h-[234.6px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
        />
      </section>
      <div className="w-[375px] h-11 relative bg-white hidden max-w-full z-[3]" />
      <FrameComponent
        trackYourGoal="Get Burn"
        dontWorryIfYouHaveTrouble="Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever"
        propWidth="113px"
      />
    </div>
  );
};

export default AndroidLarge4;

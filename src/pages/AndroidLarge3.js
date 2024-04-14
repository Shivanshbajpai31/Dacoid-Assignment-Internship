import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";

const AndroidLarge3 = () => {
  return (
    <div className="w-full relative rounded-3xs bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-3 pb-[29px] pr-[14.4px] pl-3.5 box-border gap-[44px] leading-[normal] tracking-[normal]">
      <FrameComponent3 createAnAccount="Welcome Back" />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[246px] pr-[1.6px] pl-0.5 box-border max-w-full">
        <FrameComponent5 />
      </section>
      <div className="w-[375px] h-11 relative bg-white hidden max-w-full" />
      <FrameComponent4 />
    </div>
  );
};

export default AndroidLarge3;

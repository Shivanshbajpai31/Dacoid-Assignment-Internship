import FrameComponent3 from "../components/FrameComponent3";
import EmailEntry from "../components/EmailEntry";
import FrameComponent2 from "../components/FrameComponent2";

const AndroidLarge1 = () => {
  return (
    <div className="w-full relative rounded-3xs bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-3 pb-[29px] pr-[14.4px] pl-3.5 box-border gap-[44px] leading-[normal] tracking-[normal]">
      <FrameComponent3 createAnAccount="Create an account" />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[77px] pr-[1.6px] pl-0.5 box-border max-w-full">
        <EmailEntry />
      </section>
      <div className="w-[375px] h-11 relative bg-white hidden max-w-full" />
      <FrameComponent2 />
    </div>
  );
};

export default AndroidLarge1;

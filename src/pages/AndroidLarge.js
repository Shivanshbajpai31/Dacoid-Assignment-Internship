import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";

const AndroidLarge = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className="w-full h-[800px] relative rounded-3xs bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-3 pb-11 pr-[14.4px] pl-3.5 box-border gap-[63px] leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[158px] relative gap-[68px] shrink-0 [debug_commit:f6aba90]">
        <FrameComponent1 />
        <section className="flex flex-row items-start justify-end pt-0 pb-[17px] pr-[32.6px] pl-8">
          <img
            className="h-[282px] w-[282px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
        </section>
        <FrameComponent
          trackYourGoal="Track Your Goal"
          dontWorryIfYouHaveTrouble="Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
        />
        <img
          className="w-[60px] h-[60px] absolute !m-[0] right-[1.6px] bottom-[0px] cursor-pointer"
          loading="lazy"
          alt=""
          src="/group-1.svg"
          onClick={onGroupClick}
        />
      </main>
      <div className="w-[375px] h-11 relative bg-white hidden max-w-full" />
      <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-[1394.6px] pl-0 box-border max-w-full">
        <div className="rounded-xl bg-black1 flex flex-row items-start justify-start pt-[15px] px-[69px] pb-[35px] shrink-0 [debug_commit:f6aba90]">
          <div className="h-[77px] w-[390px] relative rounded-xl bg-black1 hidden max-w-full" />
          <img
            className="h-[27px] w-[251px] relative z-[1]"
            alt=""
            src="/group-5.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default AndroidLarge;

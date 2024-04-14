const FrameComponent5 = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xs text-gray-100 font-montserrat">
      <input
        className="w-full [border:none] [outline:none] bg-gray-50 self-stretch h-[50px] rounded-xl flex flex-row items-start justify-start pt-[18px] px-5 pb-[17px] box-border font-montserrat font-semibold text-xs text-gray-100 min-w-[206px]"
        placeholder="Email"
        type="text"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
        <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[17px] pr-4 pl-5 box-border max-w-full gap-[20px]">
          <div className="h-[50px] w-[343px] relative rounded-xl bg-gray-50 hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative font-semibold inline-block min-w-[60px] z-[1]">
              Password
            </div>
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
            loading="lazy"
            alt=""
            src="/eyeoff.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[5px]">
          <div className="relative [text-decoration:underline] font-medium">
            Forgot your password?
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;

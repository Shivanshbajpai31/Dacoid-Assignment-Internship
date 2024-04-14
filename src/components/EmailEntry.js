const EmailEntry = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xs text-gray-100 font-montserrat">
      <input
        className="w-full [border:none] [outline:none] bg-gray-50 self-stretch h-[50px] rounded-xl flex flex-row items-start justify-start pt-[18px] px-5 pb-[17px] box-border font-montserrat font-semibold text-xs text-gray-100 min-w-[206px]"
        placeholder="First Name"
        type="text"
      />
      <input
        className="w-full [border:none] [outline:none] bg-gray-50 self-stretch h-[50px] rounded-xl flex flex-row items-start justify-start pt-[18px] px-5 pb-[17px] box-border font-montserrat font-semibold text-xs text-gray-100 min-w-[206px]"
        placeholder="Last Name "
        type="text"
      />
      <input
        className="w-full [border:none] [outline:none] bg-gray-50 self-stretch h-[50px] rounded-xl flex flex-row items-start justify-start pt-[18px] px-5 pb-[17px] box-border font-montserrat font-semibold text-xs text-gray-100 min-w-[206px]"
        placeholder="Email"
        type="text"
      />
      <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-start pt-[18px] px-5 pb-[17px] box-border max-w-full">
        <div className="h-[50px] w-[343px] relative rounded-xl bg-gray-50 hidden max-w-full" />
        <div className="relative font-semibold inline-block min-w-[60px] z-[1]">
          Password
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-cornflowerblue-200">
        <input className="m-0 h-[22px] w-[22px] relative" type="checkbox" />
        <div className="relative leading-[177.9%] font-medium">
          <span className="text-gray-100">{`By proceeding, I agree to all `}</span>
          <span className="[text-decoration:underline]">{`T&C`}</span>
          <span className="text-crimson">{` `}</span>
          <span className="text-gray-100 whitespace-pre-wrap">{`and  `}</span>
          <span className="[text-decoration:underline]">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default EmailEntry;

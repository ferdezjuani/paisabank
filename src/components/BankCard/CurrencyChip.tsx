import React from "react";

interface ICurrencyChip {
  currency: string;
}

const CurrencyChip: React.FC<ICurrencyChip> = ({ currency }) => {
  return (
    <div className="w-full flex items-center justify-center max-w-[48px] max-h-[30px] rounded-md bg-gradient-to-tr from-[#89A5FB] to-[#6C8FF8]">
      <div className="text-white font-medium p-2 text-sm">{currency}</div>
    </div>
  );
};

export default CurrencyChip;

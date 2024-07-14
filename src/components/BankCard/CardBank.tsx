import Image, { StaticImageData } from "next/image";
import React from "react";
import mastercard from "@/assets/mastercard.svg";
import visa from "@/assets/visa.svg";
import CurrencyChip from "./CurrencyChip";
import { ICardBank } from "@/types/user";

const bankLogos: { [key: string]: StaticImageData } = {
  mastercard,
  visa,
};

const BankCard: React.FC<ICardBank> = ({
  issuer: bank,
  currency,
  balance,
  lastDigits,
  name,
  expDate,
}) => {
  const bankLogo = bankLogos[bank];

  return (
    <div
      className={`w-full h-full rounded-3xl ${
        bank === "mastercard" ? "bg-primary-blue" : "bg-primary-pink"
      } max-w-[348px] font-[Poppins]`}
    >
      <div className="w-full py-2 px-4">
        <div className="w-full flex flex-row justify-between py-2">
          <div className="text-sm text-white font-[Poppins] font-light">
            Balance
          </div>
          <Image src={bankLogo} alt={bank} width={34} height={25} />
        </div>
        <div className="flex flex-row py-2 items-center gap-2">
          <CurrencyChip currency={currency} />
          <div className="text-white font-medium">{balance}</div>
        </div>
        <div className="text-white text-sm py-2">
          **** **** **** {lastDigits}
        </div>
        <div className="w-full flex flex-row justify-between pt-2">
          <div className="text-white text-sm font-thin">{name}</div>
          <div className="flex flex-col items-center">
            <div className="text-white font-thin text-[10px]">Exp Date</div>
            <div className="text-white text-xs">{expDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;

import React from "react";
import { Transaction } from "@/types/user";
import sus from "@/assets/sus.svg";
import cashIn from "@/assets/cash_in.svg";
import cashOut from "@/assets/cash_out.svg";
import Image from "next/image";

interface TransactionCardProps {
  transaction: Transaction;
}

const getTransactionIcon = (transactionType: string): string => {
  switch (transactionType) {
    case "SUS":
      return sus;
    case "CASH_IN":
      return cashIn;
    case "CASH_OUT":
      return cashOut;
    default:
      return "";
  }
};

const getTransactionColor = (transactionType: string) => {
  switch (transactionType) {
    case "SUS":
      return "text-primary-violet";
    case "CASH_IN":
      return "text-primary-green";
    case "CASH_OUT":
      return "text-primary-yelow";
    default:
      return "text-primary-violet";
  }
};

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={getTransactionIcon(transaction.transactionType)}
          alt={transaction.transactionType}
          width={44}
          height={44}
          className="pr-2"
        />
        <div>
          <h3 className="text-sm font-medium text-tertiary-gray">{transaction.title}</h3>
          <p className="text-xs text-placeholder-gray">
            {transaction.transactionType === "SUS"
              ? "Pago de suscripción"
              : transaction.transactionType === "CASH_IN"
              ? "Pago recibido"
              : "Pago enviado"}
          </p>
        </div>
      </div>
      <div
        className={`text-sm font-semibold ${getTransactionColor(
          transaction.transactionType
        )}`}
      >
        ${transaction.amount}
      </div>
    </div>
  );
};

export default TransactionCard;

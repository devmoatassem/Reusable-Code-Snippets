import React from "react";

interface CurrencyCardProps {
  currency: string;
  amount: number;
}

const CurrencyCard = ({ currency, amount }: CurrencyCardProps) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="text-secondaryText">{currency}</div>
      <div className="text-primaryText">{amount}</div>
    </div>
  );
};

export default CurrencyCard;

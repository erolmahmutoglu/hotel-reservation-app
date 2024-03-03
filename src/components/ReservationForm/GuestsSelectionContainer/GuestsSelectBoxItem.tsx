"use client";

import { useState } from "react";

interface GuestsSelectBoxItemProps {
  name: string;
  title: string;
  description: string;
  defaultValue: number;
}

interface SelectionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const SelectionButton = ({ onClick, children }: SelectionButtonProps) => {
  return (
    <button
      className="w-8 h-8 border border-slate-300 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const GuestsSelectBoxItem = ({
  name,
  title,
  description,
  defaultValue,
}: GuestsSelectBoxItemProps) => {
  const [amount, setAmount] = useState(defaultValue);

  const handleIncrement = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setAmount((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex flex-col gap-1">
        <p className="text-lg text-slate-900 font-medium">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <div className="flex items-center justify-between gap-1">
        <SelectionButton onClick={handleDecrement}>-</SelectionButton>
        <input
          type="text"
          name={name}
          className="w-16 h-8 text-center border-0"
          value={amount}
          disabled
        />
        <SelectionButton onClick={handleIncrement}>+</SelectionButton>
      </div>
    </div>
  );
};

export default GuestsSelectBoxItem;

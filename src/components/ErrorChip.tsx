import React from "react";

interface IErrorChip {
  message: string;
}

const ErrorChip: React.FC<IErrorChip> = ({ message }) => {
  return (
    <div className="flex flex-col items-center py-2 bg-white justify-center font-semibold text-red-500 text-center rounded-lg shadow-lg">
      {message}
    </div>
  );
};

export default ErrorChip;

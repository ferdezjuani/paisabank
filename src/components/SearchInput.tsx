import React from "react";
import GraySearch from "../assets/GraySearch.svg";
import Image from "next/image";

const SearchInput: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-md p-2 w-full h-12">
      <div className="w-full flex flex-row items-center">
        <Image src={GraySearch} alt="search" width={17} height={17} />
        <input
          type="text"
          placeholder="Ingresa un nombre o servicio"
          className="pl-2 w-full bg-transparent text-xs border-none outline-none text-gray-600 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchInput;

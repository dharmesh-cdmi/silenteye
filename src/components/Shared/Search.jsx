import React from "react";
import { twMerge } from "tailwind-merge";
import search from "../../assests/images/Header/search.png";
const Search = ({ className = " ", onClick, placeholder }) => {
  return (
    <div className="flex flex-row custom-shadow  rounded-[8px]  cursor-pointer  py-[10px] ps-[16px] pe-[140px] items-center  border-[1px] border-[#D0D5DD]  ">
      <img src={search} className="h-auto max-w-[100%] pe-3"/>
      <input
        type="search"
        onClick={onClick}
        className={twMerge(
          "border-[#D0D5DD]  deleteKeyLogger ",
          className
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;

import React from "react";
import { twMerge } from "tailwind-merge";

export const Table = ({ children }) => {
  return (
    <div className=" border-[#DDDDDD] border-[1px] min-w-full rounded-lg  ">
        {children}
    </div>
)};

const Header = ({ children, className = " ", ...restProps }) => {
  return (
   <div {...restProps}   className={twMerge('p-[16px] opacity-[50%]  font-medium', className)}>
     {children}
  </div>
)};

const Body = ({ children, className = " ", ...restProps }) => {
  return (
   <div {...restProps}>
     {children}
    </div>
)};

Table.Header = Header;
Table.Body = Body;

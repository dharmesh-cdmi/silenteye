import React from "react";
import { twMerge } from "tailwind-merge";

export const Table = ({ children,className=" ",...restProps }) => {
  return (
    <div    {...restProps}   className={twMerge(' min-w-full ', className)}
    >
        {children}
    </div>
)};

const Header = ({ children, className = " ", ...restProps }) => {
  return (
   <div {...restProps}   className={twMerge('p-[16px]   font-medium', className)}>
     {children}
  </div>
)};

const Body = ({ children, className = " ", ...restProps }) => {
  return (
   <div {...restProps}>
     {children}
    </div>
)};

const Row =( {children,className=" ",...restProps} )=>{
  
  return (
    <div {...restProps} className="border-t-[0.5px]   border-[#DDDDDD]">
        {children}
    </div>
  )}

  
Table.Header = Header;
Table.Body = Body;
Table.Row=Row;

import React from 'react'
import { twMerge } from "tailwind-merge";

const Button = ({children,className="",onClick,...restProps}) => {
  return (
    <button  {...restProps}  className={twMerge('border-[#D0D5DD]  flex flex-row items-center rounded-[8px] border-[1px]', className)} onClick={onClick} >
            {children}      
    </button>
  )
}

export default Button
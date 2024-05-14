import React from 'react'

const Select = ({label,register,options,onclick}) => {
  return (
    <div className=' w-full'>
        <label className="block text-[16px] text-[#000000] opacity-[50%]">
          {label}
        </label> 
        <select
        onclick={onclick}
        className="w-full p-[16px]  rounded-[12px]  bg-[#8E8E9314] mt-1 cursor-pointer"
        {...register}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className='text-[18px] text-[#000000] font-medium  '>
            {option.label}
          </option>
        ))}
      </select>  
    
    </div>
  )
}

export default Select
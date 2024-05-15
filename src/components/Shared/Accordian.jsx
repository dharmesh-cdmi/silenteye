import React, { createContext, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import down from "../../assests/images/down.png"
import right from "../../assests/images/right.png"
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
const AccordionContext = createContext();

export const useAccordionContext = () => useContext(AccordionContext);

export const Accordion = ({ children, className = "", ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, toggleAccordion }}>
      <div {...restProps} className={twMerge("w-full", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, className = "", ...restProps }) => {
  return (
    <div {...restProps} className={twMerge("", className)}>
      {children}
    </div>
  );
};

const AccordionHeader = ({ children, className = "", ...restProps }) => {
  const { isOpen, toggleAccordion } = useAccordionContext();

  return (
    <div
      {...restProps}
      className={twMerge(
        "cursor-pointer flex-row flex p-[16px]  justify-between  items-center",
        isOpen ? "rounded-t-lg" : "rounded-lg",
        className
      )}
      onClick={toggleAccordion}
    >
      {children}
      {isOpen ? <GoChevronRight size={15} /> : <GoChevronDown size={15} />}   
    </div>
  );
};

const AccordionBody = ({ children, className = "", ...restProps }) => {
  const { isOpen } = useAccordionContext();

  return (
    <div
      {...restProps}
      className={twMerge("p-[16px] ", isOpen ? "block" : "hidden", className)}
    >
      {children}
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;

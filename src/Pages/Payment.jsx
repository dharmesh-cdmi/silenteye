import React from "react";
import Header from "../components/Shared/Header";
import visa from "../../src/assests/images/Payment/visa.png";
import green from "../../src/assests/images/Payment/green.png";
import american from "../../src/assests/images/Payment/american.png";
import capital from "../../src/assests/images/Payment/capital.png";
import discover from "../../src/assests/images/Payment/discover.png";
import amazon from "../../src/assests/images/Payment/amazon.png";
import Button from "../components/Shared/Button";
import More from "../assests/images/more.png";

const Payment = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main ps-3 pe-3 pt-4">
      <Header heading="Saved Payment Methods" />
      <div className="grid  grid-cols-3 my-8 gap-4">
        <img src={visa} alt="visa" />
        <img src={green} alt="green" />
        <img src={american} alt="green" />
        <img src={capital} alt="capital" />
        <img src={discover} alt="discover" />
        <img src={amazon} alt="amazon" />
      </div>
      <div className="flex justify-center mb-12">
        <Button
          onClick={viewMore}
          className="text-[18px]   drop-shadow-3xl  font-medium px-[32px] custom-shadow  py-[10px] text-[#101828] text-center"
        >
          View More
          <img src={More} alt="more" className="ps-2" />
        </Button>
      </div>
    </div>
  );
};

export default Payment;

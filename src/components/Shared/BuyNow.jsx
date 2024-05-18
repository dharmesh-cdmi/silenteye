import Button from "../../components/Shared/Button"
import diamond from "../../assests/images/diamond.png"
import diamond2 from "../../assests/images/image2.png"


export function BuyNow2({ onCloseModal }){
  return (
    <div className="max-w-[22rem] h-[24rem]">
    <div className="border-b-[#DDDDDD] px-[16px] py-[12px]    border-b-[1px]">
      <h1 className="text-[22px] font-[600] text-[#000000]">
        Buy Now !
      </h1>
    </div>
    <div className="px-[16px] flex justify-center pt-4  "> 
    <img src={diamond2} alt="Diamond" className="pe-2 h-28" />

    
    </div>
    <div className="mx-2">

    <h3 className="font-[500] opacity-[50%] text-[18px] text-[#000000]">
      Buy Now For Premium Live Features. This feature is only available after purchase!
      </h3>
    <div className="mt-6  pb-[12px] w-[100%]">
      <Button className="py-[10px] w-[100%] px-[32px] text-[18px] font-[600] text-[#000000] " onClick={onCloseModal}>
         Cancel
      </Button>
    </div>
     <div className=" w-[100%]">
      <Button className=" w-[100%] py-[10px] bg-green-100  border-green-500 border-[1px] font-[600]  px-[70px] text-[18px] text-[#000000] " >
      <img src={diamond} alt="diamond" className="pe-2"/>
          Buy Now
      </Button>
      </div>
    </div>
  </div>
  )
}

const BuyNow = ({ onCloseModal }) => {
  return (
    <div className="max-w-xl h-[15rem]">
    <div className="border-b-[#DDDDDD] px-[16px] py-[12px]    border-b-[1px]">
      <h1 className="text-[22px] font-[600] text-[#000000]">
        Buy Now !
      </h1>
    </div>
    <div className="px-[16px] pt-8 flex "> 
    <img src={diamond2} alt="Diamond" className="pe-2 h-16" />

      <h3 className="font-[500] opacity-[50%] text-[18px] text-[#000000]">
      Buy Now For Premium Live Features. This feature is only available after purchase!
      </h3>
    </div>
    <div className="mt-6 flex flex-row  px-[16px] pb-[12px] ">
      <Button className="py-[10px] px-[32px] text-[18px] font-[600] text-[#000000] " onClick={onCloseModal}>
         Cancel
      </Button>
     <div className="ms-3 w-[100%]">
      <Button className="py-[10px] w-[100%] bg-green-100  border-green-500 border-[1px] font-[600]  px-[70px] text-[18px] text-[#000000] " >
      <img src={diamond} alt="diamond" className="pe-2"/>
          Buy Now
      </Button>
      </div>
    </div>
  </div>
  )
}

export default BuyNow
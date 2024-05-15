import Button from "../../components/Shared/Button"
import diamond from "../../assests/images/diamond.png"

function Upgrade({ onCloseModal }) {
  return (
    <div className="max-w-md">
      <div className="border-b-[#DDDDDD] px-[16px] py-[12px]    border-b-[1px]">
        <h1 className="text-[22px] font-[600] text-[#000000]">
          Upgrade to Unlock Full Access
        </h1>
      </div>
      <div className="px-[16px] pt-[10px] ]">
        <h2 className="font-[600] pe-[62px] text-[18px] text-[#000000]">
          This Demo Dashboard is for reference only,
        </h2>
        <h3 className="font-[600] opacity-[50%] text-[18px] text-[#000000]">
          No Activities can be performed here.
        </h3>
      </div>
      <div className="mt-3 flex flex-row  px-[16px] pb-[12px] ">
        <Button className="py-[10px] px-[32px] text-[18px] font-[600] text-[#000000] " onClick={onCloseModal}>
           Cancel
        </Button>
       <div className="ms-3">
        <Button className="py-[10px] bg-green-100  border-green-500 border-[1px] font-[600]  px-[70px] text-[18px] text-[#000000] " >
        <img src={diamond} alt="diamond" className="pe-2"/>
            Upgrade Now
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;

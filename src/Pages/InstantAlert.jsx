import React from 'react'
import Header from '../components/Shared/Header'
import battery from "../../src/assests/images/InstantAlerts/Battery.png"
import signal from "../../src/assests/images/InstantAlerts/Signal.png"
import access from "../../src/assests/images/InstantAlerts/key.png"
import geo from "../../src/assests/images/InstantAlerts/Geo.png"
import InstantAlerts from "../../src/components/InstantAlert/InstantAlerts"
import {Table} from "../../src/components/Shared/Table"
import Button from "../components/Shared/Button";
import More from "../assests/images/more.png";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade"

const  InstantAlertsData=[
   {
    id: "1",
    icon: battery,
    heading: "Low Battery",

   },
   {
    id: "2",
    icon: signal,
    heading: "Offline Status",
   },
   {
    id: "3",
    icon: access,
    heading: "App Access",
   },
   {
    id: "4",
    icon:  geo,
    heading: "Geofence Updates",
   }
]

const InstantAlert = () => {
  const viewMore = () => {
    //View More Logic Here

  };
  return (
    <div className='main ps-3 pe-3 pt-4'>
        <Header heading="Instant Alerts" />
        <div className="my-10">
        <Table className="border-[#DDDDDD] border-[1px] rounded-lg">
          <Table.Header className="font-[16px] opacity-[50%]">
             Instant Alerts
          </Table.Header>
          <Table.Body>
              {InstantAlertsData.map((InstantAlert) => (
                <InstantAlerts key={InstantAlert.id} InstantAlert={InstantAlert} />
              ))}
            </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12">
      <Modal>
          <Modal.Toggle toggleName="viewMore-InstantAlert">
            <Button
              onClick={viewMore}
              className="text-[18px] drop-shadow-3xl  font-medium px-[32px] custom-shadow  py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-InstantAlert">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  )
}

export default InstantAlert
import React from 'react'
import Upgrade from '../../Shared/Upgrade'
import Modal from '../../Shared/Modal'

function Tabs(props) {
  return (
    <Modal>
      <Modal.Toggle toggleName="Update">
    <div className={` ${props.msg.active ? "bg-gray-200" : ""} flex py-4 border-b-2 cursor-pointer `}>
      <img className='rounded-full h-10 w-10 ml-2' src={props.img}></img>
    <div className='flex align-middle flex-col px-5'>
        <h3 className='font-semibold'>{props.msg.name}</h3>
        <p className=''>{props.msg.text}</p>
    </div>

    </div>
    </Modal.Toggle>
    <Modal.Window windowName="Update">
                    <Upgrade/>
                  </Modal.Window>
</Modal>
  )
}

export default Tabs
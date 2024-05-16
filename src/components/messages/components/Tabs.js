import React from 'react'

function Tabs(props) {
  return (
    <div className='flex py-4 border-b-2 cursor-pointer '>
      <img className='rounded-full h-10 w-10'></img>
    <div className='flex align-middle flex-col px-5'>
        <h3 className='font-semibold'>{props.msg.name}</h3>
        <p className=''>{props.msg.text}</p>
    </div>
    </div>
  )
}

export default Tabs
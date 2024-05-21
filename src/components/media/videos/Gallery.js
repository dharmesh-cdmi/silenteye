import React from 'react'




import v from '../../../assests/images/vid.png'
import v2 from '../../../assests/images/vid2.png'




function Gallery() {
    const vids=[
            {vid:v,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v2,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v2,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v2,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v2,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
            {vid:v2,name: "nature-3076877.jpg", desc: "20.052024-422.64 KB"},
    ]
  return (
    <div className='grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-10 mx-5 lg:mt-10 mt-20'>
        {vids.map((vid,index)=>{return  <div className="flex flex-col justify-center">
            <img className="lg:h-32 lg:w-32 h-48 w-48 rounded-lg mx-auto" src={vid.vid} />
            <p className=" font-semibold text-sm mx-auto">{vid.name}</p>
            <p className="lg:ml-2 text-xs text-gray-500 mx-auto">{vid.desc}</p>
          </div>})}
    </div>
  )
}

export default Gallery
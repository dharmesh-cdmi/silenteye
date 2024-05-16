import React from 'react'
import Tabs from './components/Tabs'
import Card from '../../UI/Card'
import Gallery from './components/Gallery'
import Image from './components/Image'
import LocationHead from '../../UI/HeaderTab'

function CameraMain() {
  const headerData = {
    location: "All Captures",
    placeHolder: "Search by Photos, People, Places",
  };
  return (
    <Card>
      <LocationHead data={headerData}/>
    <Tabs/>
    <div className='grid grid-cols-2 mx-10 my-10 border rounded-lg'>
        <Gallery/>
        <Image/>
    </div>
    </Card>
  )
}

export default CameraMain
import React from 'react'
import Gallery from './components/Gallery'
import Card from '../../../UI/Card'
import LocationHead from '../../../UI/HeaderTab';

function AlbumMain() {
    const headerData = {
        location: "Albums",
        placeHolder: "Search Photos",
      };
  return (
    <Card>
        <LocationHead data={headerData}/>
        <Gallery/>
    </Card>
)
}

export default AlbumMain
import React from 'react'
import Matrix from './components/Matrix'
import Card from '../../UI/Card'
import Header from './components/Header'

function CalenderMain() {
    const headerData = {
        location: "May, 2022",
        placeHolder: "Search Photos",
      };
  return (
    <Card>
<Header data={headerData}/>
        <Matrix/>
    </Card>
  )
}

export default CalenderMain
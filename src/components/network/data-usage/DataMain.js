import React from 'react'
import Card from '../../../UI/Card'
import Tabs from './Tabs'
import UsageTable from './UsageTable'
import LocationHead from '../../../UI/HeaderTab'

function DataMain() {
  const headerData={location:"Data Usage Limit", placeHolder:"Search by App Name",}

  return (
    <Card>
      <LocationHead data={headerData}/>
            <Tabs/>
            <UsageTable/>
    </Card>
  )
}

export default DataMain
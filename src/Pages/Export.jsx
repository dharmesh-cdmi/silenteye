import React from 'react'
import ExportHeader from '../components/Export/ExportHeader'
import ExportForm from '../components/Export/ExportForm'
const Export = () => {
  return (
    <div className='main ps-3 pe-3 pt-4'>
         <ExportHeader/>
        <div className='my-8'>
         <ExportForm/>
         </div>
    </div>
  )
}

export default Export
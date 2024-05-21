

    import React from 'react'
    
    function Card(props) {
      return (
        <div className='grid lg:grid-cols-6'>
        {/* <div className='lg:col-span-1 '></div> */}
        <div className='col-span-5'>
            {props.children}
            </div>
        </div>
      )
    }
    
    export default Card
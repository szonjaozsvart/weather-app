import React from 'react';

function CurrTimeAndLocation() {
  return (
    <div>
      <div className='flex flex-row items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
            Monday, 10 October 2022 | Local time: 23:12 PM
        </p>
      </div>
      <div className='flex flex-row items-center justify-center my-3'>
        <p className='text-white text-2xl font-bold'>
            Budapest, HU
        </p>
      </div>
    </div>
  )
}

export default CurrTimeAndLocation

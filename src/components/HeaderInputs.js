import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function HeaderInputs() {
  return (
    <div className='flex flex-row justify-content my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" 
                 placeholder='City'
                 className='text-xl font-normal p-2 focus:outline-none capitalize'
                 />
                 <UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-110"/>
                 <UilLocationPoint size={30} className="text-white cursor-pointer transition ease-out hover:scale-110"/>
        </div>
        <br/>
        <div className='flex flex-row w-1/4 items-center justify-center space-x-2'>
            <button name='celsius' className='text-xl text-white font-normal'>°C</button>
            <p className='text-xl text-white font-normal'>|</p>
            <button name='farenheit' className='text-xl text-white font-normal'>°F</button>
        </div>
    </div>
  )
}

export default HeaderInputs

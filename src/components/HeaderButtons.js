import React from 'react'

function HeaderButtons() {
    const capitals = [
        {
            id:1,
            title: 'Budapest'
        },
        {
            id:2,
            title: 'Dakar'
        },
        {
            id:3,
            title: 'Dublin'
        },
        {
            id:4,
            title: 'Edinburgh'
        },
        {
            id:5,
            title: 'Rome'
        }
    ]
  return (
    <div className='flex items-center justify-between'>
      {capitals.map((capital) => (
        <button key={capital.id} className='text-white font-semibold text-lg'>{capital.title}</button>
      ))}
    </div>
  )
}

export default HeaderButtons

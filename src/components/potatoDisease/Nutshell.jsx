import React from 'react'

const Nutshell = ({point}) => {
  return (
    <div className='bg-secondary-content w-48 h-44 rounded-xl p-2 flex justify-between items-center text-lg'>
        {point}
    </div>
  )
}

export default Nutshell
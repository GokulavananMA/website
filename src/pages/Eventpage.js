import React from 'react'
import { data } from '../Data/EventData'

const Eventpage = ({event}) => {
  return (
    <div className='flex flex-col items-center px-5 py-10 gap-4'>
      <img src={data[event-1].posterlink} alt="poster"/>
      <div className='text-bold text-center text-blue-400'>{data[event-1].name}</div>
      <p className='text-center text-white'>{data[event-1].description}</p>

      <div className='flex flex-col py-20'>
        <div className='text-blue-400 text-center text-xl font-bold'>
          Rules
        </div>
        <div className=''></div>

      </div>

      <div className='flex flex-col md:flex-row text-white gap-3 md:gap-20'>
        <div>
          <h1 className='text-blue-500'>Staff Coordinator</h1>
          <h4>{data[event-1].staffcoordinator.name}</h4>
          <p>{data[event-1].staffcoordinator.phno}</p>
        </div>
        <div>
          <h1 className='text-blue-500'>Staff Coordinator</h1>
          <h4>{data[event-1].studentcoordinator.name}</h4>
          <p>{data[event-1].studentcoordinator.phno}</p>
        </div>
      </div>
    </div>
  )
}

export default Eventpage
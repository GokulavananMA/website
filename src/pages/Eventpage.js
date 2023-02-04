import React from 'react'
import { data } from '../Data/EventData'

const Eventpage = ({event,rules,prize,phno}) => {
  console.log(data[event-1].rules)
  return (
    <div className='flex flex-col items-center px-5 py-32 gap-4 text-yellow-500'>
      <img src={data[event-1].posterlink} alt="poster"/>
      <div className='text-bold text-center text-yellow-400'>{data[event-1].name}</div>
      <p className='text-center text-white'>{data[event-1].description}</p>

      <div className='flex flex-col py-20 px-10'>
        <div className='text-yellow-400 text-center text-xl font-bold my-20' ref={rules}>
          <div className='text-left mb-5'>Rules:</div>
          <ul className='list-disc text-white'>
          {data[event-1].rules.map((rule)=>
          {
            return(<li className='hover:text-yellow-400'>{rule}</li>)
          })}
          </ul>
        </div>
        <div className=' px-5' ref={prize}>
          <h1 className='text-xl text-left'>Prize</h1>
          <ul className='text-white'>
            <li>First prize: {data[event-1].prize[0]}</li>
            <li>Second prize: {data[event-1].prize[1]}</li>
            <li>Third prize: {data[event-1].prize[2]}</li>
          </ul>


        </div>

      </div>

          
      <a href={data[event-1].link} target="__blank" className='bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-500 border-4 border-black mb-20'>
        click to register
      </a>

      <div className='flex flex-col md:flex-row text-white gap-3 md:gap-20' ref={phno}>
        <div>
          <h1 className='text-yellow-500'>Staff Coordinator</h1>
          <h4>{data[event-1].staffcoordinator.name}</h4>
          <p>{data[event-1].staffcoordinator.phno}</p>
        </div>
        <div>
          <h1 className='text-yellow-500'>Staff Coordinator</h1>
          <h4>{data[event-1].studentcoordinator.name}</h4>
          <p>{data[event-1].studentcoordinator.phno}</p>
        </div>
      </div>
    </div>
  )
}

export default Eventpage
import React from 'react'
import { data } from '../Data/EventData'

const Eventpage = ({event,rules,prize,phno}) => {
  console.log(data[event-1].rules)
  return (
    <div className='flex flex-col items-center px-5 py-32 gap-4 text-yellow-500'>


      <div className='flex flex-col md:flex-row gap-20 md:px-10'>
      <div>
      <img src={data[event-1].posterlink} alt="poster"/>
      <div className='text-bold text-center text-yellow-400'>{data[event-1].name}</div>
      </div>

      <div className='md:px-60'>
      <p className='text-white'>{data[event-1].description.split("\n").map((text)=>(
        <>{text}<br/></>
      ))}</p>
      {data[event-1].prize===""?<></>:
      <div className='mt-10 px-5' ref={prize}>
          <h1 className='text-xl'>Prize</h1>
          <p>
          {data[event-1].prize.split("\n").map((text)=>(
        <>{text}<br/></>
      ))}
          </p>
      </div>
}
      </div>
      </div>

      <hr className='border-yellow-500 border-2 bg-yellow-500 shadow-yellow-lg my-10 w-[60vw] rounded-xl'/>


      <div className='flex flex-col py-10 px-10'>
        <div className='text-yellow-400 md:text-center text-xl font-bold my-20' ref={rules}>
          <div className='text-center mb-5'>Rules:</div>
          <div>{data[event-1].rules.split("\n").map((text)=>(
        <>{text}<br/></>
      ))}</div>
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
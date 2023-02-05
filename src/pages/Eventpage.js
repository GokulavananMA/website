import React from 'react'
import { data } from '../Data/EventData'
import 'aos/dist/aos.css'

const Eventpage = ({event,rules,prize,phno}) => {
  console.log(event)

 

  return (
    <div className='flex flex-col items-center px-5 py-32 gap-4 text-yellow-500'>



      <div className='grid xl:grid-cols-2 gap-2 items-center md:px-40 my-20'>
      <div data-aos="fade-up">
      <img src={data[event].posterlink} className="sm:w-1/2 sm:h-1/2 md:w-[80%] md:h-[80%]  px-10 mx-auto" alt="poster"/>
      <div className='text-bold text-center text-yellow-400 my-10'>{data[event].name}</div>
      </div>

      <div className='md:px-20' data-aos="fade-up">
      <p className='text-white text-xl'>{data[event].description.split("\n").map((text)=>(
        <>{text}<br/></>
      ))}</p>
      {data[event].prize===""?<></>:
      <div className='mt-10 px-5'>
          <h1 className='text-xl'>Prize</h1>
          <p>
          {data[event].prize.split("\n").map((text)=>(
        <>{text}<br/></>
      ))}
          </p>
      </div>
}
      </div>
      </div>

      
<div className='flex justify-center gap-10 items-center'>
</div>
      <hr className='border-yellow-500 border-2 bg-yellow-500 shadow-yellow-lg my-10 w-[60vw] rounded-xl'/>


      <div className='flex flex-col py-10 px-10' data-aos="fade-up">
        <div className='text-yellow-400 text-xl md:px-80 font-bold my-20' ref={rules}>
          <div className='text-3xl mb-10 underline'>Rules:</div>
          <div>{data[event].rules.split("\n").map((text)=>(
        <>{text}<br/></>
      ))}</div>
        </div>
        

      </div>

          
      <a href={data[event].link} ref={prize} target="__blank" className='bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-500 border-4 border-black mb-20' data-aos="fade-up">
        click to register
      </a>

      <div className='flex flex-col md:flex-row text-white gap-3 md:gap-20' data-aos="fade-up" ref={phno}>
        <div>
          <h1 className='text-yellow-500'>Staff Coordinator</h1>
          <h4>{data[event].staffcoordinator.name}</h4>
          <p>{data[event].staffcoordinator.phno}</p>
        </div>
        <div>
          <h1 className='text-yellow-500'>Staff Coordinator</h1>
          <h4>{data[event].studentcoordinator.name}</h4>
          <p>{data[event].studentcoordinator.phno}</p>
        </div>
      </div>
    </div>
  )
}

export default Eventpage
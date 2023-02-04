import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Homepage = ({setevent,home,events,contact,sponsors}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const [ntevent, setntevent] = useState(false)
  const [tevent, settevent] = useState(false)

  return (
    <div className=' flex flex-col items-center px-5 py-32 gap-2 text-yellow-400' ref={home}>
    
    <div className='md:my-20' data-aos="fade-up">
      <div className='text-yellow-400 font-bold text-2xl text-center'>Surge 2023</div>
      <div className='text-red text-lg text-center'>Velammal Engineering College</div>
      <div className='text-slate-100 text-xl text-center'>EEE</div>
      <p className='mt-6 text-center sm:px-5 md:px-20 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
      
    <div className='text-2xl text-yellow-400 font-bold text-center pt-20 underline' data-aos="fade-up" ref={events}>Events</div>
    
    <div className='flex flex-col my-10 gap-2 md:gap-20'>
      <div className='flex flex-row gap-20 justify-center w-[100vw] px-20 my-10' data-aos="fade-up">
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center '>
          <div className='text-xl text-center capitalize text-yellow-300'>technical</div>
         {tevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(1)}>Paper presentation</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(2)}>Circuit Debug</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(3)}>Project Diplay</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(4)}>Robo Racing (Line Follower)</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>settevent(!tevent)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  mt-4 mb-3 hidden md:flex gap-2'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(1)}>Paper presentation</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(3)}>Project Diplay</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(2)}>Circuit Debug</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(4)}>Robo Racing (Line Follower)</Link>
        </div>
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-36' data-aos="fade-in"/>

      <div className='flex flex-row gap-20 justify-center my-10' data-aos="fade-up">
      <div className='hidden md:flex flex-col text-white text-right border-r-2 border-yellow-600 pr-4  mt-4 mb-3 gap-2'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(5)}>Connection</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(6)}>Melomoniac</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(7)}>Myth or Fact</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(8)}>Murder and Mystery</Link>
        </div>

      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center'>
          <div className='text-xl text-center capitalize text-yellow-300'>Non technical</div>
         {ntevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(5)}>Connection</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(6)}>Melomoniac</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(7)}>Myth or Fact</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(8)}>Murder and Mystery</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>setntevent(!ntevent)} className='py-1 px-2 bg-yellow-500 text-white rounded-lg md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-36' data-aos="fade-in"/>

          <div className='flex flex-row gap-20 justify-center my-10' data-aos="fade-up">
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center'>
          <div className='text-xl text-center capitalize text-yellow-300'>Online events</div>
         {tevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(9)}>Gaming BGMI</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(10)}>GAMING FREE FIRE</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>settevent(!tevent)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  mt-4 mb-3 hidden md:flex gap-2'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(9)}>Gaming BGMI</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold text-lg' onClick={()=>setevent(10)}>GAMING FREE FIRE</Link>
        </div>
      </div>
        
    </div>

    <div className="flex flex-col lg:flex-row py-40" ref={sponsors} data-aos="fade-up">
  <h1 className="text-2xl lg:text-4xl font-bold text-center lg:self-start lg:transform lg:-rotate-90 text-yellow-600" id="sponsors">Sponsers</h1>
  <div className="p-6 md:ml-10 md:self-center">
    <p className="text-lg">Content block goes here.</p>
  </div>
</div>



<div data-aos="fade-up">
    <div className='text-center underline text-2xl capitalize font-bold text-yellow-600 pt-20' ref={contact}>Contacts</div>
    <div className='flex flex-col md:flex-row gap-10'>
      <div>
        <div className='text-center text-yellow-400 font-bold text-xl'>Staff Coordinator</div>
        <div className=''>phno</div>
      </div>
      <div>
        <div className='text-center text-yellow-400 font-bold text-xl'>Student Coordinator</div>
        <div className=''>phno</div>
      </div>
    </div>
    <div className='flex flex-row gap-4 w-100 justify-between rounded-lg mt-20 px-5 py-3 bg-yellow-500 backdrop-blur-md'>
    <a href='vv' target="__blank"><img className='h-10 w-10 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/717/717392.png ' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-10 w-10 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-10 w-10 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/646/646094.png' alt="logo"/></a>
    </div>
    </div>
    </div>
  )
}

export default Homepage
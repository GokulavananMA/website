import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Homepage = ({setevent}) => {
  const [ntevent, setntevent] = useState(false)
  const [tevent, settevent] = useState(false)
  return (
    <div className='flex flex-col items-center px-5 py-10 gap-2'>
      <div className='text-blue-200 font-bold text-2xl text-center'>Surge 2023</div>
      <div className='text-blue-100 text-lg text-center'>Velammal Engineering College</div>
      <div className='text-blue-600 text-xl text-center'>EEE</div>
      <p className='mt-6 text-center sm:px-5 md:px-20 text-white'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

    <div className='text-2xl text-blue-700 font-bold text-center mt-20 underline' id="events">Events</div>
    
    <div className='flex flex-col my-10 gap-10'>
      <div className='flex flex-row gap-24 justify-center'>
      <div className='px-4 bg-slate-700 py-2 border-4 border-blue-500 rounded-lg shadow-lg flex flex-col items-center'>
          <div className='text-xl text-center capitalize text-blue-300'>technical</div>
         {tevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden'>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(1)}>Paper presentation</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(2)}>Circuit Debug</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(3)}>Project Diplay</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(4)}>Robo Racing (Line Follower)</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>settevent(!tevent)} className='py-1 px-2 bg-blue-500 rounded-lg md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-blue-600 pl-4  mt-4 mb-3 hidden md:flex'>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(1)}>Paper presentation</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(2)}>Circuit Debug</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(3)}>Project Diplay</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(4)}>Robo Racing (Line Follower)</Link>
        </div>
      </div>

      <div className='flex flex-row gap-24 justify-center'>
      <div className='hidden md:flex flex-col text-white text-right border-r-2 border-blue-600 pr-4  mt-4 mb-3'>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(5)}>Connection</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(6)}>Photography (Online)</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(7)}>Poster Making</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(8)}>Gaming</Link>
        </div>

      <div className='px-4 bg-slate-700 py-2 border-4 border-blue-500 rounded-lg shadow-lg flex flex-col items-center'>
          <div className='text-xl text-center capitalize text-blue-300'>Non technical</div>
         {ntevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden'>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(5)}>Connection</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(6)}>Photography (Online)</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(7)}>Poster Making</Link>
          <Link to="/events" className='hover:text-blue-500 hover:font-bold' onClick={()=>setevent(8)}>Gaming</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>setntevent(!ntevent)} className='py-1 px-2 bg-blue-500 rounded-lg md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      
      </div>


        <div className='mt-10 px-4 bg-slate-700 py-2 border-4 border-blue-400 rounded-lg shadow-lg flex flex-col items-center' id="ntevents">
          <div className='text-xl text-center capitalize text-blue-300'>workshop</div>
          <div className='text-center mt-4 mb-3'>des</div>
          <a href="v" className='py-1 px-2 bg-blue-500 rounded-lg'>Register</a>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row my-20">
  <h1 class="text-2xl lg:text-4xl font-bold text-center md:self-start md:transform md:-rotate-90 text-blue-600" id="sponsors">Sponsers</h1>
  <div class="p-6 md:ml-10 md:self-center">
    <p class="text-lg">Content block goes here.</p>
  </div>
</div>



    <div className='text-center underline text-2xl capitalize font-bold text-blue-700 mt-20' id="contacts">Contacts</div>
    <div className='flex flex-col md:flex-row gap-10'>
      <div>
        <div className='text-center text-teal-700 font-bold text-xl'>Staff Coordinator</div>
        <div className=''>phno</div>
      </div>
      <div>
        <div className='text-center text-teal-700 font-bold text-xl'>Student Coordinator</div>
        <div className=''>phno</div>
      </div>
    </div>
    <div className='flex flex-row gap-4 bg-slate-800 border-4 border-blue-400 w-4/5 lg:2/5 justify-between rounded-lg mt-10 px-5 py-3'>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/3938/3938026.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/733/733547.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/5968/5968534.png' alt="logo"/></a>
    </div>
    </div>
  )
}

export default Homepage
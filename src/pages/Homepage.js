import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import logo from '../assets/logo.PNG'
import Countdown from '../component/calculateTime'
import logo3 from '../assets/logo3.PNG'
import logo4 from '../assets/logo4.PNG'

const Homepage = ({setevent,home,events,contact,sponsors}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const [ntevent, setntevent] = useState(false)
  const [tevent, settevent] = useState(false)
  const [oevents,setoevents]=useState(false)

  return (    
    <div className='pb-20 py-20 flex flex-col items-center px-5 gap-2 text-yellow-400' ref={home}>
    
    <div className='md:px-20 flex flex-col gap-5 items-center h-screen justify-center' data-aos="fade-up">
      <img className='h-40 w-40 mb-5' src={logo} alt="logo"/>
      <div className='text-red text-2xl text-center'>VELAMMAL ENGINEERING COLLEGE</div>
      <div className='text-slate-100 text-xl text-center'>Department of Electrical and Electronics Engineering</div>
      <p className='mt-6 text-center sm:px-5 md:px-20 text-lg mb-2'>𝑺𝑼𝑹𝑮𝑬 2𝑲23 𝑖𝑠 𝑐𝑜𝑛𝑑𝑢𝑐𝑡𝑒𝑑 𝑏𝑦 𝑡ℎ𝑒 𝑑𝑒𝑝𝑎𝑟𝑡𝑚𝑒𝑛𝑡 𝑜𝑓 𝐸𝑙𝑒𝑐𝑡𝑟𝑖𝑐𝑎𝑙 𝑎𝑛𝑑 𝐸𝑙𝑒𝑐𝑡𝑟𝑜𝑛𝑖𝑐𝑠 𝐸𝑛𝑔𝑖𝑛𝑒𝑒𝑟𝑖𝑛𝑔 𝑜𝑓 𝑉𝑒𝑙𝑎𝑚𝑚𝑎𝑙 𝐸𝑛𝑔𝑖𝑛𝑒𝑒𝑟𝑖𝑛𝑔 𝐶𝑜𝑙𝑙𝑒𝑔𝑒. 𝑇ℎ𝑖𝑠 𝑓𝑒𝑠𝑡 ℎ𝑜𝑢𝑠𝑒𝑠 𝑣𝑎𝑟𝑖𝑜𝑢𝑠 𝑛𝑒𝑟𝑣𝑒 𝑤𝑟𝑒𝑐𝑘𝑖𝑛𝑔 𝑎𝑛𝑑 𝑖𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑣𝑒 𝑡𝑒𝑐ℎ𝑛𝑖𝑐𝑎𝑙 𝑎𝑛𝑑 𝑛𝑜𝑛-𝑡𝑒𝑐ℎ𝑛𝑖𝑐𝑎𝑙𝑒𝑣𝑒𝑛𝑡𝑠 𝑡𝑜 𝑡𝑒𝑠𝑡 𝑡ℎ𝑒 𝑠𝑘𝑖𝑙𝑙 𝑠𝑒𝑡 𝑜𝑓 𝑡ℎ𝑒 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠.𝐴 𝑠𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 𝑒𝑥𝑝𝑟𝑒𝑠𝑠𝑖𝑛𝑔 𝑡ℎ𝑒𝑖𝑟 𝑡𝑎𝑙𝑒𝑛𝑡𝑠 𝑎𝑛𝑑 𝑡𝑜 𝑡𝑎𝑐𝑘𝑙𝑒 𝑡ℎ𝑒 𝑝𝑟𝑜𝑏𝑙𝑒𝑚𝑠 𝑔𝑖𝑣𝑒𝑛 𝑡𝑜 𝑡ℎ𝑒𝑚.𝐵𝑎𝑔 𝑡ℎ𝑒 𝑒𝑥𝑐𝑖𝑡𝑖𝑛𝑔 𝑐𝑎𝑠ℎ 𝑝𝑟𝑖𝑐𝑒𝑠 𝑡𝑜 𝑝𝑟𝑜𝑣𝑒 𝑦𝑜𝑢 𝑎𝑟𝑒 𝑚𝑎𝑠𝑡𝑒𝑟𝑚𝑖𝑛𝑑!𝐶𝑎𝑙𝑙𝑖𝑛𝑔 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑒𝑛𝑡ℎ𝑢𝑠𝑖𝑎𝑠𝑡𝑠 𝑡𝑜 𝑡ℎ𝑖𝑠 𝑔𝑟𝑎𝑛𝑑𝑓𝑒𝑠𝑡!
      </p>
      
      <Countdown/>
       </div>

      
    <div className='text-4xl text-yellow-400 font-bold text-center pt-20 underline' data-aos="fade-up" ref={events}>Events</div>
    
    <div className='flex flex-col my-10 gap-2 md:gap-20'>
      <div className='flex flex-row gap-20 justify-center w-[100vw] px-20 my-10' data-aos="fade-up">
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center  md:w-2/6'>
          <div className='text-xl text-center capitalize text-yellow-300'>technical</div>
         {tevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/paperpresentation" className='hover:text-yellow-500 hover:font-bold' >Vision Quest (Paper Presentation)</Link>
          <Link to="/circuitdebug" className='hover:text-yellow-500 hover:font-bold' >Circuit Debug</Link>
          <Link to="/projectexpo" className='hover:text-yellow-500 hover:font-bold' >Project Diplay</Link>
          <Link to="/roboracing" className='hover:text-yellow-500 hover:font-bold' >Robo Racing (Line Follower)</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>Technical events provide a platform to showcase the student's ideas and problem solving skills.
        These events are organized to bring out innovative ideas from young minds to solve real-time problems.
        </div>}
        <button onClick={()=>settevent(!tevent)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center my-2 hidden md:block'>Technical events provide a platform to showcase the student's ideas and problem solving skills.
These events are organized to bring out innovative ideas from young minds to solve real-time problems.
</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  hidden md:flex gap-2 my-auto'>
          <Link to="/paperpresentation" className='hover:text-yellow-500 hover:font-bold text-lg ' >Vision Quest (Paper Presentation)</Link>
          <Link to="/projectexpo" className='hover:text-yellow-500 hover:font-bold text-lg' >Project Expo</Link>
          <Link to="/circuitdebug" className='hover:text-yellow-500 hover:font-bold text-lg' >Circuit Debug</Link>
          <Link to="/roboracing" className='hover:text-yellow-500 hover:font-bold text-lg' >Robo Racing (Line Follower)</Link>
        </div>
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-36' data-aos="fade-in"/>

      <div className='flex flex-row gap-20 justify-center px-20 my-10' data-aos="fade-up">
      <div className='hidden md:flex flex-col text-white text-right border-r-2 border-yellow-600 pr-4  mt-4 mb-3 gap-2'>
          <Link to="/connection" className='hover:text-yellow-500 hover:font-bold text-lg' >Connection</Link>
          <Link to="/melomoniac" className='hover:text-yellow-500 hover:font-bold text-lg' >Melomoniac</Link>
          <Link to="/mythorfact" className='hover:text-yellow-500 hover:font-bold text-lg' >Myth or Fact</Link>
          <Link to="/murderandmystery" className='hover:text-yellow-500 hover:font-bold text-lg' >Crack the Codes</Link>
        </div>

      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center md:w-2/6'>
          <div className='text-xl text-center capitalize text-yellow-300'>Non technical</div>
         {ntevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/connection" className='hover:text-yellow-500 hover:font-bold text-lg' >Connection</Link>
          <Link to="/melomoniac" className='hover:text-yellow-500 hover:font-bold text-lg' >Melomoniac</Link>
          <Link to="/mythorfact" className='hover:text-yellow-500 hover:font-bold text-lg' >Myth or Fact</Link>
          <Link to="/murderandmystery" className='hover:text-yellow-500 hover:font-bold text-lg' >Murder and Mystery</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>Non-technical events include 5 fun filled events that challenge your mental strength and artistic views.</div>}
        <button onClick={()=>setntevent(!ntevent)} className='py-1 px-2 bg-yellow-500 text-white rounded-lg md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>Non-technical events include 5 fun filled events that challenge your mental strength and artistic views.</div>
      </div>
      
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-36' data-aos="fade-in"/>

          <div className='flex flex-row gap-20 justify-center my-10 mx-20' data-aos="fade-up">
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center md:w-2/6'>
          <div className='text-xl text-center capitalize text-yellow-300'>Online events</div>
         {oevents?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/gaming" className='hover:text-yellow-500 hover:font-bold text-lg' >Gaming</Link>
          <Link to="/photography" className='hover:text-yellow-500 hover:font-bold text-lg' >Photography</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>Online events are to exhibit your artistic views, gaming skills, and eye-hand coordination.</div>}
        <button onClick={()=>setoevents(!oevents)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>Online events are to exhibit your artistic views, gaming skills, and eye-hand coordination.</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  my-auto hidden md:flex gap-2'>
          <Link to="/gaming" className='hover:text-yellow-500 hover:font-bold text-lg' >Gaming</Link>
          <Link to="/photography" className='hover:text-yellow-500 hover:font-bold text-lg' >Photography</Link>
        </div>
      </div>
        
    </div>

    <div className="flex flex-col lg:flex-row py-40" ref={sponsors} data-aos="fade-up">
  <h1 className="text-2xl lg:text-4xl  font-bold text-center lg:self-start my-auto lg:transform lg:-rotate-90 text-yellow-600 lg:mr-20" id="sponsors">Sponsers</h1>
  <div className="p-6 md:ml-10 grid grid-cols-2 gap-20 md:self-center">
  <img className='h-40 w-40' src={logo}/>
  <img className='h-40 w-40' src={logo}/>
  <img className='h-40 w-40' src={logo}/>

  <img className='h-40 w-40' src={logo}/>


  </div>
</div>



<div data-aos="fade-up">
    <div className='text-center underline text-2xl capitalize font-bold text-yellow-600 pt-20' ref={contact}>Contacts</div>
    <div className='flex flex-col gap-10  my-10 items-center md:flex-row'>
      <img className='h-40 w-40' src={logo3}/>
      <img className='h-40 w-40' src={logo4}/>
      <div className='text-center'>
        <div className='text-xl font-bold'>
          Converor & HOD
        </div>
        <div className='text-white'>
          Dr.R.UMA MAHESHWARI
        </div>
        <a href='tel:+919790686771'className='text-white'>+91 9790686771</a>
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-10 text-center'>
      <div>
        <div className='text-yellow-400 font-bold text-xl'>Staff Coordinator</div>
        <div className='text-white'>Kasirathi N : <a href='tel:+919940488441'>+91 9940488441</a></div>
        <div className='text-white'>Rengarajan V :<a href='tel:+918973318299'>+918973318299</a></div>
      </div>
      <div>
        <div className='text-yellow-400 font-bold text-xl'>Student Coordinator</div>
        <div className='text-white'>Karpagam M : <a href='tel:+917358500863'>+91 7358500863</a></div>
        <div className='text-white'>Roshan M : <a href='tel:+919884192828'>+91 9884192828</a></div>
        <div className='text-white'>Sriram G  : <a href='tel:+916383179919'>+91 6383179919</a></div>
      </div>
    </div>
    <div className='text-white text-xl text-center my-20' data-aos="fade-up">
         <div className='mb-2'>Address:<span className='text-yellow-500'>'Velammal New Gen Park', Ambattur-Redhills road</span></div>
<a target='_blank' className='hover:text-yellow-500' href='https://www.google.com/maps/place/Velammal+Engineering+College,+Ambattur+Red+Hills+Rd,+Velammal+Nagar,+Surapet,+Chennai,+Tamil+Nadu+600066/@13.1206794,80.1822923,12z/data=!4m6!3m5!1s0x3a5264a10c856599:0xac3348f41097ba7f!8m2!3d13.1507697!4d80.1915618!16zL20vMDgwazFo?hl=en&gl=IN'>
📍 click here for location
</a>

    </div>
    <div className='flex flex-row gap-10 w-100 justify-between rounded-lg mt-20 px-5 py-3 mb-10' data-aos="fade-up">
    <a href='vv' target="__blank"><img className='h-16 w-16 bg-yellow-500 p-1 hover:bg-yellow-600 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/717/717392.png ' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-16 w-16 bg-yellow-500 p-1 hover:bg-yellow-600 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-16 w-16 bg-yellow-500 p-1 hover:bg-yellow-600 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/646/646094.png' alt="logo"/></a>
    </div>
    </div>
    </div>
  )
}

export default Homepage
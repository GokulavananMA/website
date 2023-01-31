import React from 'react'
import { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navbar = () => {
    
    const [show, setshow] = useState(false)
    const loc=useLocation();
    const path=loc.pathname;
    console.log(path)

  return (
    <div className='bg-slate-600 p-3 flex flex-col gap-3 md:flex-row justify-between'>
        <div className='font-bold text-xl flex justify-between'>
            Surge2023
            <button className='md:hidden' onClick={()=>setshow(!show)}>
                {show?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                }
            </button>
        </div>

        {show?
        <div className='flex flex-col gap-4 md:hidden'>    
            {path==="/"?
            <>
            <a href='#tevents'>Technical events</a>
            <a href='#ntevents'>Non-technical events</a>
            <a href='#contacts'>Contacts</a>
            </>
            :
            <>
            <Link to='/'>Home</Link>
            <a href='#rules'>Rules</a>
            <a href='#phno'>Contacts</a>
            </>
            }
        </div>
        :
        <></>}

        <div className='md:flex flex-row gap-4 hidden'>    
        {path==="/"?
            <>
            <a href='#tevents'>Technical events</a>
            <a href='#ntevents'>Non-technical events</a>
            <a href='#contacts'>Contacts</a>
            </>
            :
            <>
            <Link to='/'>Home</Link>
            <a href='#rules'>Rules</a>
            <a href='#phno'>Contacts</a>
            </>
            }
        </div>


    </div>
  
  )
}

export default Navbar
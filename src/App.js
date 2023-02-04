import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import Background from "./component/Background";
import { useState,useRef } from "react";

function App() {
  const [event, setevent] = useState(0)

  const home = useRef(null)
  const events = useRef(null)
  const sponsors = useRef(null)
  const contact = useRef(null)

  const rules = useRef(null)
  const prize = useRef(null)
  const phno = useRef(null)

  return (
    <div className="relative text-slate-900 min-h-screen max-h-screen bg-slate-900">
   
    <Background/>
      <div className="relative z-10">
        
      <Router>  
      <Navbar home={home} events={events} sponsors={sponsors} contact={contact} rules={rules} prize={prize} phno={phno}/>

      <Routes>
        <Route path="/" exact element={<Homepage setevent={setevent} home={home} events={events} sponsors={sponsors} contact={contact} />} />
        <Route path="/paperpresentation" element={<Eventpage event={0} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/circuitdebug" element={<Eventpage event={1} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/projectexpo" element={<Eventpage event={2} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/roboracing" element={<Eventpage event={3} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/connection" element={<Eventpage event={4} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/melomoniac" element={<Eventpage event={5} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/mythorfact" element={<Eventpage event={6} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/murderandmystery" element={<Eventpage event={7} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/gamingbgmi" element={<Eventpage event={8} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/gamingfreefire" element={<Eventpage event={9} rules={rules} prize={prize} phno={phno} />}/>
      </Routes>
      </Router>
      </div>
     
    </div>
  );
}

export default App;

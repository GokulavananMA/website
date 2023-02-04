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
        <Route path="/events" element={<Eventpage event={event} rules={rules} prize={prize} phno={phno} />}/>
      </Routes>
      </Router>
      </div>
     
    </div>
  );
}

export default App;

import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import Background from "./component/Background";
import { useState } from "react";

function App() {
  const [event, setevent] = useState()

  return (
    <div className="relative text-slate-200 min-h-screen max-h-screen bg-slate-900">
   
    <Background/>
      <div className="relative z-10">
        
      <Router>  
      <Navbar/>

      <Routes>
        <Route path="/" exact element={<Homepage setevent={setevent}/>} />
        <Route path="/events" element={<Eventpage event={event}/>} />
      </Routes>
      </Router>
      </div>
     
    </div>
  );
}

export default App;

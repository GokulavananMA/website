import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import Background from "./component/Background";
import { useState } from "react";

function App() {
  const [event, setevent] = useState({})

  return (
    <div className="text-slate-200">
    <Background/>
      <div className="absolute top-0 left-0">
        
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

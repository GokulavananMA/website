import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import Background from "./component/Background";
import { useRef ,useState,useEffect} from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
  setTimeout(() => {
    setloading(false)
  }, 2500);
  }, [])
  

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
    {loading?

    <div className="relative z-10 flex bg-slate-900 h-screen w-screen justify-center items-center">
      <ScaleLoader
      color="#FFFF00"
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      </div>:

      <div className="relative z-10">
        
      <Router>  
      <Navbar home={home} events={events} sponsors={sponsors} contact={contact} rules={rules} prize={prize} phno={phno}/>

      <Routes>
        <Route path="/" exact element={<Homepage home={home} events={events} sponsors={sponsors} contact={contact} />} />
        <Route path="/paperpresentation" element={<Eventpage event={0} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/circuitdebug" element={<Eventpage event={1} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/projectexpo" element={<Eventpage event={2} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/roboracing" element={<Eventpage event={3} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/connection" element={<Eventpage event={4} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/melomoniac" element={<Eventpage event={5} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/mythorfact" element={<Eventpage event={6} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/murderandmystery" element={<Eventpage event={7} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/gaming" element={<Eventpage event={8} rules={rules} prize={prize} phno={phno} />}/>
        <Route path="/photography" element={<Eventpage event={9} rules={rules} prize={prize} phno={phno} />}/>
      </Routes>
      </Router>
      </div>}
    </div>
  );
}

export default App;

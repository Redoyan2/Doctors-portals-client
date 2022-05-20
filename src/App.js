import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authonication/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Authonication/SignUp';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="//signup" element={<SignUp></SignUp>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>} />
        
      </Routes>
    </div>
  );
}

export default App;

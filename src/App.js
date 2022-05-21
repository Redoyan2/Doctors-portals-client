import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authonication/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Authonication/SignUp';
import RequireAuth from './Pages/Authonication/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Shared pages/Dashboard/Dashboard';
import MyAppointment from './Shared pages/Dashboard/MyAppointment';
import MyReview from './Shared pages/Dashboard/MyReview';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="//signup" element={<SignUp></SignUp>}></Route>
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
         <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="/dashboard/review" element={<MyReview></MyReview>}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

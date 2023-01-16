import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import Dashboard from './components/candidate/Dashboard';
import ChangePassword from './components/candidate/ChangePassword';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
  <>
   <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/login'element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/dashboard'element={<Dashboard />}/>
        </Routes>
        <Routes>
          <Route path='/changepassword'element={<ChangePassword />}/>
        </Routes>
        <Routes>
          <Route path='/forgetpassword'element={<ForgetPassword />}/>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;

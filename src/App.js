import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';





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
      </BrowserRouter>
  </>
  );
}

export default App;

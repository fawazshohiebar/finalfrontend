import logo from './logo.svg';
import './App.css';
import semiheader from "../src/images/semiheader.jpeg"

import { Route, Routes,BrowserRouter } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "./components/Carousel"
import Header from './components/Header';
import Homepage from './components/Homepage';

import Homefull from './pages/Homefull';

import Specielties from './components/Specielties';
import AllDoctors from './components/AllDoctors';

import DoctorPage from './components/DoctorPage';
import Dashboard from './pages/Dashboard';
import AddDoctors from './components/AddDoctors';
import Login from './components/Login';
function App() {




  return (
    <div className="App">
 









<BrowserRouter>
    <Routes>
    <Route path='/' element={<Homefull />} />
    <Route path='Specielties' element={<Specielties />} />
        <Route path='/AllDoctors/:id' element={<AllDoctors />} />
        <Route path='/DoctorPage/:id' element={<DoctorPage />} />

        <Route path='/Dashboard' element={<Dashboard />} />
 <Route path='/AddDoctors' element={<AddDoctors />} />
 <Route path='/Login' element={<Login />} />

    </Routes>
    </BrowserRouter>













    </div>
  );
}

export default App;

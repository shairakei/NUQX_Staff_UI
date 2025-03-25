import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar'; 
import Reports from './pages/Reports';
import Managequeue from './pages/Managequeue';
import Settings from './pages/Settings';
import { SomeIcon } from 'lucide-react';
import { RiSomeIcon } from 'react-icons/ri';

function App() {
  return (
    <div className='flex h-screen bg-white text-gray-900 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-white opacity-100' />
      </div>

      <Header />
      <SideBar /> 

      <Routes>
        <Route path='/' element={<Navigate to="/managequeue" />} />
        <Route path='/managequeue' element={<Managequeue />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
        
      </Routes>
    </div>
  );
}

export default App;
import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import DoctorPage from './Pages/Doctors';
import ServicesPage from './Pages/Services';
import ContactUsPage from './Pages/ContactUs';
import AppointmentHistory from './Components/AppointmentHistory';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ProfileMenu from './Components/Profilemenu';

export const MyContext = createContext();

function App() {
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const contextValue = {
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={contextValue}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {isHeaderFooterShow && <Header />}
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/doctors" element={<DoctorPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/history" element={<AppointmentHistory />} />
              <Route path="/profile" element={<ProfileMenu/>} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </div>
          {isHeaderFooterShow && <Footer />}
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

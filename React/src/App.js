// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main.jsx';
import LoginForm from './component/LoginForm/LoginForm.jsx'
import Registration from './component/Registration/Registration.jsx'
import Home from './pages/Home.jsx';
import Uprofile from './pages/Uprofile.jsx';
import About from './pages/About.jsx';
import Admin from './pages/admin.jsx'
import AdminView from './pages/adminview.jsx';
import AddAttend from './pages/AddAttend.jsx'
import ViewAttend from './pages/ViewAttend.jsx'
import UserSchedule from './pages/UserSchedule.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/uprofile" element={<Uprofile/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path='/viewshedule' element={<AdminView/>}/>
        <Route exact path='/add' element={<AddAttend/>}/>
        <Route exact path='/view' element={<ViewAttend/>}/>
        <Route exact path='/schedule' element={<UserSchedule/>}/>
      </Routes>
    </Router>


  );
}

export default App;

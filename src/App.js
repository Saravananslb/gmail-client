import React from 'react';
import { SignIn } from './pages/signIn/SignIn';
import { SignUp } from './pages/signUp/SignUp';
import { Mail } from './pages/mail/Mail';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
// import { Redirect } from "react-router";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path='/mail' element={<Mail />} ></Route>
        <Route path='/mail/:type' element={<Mail />} ></Route>
        <Route path='/mail/:type/:selectedMail' element={<Mail />} ></Route>
        <Route path='/' element={<Mail />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

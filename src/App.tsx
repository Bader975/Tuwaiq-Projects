import { useState } from 'react'

 import './App.css'

import { Routes, Route } from 'react-router-dom';
import AllProjectsPage from './components/AllProjectsPage';
import UserProjects from './components/UserProjects';
 import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import AdminSignUpPage from './components/AdminSignUpPage';
import LoginPage from './components/LoginPage';
 

function App() {
 
  return (
    <div >
      <nav>
      <Nav/>
      </nav>
<Routes>
        <Route path='/userproject' element={<UserProjects/>}/> 
        <Route path='/Allproject' element={<AllProjectsPage/>}/> 
        <Route path='/ProfilePage' element={<ProfilePage/>}/> 
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/SignUpPage' element={<SignUpPage/>}/> 
        <Route path='/AdminSignUpPage' element={<AdminSignUpPage/>}/> 
        <Route path='/LoginPage' element={<LoginPage/>}/> 

        </Routes>
       <footer>
        <Footer/>
       </footer>
    </div>   
 )
 }




export default App;


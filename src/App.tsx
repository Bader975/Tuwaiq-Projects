import { useState } from 'react'

 import './App.css'

import { Routes, Route } from 'react-router-dom';
import AllProjectsPage from './components/AllProjectsPage';
import UserProjects from './components/UserProjects';
 import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import MyProjects from './components/MyProjects';
import CompanyProjects from './components/CompanyProjects';
import Addbootcamp from './components/Addbootcamp';
 

function App() {
 
  return (
    <div >
    
      <nav>
      <Nav/>
      </nav>
      {/* <Addbootcamp/> */}
      {/* <CompanyProjects/> */}
      <MyProjects/>
{/* <Routes>
        <Route path='/userproject' element={<UserProjects/>}/> 
        <Route path='/Allproject' element={<AllProjectsPage/>}/> 
        <Route path='/ProfilePage' element={<ProfilePage/>}/> 

        </Routes> */}
       <footer>
        <Footer/>
       </footer>
    </div>   
 )
 }




export default App;


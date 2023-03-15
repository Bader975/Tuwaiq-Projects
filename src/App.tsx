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
import ProjectPage from './components/ProjectPage';
import CompamySignUp from './components/CompamySignUp';
import Addbootcamp from './components/Addbootcamp';
import MyProjects from './components/MyProjects';
import CompanyProjects from './components/CompanyProjects';
import AllIdeas from './components/AllIdeas';
import AddNewProject from './components/AddNewProject';
import Myideas from './components/Myideas';
 

function App() {
 
  return (
    <div >
    
     
      {/* <Addbootcamp/> */}
      {/* <CompanyProjects/> */}
      {/* <MyProjects/> */}


<Routes>
         <Route path='/userproject' element={<UserProjects/>}/> 
         <Route path='/Addbootcamp' element={<Addbootcamp/>}/> 
         <Route path='/MyProjects' element={< MyProjects/>}/> 
         <Route path='/Allideas' element={< AllIdeas/>}/> 
         <Route path='/addProject' element={< AddNewProject/>}/> 
         <Route path='/CompanyProjects' element={<CompanyProjects/>}/> 
        <Route path='/Allproject' element={<AllProjectsPage/>}/> 
        <Route path='/Profile' element={<ProfilePage/>}/> 
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/SignUpPage' element={<SignUpPage/>}/> 
        <Route path='/AdminSignUpPage' element={<AdminSignUpPage/>}/> 
        <Route path='/CompamySignUp' element={<CompamySignUp/>}/> 
        <Route path='/Myideas' element={<Myideas/>}/> 


        <Route path='/LoginPage' element={<LoginPage/>}/> 
        <Route path='/ProjectPage' element={<ProjectPage/>}/> 
        <Route path='/ProjectPage/:id' element={<ProjectPage/>}/> 

        

         </Routes>
      
   


   
     </div>   
 )
 }




export default App;


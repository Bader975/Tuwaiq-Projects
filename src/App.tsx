import { useState } from 'react'

 import './App.css'

import { Routes, Route } from 'react-router-dom';
import AllProjectsPage from './components/AllProjectsPage';
import UserProjects from './components/UserProjects';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
 
  return (
    <div >

     {/* <AllProjectsPage/> */}
 
      <Nav/>
<Routes>
        <Route path='/userproject' element={<UserProjects/>}/> 
        <Route path='/Allproject' element={<AllProjectsPage/>}/> 

        </Routes>
       <footer>
        <Footer/>
       </footer>
    </div>   
 )
 }




export default App;


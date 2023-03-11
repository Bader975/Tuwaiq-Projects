import { useState } from 'react'

 import './App.css'

import { Routes, Route } from 'react-router-dom';
 import ProfilePage from './components/ProfilePage';
 import UserProjects from './components/UserProjects';
import Footer from './components/Footer';
import Nav from './components/Nav';
 

function App() {
 
  return (
    <div >
      <Nav/>
<Routes>
        <Route path='/userproject' element={<UserProjects/>}/> 

       
        </Routes>
       <footer>
        <Footer/>
       </footer>
    </div>   
 )
 }




export default App;


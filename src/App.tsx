import { useState } from 'react'

 import './App.css'

import { Routes, Route } from 'react-router-dom';
import UserProjects from './components/UserProjects';
import Footer from './components/Footer';


function App() {
 
  return (
    <div >

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


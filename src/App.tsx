import { useState } from 'react'

 import './App.css'

import { Routes, Route } from 'react-router-dom';
import UserProjects from './components/UserProjects';


function App() {
 
  return (
    <div className="App">

<Routes>
        <Route path='/userproject' element={<UserProjects/>}/> 

       
        </Routes>
       
    </div>   
 )
 }




export default App;


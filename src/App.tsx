import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/ShowCards';
 import './App.css'
import AddCompany from './components/AddCompany'
import ShowCards from './components/ShowCards';
import CompanyHome from './components/CompanyHome';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import CompanySingUp from './components/CompanySingUp';
import Update from './components/Update';
import InvestorSingUp from './components/InvestorSingUp';
import SingUp from './components/SingUp';
import LogIn from './components/LogIn';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Send from './components/Send';
import Search from './components/Search';
import Photo from './components/Photo';

function App() {
 
  return (
    <div className="App">
{/* <Search/> */}
{/* <Photo/> */}
       {/* <CompanySingUp/>  */}
{/* <ShowCards/> */}
    {/* <AddCompany/>  */}
       {/* <Show/> */}
        {/* <Route path='/details' element={<CardDetails/>}/>
=======
        {/* <Route path='/show/:id' element={<ShowCards/>}/> */}
        <Routes>
        <Route path='/' element={<HomePage/>}/> 

        <Route path='/show/:id' element={<ShowCards/>}/> 
        {/* change show and add search */}
        {/* <Route path='/show' element={<ShowCards/>}/>  */}
        <Route path='/show' element={<Search/>}/> 
        <Route path='/photo' element={<Photo/>}/> 
        <Route path='/add' element={ <AddCompany/>}/> 
        <Route path='/companies' element={ <CompanyHome/>}/>
        <Route path='/details' element={<CardDetails/>}/>
        <Route path='/details/:id' element={<CardDetails/>}/>
        <Route path='/SingUp' element={<CompanySingUp/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/SinguUp' element={<SingUp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Send' element={<Send/>}/>




        <Route path='/InvestorSingUp' element={<InvestorSingUp/>}/>


      </Routes>  
      

       
    </div>   
 )
 }




export default App;


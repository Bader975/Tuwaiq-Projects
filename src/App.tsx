import { useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import AllProjectsPage from "./components/AllProjectsPage";

import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import AdminSignUpPage from "./components/AdminSignUpPage";
import LoginPage from "./components/LoginPage";
import ProjectPage from "./components/ProjectPage";
import CompamySignUp from "./components/CompamySignUp";
import Bootcamp from "./components/Bootcamp";
import MyProjects from "./components/MyProjects";
import AllIdeas from "./components/AllIdeas";
import AddNewProject from "./components/AddNewProject";
import ModifyProject from "./components/ModifyProject";
import AddNewBootcamp from "./components/AddNewBootcamp";
import ModifyBootcamp from "./components/ModifyBootcamp";
import AddNewIdea from "./components/AddNewIdea";
import ModifyIdea from "./components/ModifyIdea";
import Myideas from "./components/Myideas";
import IdeaInformation from "./components/IdeaInformation";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      {/* <Addbootcamp/> */}
      {/* <CompanyProjects/> */}
      {/* <MyProjects/> */}

      <Routes>
        <Route path="/UserProfile" element={<UserProfile />} />

        <Route path="/Bootcamp" element={<Bootcamp />} />
        <Route path="/AddNewBootcamp" element={<AddNewBootcamp />} />
        <Route path="/ModifyBootcamp/:id" element={<ModifyBootcamp />} />


        <Route path="/MyProjects" element={<MyProjects />} />
        <Route path="/addProject" element={<AddNewProject />} />
        <Route path="/ModifyProject/:id" element={<ModifyProject />} />



        <Route path="/Myideas" element={<Myideas />} />
        <Route path="/AddNewIdea" element={<AddNewIdea />} />
        <Route path="/ModifyIdea/:id" element={<ModifyIdea />} />


        <Route path="/IdeaInfo/:id" element={<IdeaInformation />} />



        <Route path="/" element={<HomePage />} />
        <Route path="/Allproject" element={<AllProjectsPage />} />
        <Route path="/Allideas" element={<AllIdeas />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/ProjectPage/:id" element={<ProjectPage />} />


        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/AdminSignUpPage" element={<AdminSignUpPage />} />
        <Route path="/CompamySignUp" element={<CompamySignUp />} />
        <Route path="/LoginPage" element={<LoginPage />} />


      </Routes>
    </div>
  );
}

export default App;

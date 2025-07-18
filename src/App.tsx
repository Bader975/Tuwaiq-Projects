import { lazy } from "react";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";

const HomePage = lazy(() => import("./components/HomePage"));
const ProfilePage = lazy(() => import("./components/ProfilePage"));
const SignUpPage = lazy(() => import("./components/signup/SignUpPage"));
const AdminSignUpPage = lazy(() => import("./components/signup/AdminSignUpPage"));
const LoginPage = lazy(() => import("./components/LoginPage"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const CompamySignUp = lazy(() => import("./components/signup/CompamySignUp"));
const Bootcamp = lazy(() => import("./components/Bootcamp"));
const MyProjects = lazy(() => import("./components/MyProjects"));
const AllIdeas = lazy(() => import("./components/AllIdeas"));
const AddNewProject = lazy(() => import("./components/add/AddNewProject"));
const ModifyProject = lazy(() => import("./components/ModifyProject"));
const AddNewBootcamp = lazy(() => import("./components/add/AddNewBootcamp"));
const ModifyBootcamp = lazy(() => import("./components/ModifyBootcamp"));
const AddNewIdea = lazy(() => import("./components/add/AddNewIdea"));
const ModifyIdea = lazy(() => import("./components/ModifyIdea"));
const Myideas = lazy(() => import("./components/Myideas"));
const IdeaInformation = lazy(() => import("./components/IdeaInformation"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const NotFound = lazy(() => import("./components/NotFound"));
const AllProjectsPage = lazy(() => import("./components/AllProjectsPage"));

function App() {
  const location = useLocation()


  return (
    <>
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<HomePage />} />

        <Route path="/UserProfile/:id" element={<UserProfile />} />
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

        <Route path="/Allproject" element={<AllProjectsPage />} />
        <Route path="/Allideas" element={<AllIdeas />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/ProjectPage/:id" element={<ProjectPage />} />

        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/AdminSignUpPage" element={<AdminSignUpPage />} />
        <Route path="/CompamySignUp" element={<CompamySignUp />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound />} />


      </Routes>
    </>
  );
}

export default App;


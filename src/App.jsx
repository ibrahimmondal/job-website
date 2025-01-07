import { Route, Routes } from "react-router"
import Home from "./Pases/Home"
import About from "./Pases/About"
import AllJobs from "./Pases/AllJobs"
import MyJobs from "./Pases/MyJobs"
import JobDetails from "./Pases/JobDetails"
import Onboarding from "./Pases/Onboarding"
import Applicant from "./Pases/Applicant"
import PostJobs from "./Pases/PostJobs"
import Header from "./Layoutes/Header"
import Footer from "./Layoutes/Footer"
import { ThemeProvider } from "./components/Theme-provider"
import AuthenticatedRoute from "./components/AuthenticatedRoute"



function App() {
  

  return (

    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Header/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/jobs" element={<AuthenticatedRoute><AllJobs/></AuthenticatedRoute>}/>
      <Route path="/my-jobs" element={<AuthenticatedRoute><MyJobs/></AuthenticatedRoute>}/>
      <Route path="/jobs:id" element={<AuthenticatedRoute><JobDetails/></AuthenticatedRoute>}/>
      <Route path="/onboard" element={<AuthenticatedRoute><Onboarding/></AuthenticatedRoute>}/>
      <Route path="/applicant" element={<AuthenticatedRoute><Applicant/></AuthenticatedRoute>}/>
      <Route path="/Post-Job" element={<AuthenticatedRoute><PostJobs/></AuthenticatedRoute>}/>
    </Routes>
    {/* <Button></Button> */}
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App

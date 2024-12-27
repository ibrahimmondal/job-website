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



function App() {
  

  return (

    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Header/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="jobs" element={<AllJobs/>}/>
      <Route path="my-jobs" element={<MyJobs/>}/>
      <Route path="jobs:id" element={<JobDetails/>}/>
      <Route path="onboard" element={<Onboarding/>}/>
      <Route path="applicant" element={<Applicant/>}/>
      <Route path="Post-Job" element={<PostJobs/>}/>
    </Routes>
    {/* <Button></Button> */}
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App

import LandingPage from "./Components/LandingPage"
import About from "./Components/About"
import Navbar from "./Components/LandingPage/Navbar"
import Footer from "./Components/LandingPage/Footer"
import OurSolution from "./Components/OurSolution"
import Contactus from "./Components/Contactus"

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <LandingPage />
          <Footer />
           </div>
    },
    {
      path: "/About",
      element:
        <div>
          <Navbar />
          <About /> 
           <Footer /> 
           </div>,
    },

    {
      path: "/OurSolution",
      element:
        <div>
          <Navbar />
          <OurSolution/> 
           <Footer /> 
           </div>,
      
    },
    
    {
      path: "/Contactus",
      element:
        <div>
          <Navbar />
          <Contactus/> 
           <Footer /> 
           </div>,
      
    }

  ]

);
function App() {

  return (
    <><div>
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;


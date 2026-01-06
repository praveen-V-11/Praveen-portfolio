import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="bg-black main">
      
      <BrowserRouter>
       <ToastContainer />
        <Navbar />
        {/* All sections in one page */}
        <div id="home"><Header /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </BrowserRouter>
    </div>
  );
};

export default App;
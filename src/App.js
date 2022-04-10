import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Platforms from "./components/Platforms/Platforms";
import Services from "./components/Services/Services";
import Techstack from "./components/Techstack/Techstack";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Products from "./components/Products/Products";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (

    <div className="app">
      
      <Navbar/> 
      <Introduction/>
      <Services/>
      <Platforms/>
      <Products/>
      <Techstack/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <br/>
      <Footer/>

      </div>
  );
}


export default App;





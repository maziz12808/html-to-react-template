import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import HomePage from "./components/homepage";
import About from "./components/about";
import Services from "./components/services";
import ContactUs from "./components/contact-us";

const App = ()=>{
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/contact-us" element={ <ContactUs /> } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
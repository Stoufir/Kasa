import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import NotFound from './NotFound'
import Logement from './Logement'
import About from './About'
import Header from './Header'
import Footer from './Footer'

function Router () { return (
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
)}


export default Router;
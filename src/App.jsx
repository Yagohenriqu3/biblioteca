import { HashRouter as Router, Routes, Route } from'react-router-dom'

import HomePage from "./pages/Home"
import CatalogPage from './pages/CatalogPage'

import './index.css'
import Navmenu from "./components/Navmenu"
import Footer from "./components/footer"
import BotaoWpp from "./components/BotaoWpp"



function App() {

  return (
    <>
    <Router>
      <Navmenu/>

          <Routes>
            <Route path='/' element={<HomePage />}  /> 
            <Route path="/catalogo" element={<CatalogPage/>}/>

          </Routes>
          
      <Footer/>
      <BotaoWpp/>
    </Router>
    </>
  )
}

export default App

import { HashRouter as Router, Routes, Route } from'react-router-dom'

import HomePage from "./pages/Home"
import CatalogPage from './pages/CatalogPage'
import Reserva from './pages/Reserva'

import './index.css'
import ScrollToTop from './components/ScrollToTop'
import Cadastro from './pages/home/Cadastro'
import AdmPage from './pages/AdmPage'
import AddLivro from './pages/AdmPage/AddLivro'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Emprestados from './pages/AdmPage/Emprestados'
import Usuarios from './pages/AdmPage/Usuarios'
import Relatorio from './pages/AdmPage/Relatorio'
import Sobre from './pages/Sobre'
import PerfilUsuario from './pages/user/PerfilUsuario'
import RecuperacaoDeSenha from './pages/RecuperacaoDeSenha'


function App() {

  return (
    <>
    <Router>
      <ScrollToTop/>
          <Routes> 
            <Route element={<Layout/>}>
            <Route path='/' element={<HomePage />}  /> 
            <Route path="/catalogo" element={<CatalogPage/>}/>
            <Route path='/catalogo/reserva' element={<Reserva/>} />
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/login/cadastro' element={<Cadastro/>} />
            <Route path='/login/recuperacaodesenha' element={<RecuperacaoDeSenha/>} />
            <Route path='/perfil' element={<AdmPage/>}/>
            <Route path='/perfil/user' element={<PerfilUsuario/>}/>
            <Route path='/perfil/cadastrodelivro' element={<AddLivro/>} />
            <Route path='/perfil/emprestados' element={<Emprestados/> }/>
            <Route path='/perfil/usuarios' element={<Usuarios/> }/>
            <Route path='/perfil/relatorio' element={<Relatorio/> }/>
            
            </Route>
          </Routes>
          
      
      
    </Router>
    </>
  )
}

export default App

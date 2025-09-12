import { Link } from 'react-router-dom'

export default function Navmenu() {
  return (
    <nav> 
    <div className="navbar bg-base-100 shadow-sm m-auto navmenu mb:mb-3">
        <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to='/'>Homepage</Link></li>
            <li><Link to='/catalogo'>Catálogo</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex-1">
        
        
      </div>
      <div className="flex gap-2">
        
        <div className="dropdown dropdown-end mr-5 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">Nova conta</span>
              </a>
            </li>
            <li><a>Configurações</a></li>
            <li><a>Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  )
}

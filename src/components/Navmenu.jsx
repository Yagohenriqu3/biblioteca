import { Link } from "react-router-dom";

export default function Navmenu() {
  return (
    <nav aria-label="Menu principal">
      <div className="navbar bg-base-100 shadow-sm m-auto navmenu mb:mb-3">
        
        {/* Menu Hamburguer */}
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              aria-label="Abrir menu de navegação"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
            >
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </div>
        </div>

        {/* Espaço central (reservado caso precise) */}
        <div className="flex-1"></div>

        {/* Avatar / Conta do usuário */}
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mr-5">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              aria-label="Abrir menu do usuário"
            >
              <div className="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Avatar do usuário"
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
            >
              <li>
                <Link to="Perfil" className="justify-between">
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="/login/cadastro" className="flex justify-between items-center">
                  Nova conta <span className="badge">+</span>
                </Link>
              </li>
              <li><Link to="/perfil/user">Configurações</Link></li>
              <li><button type="button">Sair</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

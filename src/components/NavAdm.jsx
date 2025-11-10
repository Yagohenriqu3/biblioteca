import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBook, FaUsers, FaChartBar, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/home/livrologo.png"; // ajuste o caminho se necessário

export default function NavAdm() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:flex md:min-h-screen">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-[#0456C0] text-white flex-col p-6 hidden md:flex">
        <div className="flex items-center gap-2 mb-10">
          <FaBook className="w-6 h-6" />
          <h2 className="text-xl font-bold">Admin</h2>
        </div>
        <nav className="flex flex-col gap-4" aria-label="Menu de administração">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/perfil"
                className="flex items-center gap-2 hover:text-blue-300"
              >
                <FaBook className="w-5 h-5" />
                Livros
              </Link>
              <ul>
                <li>
                  <Link
                    to="/perfil/emprestados"
                    className="ml-8 text-[15px] hover:text-blue-300"
                  >
                    Emprestados
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/perfil/usuarios"
                className="flex items-center gap-2 hover:text-blue-300"
              >
                <FaUsers className="w-5 h-5" />
                Usuários
              </Link>
            </li>
            <li>
              <Link
                to="/perfil/relatorio"
                className="flex items-center gap-2 hover:text-blue-300"
              >
                <FaChartBar className="w-5 h-5" />
                Relatórios
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Header - Mobile */}
      <header className="flex items-center justify-between bg-white p-4 md:hidden w-full shadow">
        <button onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <FaBars className="w-6 h-6 text-[#0456C0]" />
        </button>
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo da BiblioTech" className="h-10 w-auto" />
          <h1 className="text-lg font-bold text-[#0456C0]">Admin</h1>
        </div>
      </header>

      {/* Sidebar - Mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile de administração"
        >
          <aside
            className="fixed left-0 top-0 w-64 h-full bg-[#0456C0] text-white p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold">Admin</h2>
              <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Menu de administração mobile">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/perfil"
                    className="flex items-center gap-2 hover:text-blue-300"
                  >
                    <FaBook className="w-5 h-5" />
                    Livros
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/perfil/emprestados"
                        className="ml-8 text-[15px] hover:text-blue-300"
                      >
                        Emprestados
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/perfil/usuarios"
                    className="flex items-center gap-2 hover:text-blue-300"
                  >
                    <FaUsers className="w-5 h-5" />
                    Usuários
                  </Link>
                </li>
                <li>
                  <Link
                    to="/perfil/relatorio"
                    className="flex items-center gap-2 hover:text-blue-300"
                  >
                    <FaChartBar className="w-5 h-5" />
                    Relatórios
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1D232A] text-white">
      <div>
        {/* Logo ou nome da empresa */}
        <div className="flex justify-center pt-10">
          <p className="text-2xl font-bold">BiblioTech</p>
        </div>

        {/* Links de navegação */}
        <nav
          className="flex justify-center mt-4"
          aria-label="Rodapé - links principais"
        >
          <Link to="/" className="p-2">
            Home
          </Link>
          <Link to="/sobre" className="p-2">
            Sobre
          </Link>
          <a
            href="https://wa.me/5521984154881"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            Contato
          </a>
          <Link to="/catalogo" className="p-2">
            Acervo
          </Link>
        </nav>
      </div>

      {/* Copyright */}
      <div className="flex justify-center p-1 pb-10 text-center">
        <small>© 2025 BiblioTech. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

export default Footer;

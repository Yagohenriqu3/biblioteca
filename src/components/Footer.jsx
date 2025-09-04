import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="">
        
        {/* Logo ou nome da empresa */}
        <div className="">
          <p className="">BiblioTech</p>
        </div>

        {/* Links */}
        <div className="">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Serviços</a>
        </div>

        {/* Contato */}
        <div className="">
          <p>Email: clickleiturapiranema@gmail.com</p>
          <p>Telefone: +5521984154881</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="">
        © 2025 Minha Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;

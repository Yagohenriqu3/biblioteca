import { useState } from "react";
import NavAdm from '../components/NavAdm'
import EstruturaAdm from "../components/EstruturaAdm";

export default function PainelAdmin() {
  const [livros] = useState([
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", status: "Disponível" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", status: "Reservado" },
    { titulo: "O Primo Basílio", autor: "José Maria de Eça de Queiroz", status: "Indisponível" },
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", status: "Emprestado" },
    { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", status: "Disponível" },
  ]);



  return (
    <div className="md:flex md:min-h-screen ">
      <NavAdm/>
      
       <EstruturaAdm
        titulo="Painel Administrativo"
        dados={livros}
        colunas={["Título", "Autor", "Status"]}
        chaves={["titulo", "autor", "status"]}
        editar="/perfil/editar-livro"
      />
      
    </div>
  );
}

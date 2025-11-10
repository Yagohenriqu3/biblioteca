import { useState } from "react";
import NavAdm from '../../components/NavAdm'
import EstruturaAdm from "../../components/EstruturaAdm";

export default function Emprestados() {
  const [livros] = useState([
    { titulo: "A Menina que Roubava Livros", aluno: "Carlos", status: "1" },
    { titulo: "Dom Casmurro", aluno: "Jessica", status: "30" },
    { titulo: "O Primo Basílio", aluno: "Paulo", status: "15" },
    { titulo: "Memórias Póstumas de Brás Cubas", aluno: "Henrique", status: "5" },
    { titulo: "A Moreninha", aluno: "Pedro", status: "3" },
  ]);



  return (
    <div className="md:flex md:min-h-screen ">
      <NavAdm/>
      
       <EstruturaAdm
        titulo="Painel Administrativo"
        dados={livros}
        colunas={["Título", "Aluno", "Dias"]}
        chaves={["titulo", "aluno", "status"]}
        editar="/perfil/editar-livro"
      />
      
    </div>
  );
}

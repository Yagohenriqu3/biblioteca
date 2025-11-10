import { useState } from "react";
import NavAdm from '../../components/NavAdm'
import EstruturaAdm from "../../components/EstruturaAdm";

export default function Usuarios() {
const [livros] = useState([
  { usuario: "Ana Souza", contato: "(11) 98877-6655", status:'' },
  { usuario: "Carlos Pereira", contato: "(21) 97654-3322" },
  { usuario: "Mariana Lima", contato: "(31) 98542-1100" },
  { usuario: "João Oliveira", contato: "(41) 99765-4433" },
  { usuario: "Fernanda Costa", contato: "(51) 98433-2211" },
]);





  return (
    <div className="md:flex md:min-h-screen ">
      <NavAdm/>
      
       <EstruturaAdm
        titulo="Painel Administrativo"
        dados={livros}
        colunas={["Aluno", "Contato", ""]}
        chaves={["usuario", "contato", ""]}
        editar="/perfil"
      />
      
    </div>
  );
}

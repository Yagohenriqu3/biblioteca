// EstruturaAdm.jsx
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";
import Logo from "../assets/home/livrologo.png";

export default function EstruturaAdm({ titulo, dados, colunas, chaves, editar }) {
  return (
    <main className="flex-1 bg-gray-100 p-8 w-[100%] md:w-auto">
      {/* Header */}
      <div className="hidden md:flex items-center gap-3 mb-6">
        <img src={Logo} alt="Bibliotech" className="h-16 w-auto" />
        <h1 className="text-2xl font-bold text-[#0456C0]">{titulo}</h1>
      </div>

        <div>
            {/* Add button */}
        <Link to='/perfil/cadastrodelivro'>
          <button className="mb-4 bg-[#0456C0] hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
            + Adicionar Livro
          </button>
        </Link>
        </div>
        
      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow ">
        <table className="w-full table-auto border-collapse ">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              {colunas.map((coluna, idx) => (
                <th key={idx} className="px-4 py-2">{coluna}</th>
              ))}
              <th className="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                {chaves.map((chave, i) => (
                  <td key={i} className="px-4 py-2 text-[#414141] ">{item[chave]}</td>
                ))}
                <td className="px-4 py-2 flex gap-2">
                  <Link to={editar}>
                    <FaEdit className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                  </Link>
                  <button>
                    <FaTrash className="w-5 h-5 text-red-600 hover:text-red-800" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

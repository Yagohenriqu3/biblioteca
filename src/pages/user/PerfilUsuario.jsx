import { useState } from "react";
import { FaBook, FaHistory, FaQrcode } from "react-icons/fa";

export default function PainelPerfil() {
  const [abaAtiva, setAbaAtiva] = useState("historico");

  // Dados fictícios
  const historico = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", data: "01/09/2025" },
    { titulo: "1984", autor: "George Orwell", data: "15/08/2025" },
  ];

  const livrosEmPosse = [
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", devolucao: "30/09/2025" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", devolucao: "05/10/2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-4 mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Yago Henrique</h1>
            <p className="text-gray-500 text-sm">Usuário da Biblioteca</p>
          </div>
        </div>

        {/* Navegação de abas */}
        <div className="md:flex gap-4 mb-6 justify-center items-center">
          <button
            onClick={() => setAbaAtiva("historico")}
            className={`flex items-center justify-center gap-2 w-full mt-2 px-4 py-2 rounded-lg transition ${
              abaAtiva === "historico"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaHistory /> Histórico
          </button>

          <button
            onClick={() => setAbaAtiva("posse")}
            className={`flex items-center justify-center mt-2 w-full gap-2 px-4 py-2 rounded-lg transition ${
              abaAtiva === "posse"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaBook /> Em posse
          </button>

          <button
            onClick={() => setAbaAtiva("qrcode")}
            className={`flex items-cente justify-center mt-2 w-full   gap-2 px-4 py-2 rounded-lg transition ${
              abaAtiva === "qrcode"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaQrcode /> QR Code
          </button>
        </div>

        {/* Conteúdo das abas */}
        {abaAtiva === "historico" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Histórico de empréstimos</h2>
            <ul className="space-y-3">
              {historico.map((livro, i) => (
                <li
                  key={i}
                  className="p-3 bg-gray-50 border rounded-lg shadow-sm flex justify-between"
                >
                  <div>
                    <p className="font-medium text-gray-800">{livro.titulo}</p>
                    <p className="text-sm text-gray-600">{livro.autor}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Devolvido em {livro.data}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {abaAtiva === "posse" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Livros em posse</h2>
            <ul className="space-y-3">
              {livrosEmPosse.map((livro, i) => (
                <li
                  key={i}
                  className="p-3 bg-gray-50 border rounded-lg shadow-sm flex justify-between"
                >
                  <div>
                    <p className="font-medium text-gray-800">{livro.titulo}</p>
                    <p className="text-sm text-gray-600">{livro.autor}</p>
                  </div>
                  <span className="text-sm text-red-500">
                    Devolução até {livro.devolucao}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {abaAtiva === "qrcode" && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-3">QR Code de acesso</h2>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=Reserva%20Biblioteca%20Yago"
              alt="QR Code"
              className="border rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2">
              Apresente este QR Code na entrada da biblioteca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

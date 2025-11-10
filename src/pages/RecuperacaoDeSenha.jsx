import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function RecuperarSenha() {
  const [etapa, setEtapa] = useState(1);
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleEnviarEmail = (e) => {
    e.preventDefault();
    // Aqui você faria a chamada para a API enviar o link/código
    console.log("Email enviado para:", email);
    setEtapa(2);
  };

  const handleRedefinirSenha = (e) => {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Aqui você faria a chamada para redefinir a senha
    console.log("Senha redefinida com sucesso!");
    alert("Senha alterada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-6">
          Recuperação de Senha
        </h1>

        {etapa === 1 && (
          <form onSubmit={handleEnviarEmail} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Email cadastrado
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  required
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#FC951E] text-white py-2 rounded-lg hover:bg-[#ec8208] transition"
            >
              Enviar link de recuperação
            </button>
          </form>
        )}

        {etapa === 2 && (
          <form onSubmit={handleRedefinirSenha} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Nova senha
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  required
                  placeholder="Digite a nova senha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Confirmar senha
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  required
                  placeholder="Confirme a nova senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Redefinir senha
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

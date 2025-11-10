import NavAdm from "../../components/NavAdm";

export default function Relatorio() {
  // Dados fictícios
  const acessos = [
    { usuario: "Ana Silva", data: "2025-09-21 09:15", status: "Autorizado" },
    { usuario: "Carlos Souza", data: "2025-09-21 10:02", status: "Negado" },
    { usuario: "Lucas Lima", data: "2025-09-21 11:20", status: "Autorizado" },
  ];

  const emprestimos = [
    { livro: "Iracema", usuario: "Ana Silva", categoria: "Literatura Brasileira", dataEmprestimo: "2025-09-18", dataDevolucao: "2025-09-25", status: "Ativo" },
    { livro: "Dom Casmurro", usuario: "Carlos Souza", categoria: "Literatura Brasileira", dataEmprestimo: "2025-09-15", dataDevolucao: "2025-09-20", status: "Atrasado" },
    { livro: "O Pequeno Príncipe", usuario: "Lucas Lima", categoria: "Infantil", dataEmprestimo: "2025-09-19", dataDevolucao: "2025-09-26", status: "Ativo" },
    { livro: "Iracema", usuario: "Lucas Lima", categoria: "Literatura Brasileira", dataEmprestimo: "2025-09-10", dataDevolucao: "2025-09-17", status: "Concluído" },
    { livro: "Capitães da Areia", usuario: "Ana Silva", categoria: "Romance", dataEmprestimo: "2025-09-05", dataDevolucao: "2025-09-12", status: "Concluído" },
    { livro: "O Hobbit", usuario: "Carlos Souza", categoria: "Fantasia", dataEmprestimo: "2025-09-01", dataDevolucao: "2025-09-10", status: "Concluído" },
    { livro: "A Hora da Estrela", usuario: "Ana Silva", categoria: "Literatura Brasileira", dataEmprestimo: "2025-09-02", dataDevolucao: "2025-09-09", status: "Concluído" },
  ];

  const reservas = [
    { livro: "Memórias Póstumas de Brás Cubas", usuario: "Ana Silva", dataReserva: "2025-09-20", status: "Ativa" },
    { livro: "O Alquimista", usuario: "Lucas Lima", dataReserva: "2025-09-21", status: "Concluída" },
  ];

  // Função para colorir status
  const statusColor = (status) => {
    switch (status) {
      case "Autorizado":
      case "Ativo":
      case "Ativa":
      case "Concluída":
        return "text-green-600 font-semibold";
      case "Negado":
      case "Atrasado":
        return "text-red-600 font-semibold";
      default:
        return "";
    }
  };

  // --- Estatísticas adicionais ---
  // Contagem de livros
  const livrosCount = emprestimos.reduce((acc, curr) => {
    acc[curr.livro] = (acc[curr.livro] || 0) + 1;
    return acc;
  }, {});
  const livrosMaisLidos = Object.entries(livrosCount)
    .map(([livro, qtd]) => ({ livro, qtd }))
    .sort((a, b) => b.qtd - a.qtd)
    .slice(0, 5);

  // Contagem de categorias
  const categoriasCount = emprestimos.reduce((acc, curr) => {
    acc[curr.categoria] = (acc[curr.categoria] || 0) + 1;
    return acc;
  }, {});
  const categoriasMaisBuscadas = Object.entries(categoriasCount)
    .map(([categoria, qtd]) => ({ categoria, qtd }))
    .sort((a, b) => b.qtd - a.qtd)
    .slice(0, 5);

  // Contagem de alunos
  const alunosCount = emprestimos.reduce((acc, curr) => {
    acc[curr.usuario] = (acc[curr.usuario] || 0) + 1;
    return acc;
  }, {});
  const alunosMaisLeem = Object.entries(alunosCount)
    .map(([usuario, qtd]) => ({ usuario, qtd }))
    .sort((a, b) => b.qtd - a.qtd)
    .slice(0, 5);

  return (
    <div className="md:flex">
      <NavAdm />

      <main className="flex-1 bg-gray-100 p-6 space-y-8 w-full">
        {/* Indicadores rápidos */}
        <div className="flex flex-col md:flex-row gap-6 mb-4 flex-wrap">
          <div className="bg-blue-100 p-4 rounded shadow flex-1 text-center">
            <h2 className="text-lg font-bold">Acessos Hoje</h2>
            <p className="text-2xl">{acessos.length}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow flex-1 text-center">
            <h2 className="text-lg font-bold">Empréstimos Ativos</h2>
            <p className="text-2xl">{emprestimos.filter(e => e.status === "Ativo").length}</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow flex-1 text-center">
            <h2 className="text-lg font-bold">Reservas Ativas</h2>
            <p className="text-2xl">{reservas.filter(r => r.status === "Ativa").length}</p>
          </div>
        </div>

        {/* Tabela de Acessos */}
        <div>
          <h3 className="text-xl font-bold mb-2">Acessos via QR Code</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Usuário</th>
                  <th className="text-left px-4 py-2">Data/Hora</th>
                  <th className="text-left px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {acessos.map((a, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{a.usuario}</td>
                    <td className="px-4 py-2">{a.data}</td>
                    <td className={`px-4 py-2 ${statusColor(a.status)}`}>{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Empréstimos */}
        <div>
          <h3 className="text-xl font-bold mb-2">Empréstimos</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Livro</th>
                  <th className="text-left px-4 py-2">Usuário</th>
                  <th className="text-left px-4 py-2">Categoria</th>
                  <th className="text-left px-4 py-2">Data Empréstimo</th>
                  <th className="text-left px-4 py-2">Data Devolução</th>
                  <th className="text-left px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {emprestimos.map((e, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{e.livro}</td>
                    <td className="px-4 py-2">{e.usuario}</td>
                    <td className="px-4 py-2">{e.categoria}</td>
                    <td className="px-4 py-2">{e.dataEmprestimo}</td>
                    <td className="px-4 py-2">{e.dataDevolucao}</td>
                    <td className={`px-4 py-2 ${statusColor(e.status)}`}>{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Reservas */}
        <div>
          <h3 className="text-xl font-bold mb-2">Reservas Online</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Livro</th>
                  <th className="text-left px-4 py-2">Usuário</th>
                  <th className="text-left px-4 py-2">Data Reserva</th>
                  <th className="text-left px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {reservas.map((r, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{r.livro}</td>
                    <td className="px-4 py-2">{r.usuario}</td>
                    <td className="px-4 py-2">{r.dataReserva}</td>
                    <td className={`px-4 py-2 ${statusColor(r.status)}`}>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Livros mais lidos */}
        <div>
          <h3 className="text-xl font-bold mb-2">Livros Mais Lidos</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Livro</th>
                  <th className="text-left px-4 py-2">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {livrosMaisLidos.map((l, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{l.livro}</td>
                    <td className="px-4 py-2">{l.qtd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Categorias mais buscadas */}
        <div>
          <h3 className="text-xl font-bold mb-2">Categorias Mais Buscadas</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Categoria</th>
                  <th className="text-left px-4 py-2">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {categoriasMaisBuscadas.map((c, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{c.categoria}</td>
                    <td className="px-4 py-2">{c.qtd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Alunos que mais leram */}
        <div>
          <h3 className="text-xl font-bold mb-2">Alunos que Mais Leram</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Aluno</th>
                  <th className="text-left px-4 py-2">Quantidade de Livros</th>
                </tr>
              </thead>
              <tbody>
                {alunosMaisLeem.map((a, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{a.usuario}</td>
                    <td className="px-4 py-2">{a.qtd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";

export default function AddBookForm() {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    genero: "",
    paginas: "",
    ano: "",
    idioma: "",
    sinopse: "",
    localizacao: "",
    capa: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "capa" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, capa: file }));
      setPreview(URL.createObjectURL(file)); // cria preview da imagem
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("📚 Livro adicionado com sucesso!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* CAPA */}
        <div className="flex flex-col items-center">
          <label className="font-semibold mb-2">Capa do Livro</label>
          <input
            type="file"
            name="capa"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 
                      file:px-4 file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
          />

          {/* PRÉ-VISUALIZAÇÃO */}
          {preview && (
            <div className="mt-4 w-40 h-56 border rounded overflow-hidden shadow">
              <img
                src={preview}
                alt="Pré-visualização da capa"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* INFO DO LIVRO */}
        <div className="flex flex-col">
          <label className="font-semibold">Título</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Digite o título"
            className="border rounded px-3 py-2 mt-1"
          />

          <label className="font-semibold mt-3">Autor</label>
          <input
            type="text"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            placeholder="Digite o autor"
            className="border rounded px-3 py-2 mt-1"
          />

          <label className="font-semibold mt-3">Gênero</label>
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            placeholder="Ex: Romance psicológico"
            className="border rounded px-3 py-2 mt-1"
          />

          <div className="flex gap-2 mt-3">
            <div className="flex-1">
              <label className="font-semibold">Páginas</label>
              <input
                type="number"
                name="paginas"
                value={formData.paginas}
                onChange={handleChange}
                placeholder="Ex: 188"
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </div>

            <div className="flex-1">
              <label className="font-semibold">Ano</label>
              <input
                type="number"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                placeholder="Ex: 1874"
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </div>
          </div>

          <label className="font-semibold mt-3">Idioma</label>
          <input
            type="text"
            name="idioma"
            value={formData.idioma}
            onChange={handleChange}
            placeholder="Ex: Português"
            className="border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* SINOPSE */}
        <div className="md:col-span-2">
          <label className="font-semibold">Sinopse</label>
          <textarea
            name="sinopse"
            value={formData.sinopse}
            onChange={handleChange}
            rows="4"
            placeholder="Digite a sinopse do livro"
            className="border rounded px-3 py-2 mt-1 w-full"
          ></textarea>
        </div>

        {/* LOCALIZAÇÃO */}
        <div className="md:col-span-2">
          <label className="font-semibold">Localização na Biblioteca</label>
          <input
            type="text"
            name="localizacao"
            value={formData.localizacao}
            onChange={handleChange}
            placeholder="Ex: Estante 5 Prateleira 3"
            className="border rounded px-3 py-2 mt-1 w-full"
          />
        </div>

        {/* BOTÃO */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Adicionar Livro
          </button>
        </div>
      </form>
    </div>
  );
}

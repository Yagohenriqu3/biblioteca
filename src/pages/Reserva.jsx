import Capa from '../assets/home/capasDeLivro/img1.png';

export default function Reserva() {
  return (
    <main className="flex justify-center">
      <article className="flex flex-col md:flex-row md:w-[70vw] justify-between items-center bg-white rounded-2xl p-6">
        
        {/* Imagem do livro */}
        <figure className="basis-[41%] hidden md:block">
          <img src={Capa} alt="Capa do livro Iracema" className="rounded" />
        </figure>

        {/* Conteúdo do livro */}
        <section className="basis-[58%] p-6">
          <header className="md:mb-5">
            <h1 className="text-4xl font-bold text-[#1E6FA9] mb-5">Iracema</h1>
          </header>

          {/* Imagem mobile */}
          <figure className="mb-1 mt-1 block md:hidden">
            <img src={Capa} alt="Capa do livro Iracema" className="rounded" />
          </figure>

          {/* Opções de empréstimo */}
          <section className="text-[#414141] mb-5 mt-5">
            <h2 className="text-lg font-semibold mb-2">Pegar emprestado por:</h2>
            <ul className="flex text-center flex-wrap">
              {['5 dias','10 dias','15 dias','20 dias','30 dias'].map((item, index) => (
                <li
                  key={index}
                  className={`p-1 pl-3 pr-3 rounded-[5px] cursor-pointer m-1 ${
                    item === '5 dias' ? 'text-white bg-[#1E6FA9]' : 'text-[#414141] bg-white border'
                  } hover:scale-105 duration-150`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-white text-[1.2em] bg-[#FC951E] cursor-pointer rounded-[5px] p-1 pl-3 pr-3 hover:bg-[#d6780c] duration-300 mt-5 w-full">
              Reservar
            </button>
          </section>

          {/* Informações do livro */}
          <section className="mb-5">
            <h3 className="text-[1em] text-[#414141]"><b>Gênero:</b> Romantismo brasileiro</h3>
            <h3 className="text-[1em] text-[#414141]"><b>Autor:</b> José de Alencar</h3>

            <div className="flex text-[#414141] mb-5 mt-5 flex-wrap gap-2">
              <p className="font-bold">Páginas: 100</p>
              <span>|</span>
              <p className="font-bold">Publicação: 1995</p>
              <span>|</span>
              <p className="font-bold">Idioma: Português</p>
            </div>
          </section>

          {/* Sinopse */}
          <section className="mb-5">
            <h2 className="text-[#1E6FA9] font-bold mb-2">Sinopse:</h2>
            <p className="text-[#414141]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex asperiores assumenda, illum quis quos tempore vel natus quisquam commodi, quod, voluptates earum! Libero deserunt nulla numquam quisquam dolores sunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nostrum dolore pariatur aut, esse id consequuntur vitae dolor enim quibusdam laborum alias vero maiores necessitatibus impedit iusto sit inventore soluta!
            </p>
          </section>

          {/* Localização */}
          <section>
            <h2 className="text-[#1E6FA9] font-bold mb-2">Localização do livro na biblioteca</h2>
            <div className="flex flex-wrap gap-2">
              <p className="text-[#414141] font-bold">Estante 5</p>
              <span>|</span>
              <p className="text-[#414141] font-bold">Prateleira 2</p>
            </div>
          </section>
        </section>
      </article>
    </main>
  );
}

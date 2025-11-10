import Banner from "../../assets/home/bibliotechimg3.png";
import Bannermb from "../../assets/home/livrologo.png";
import { Link } from "react-router-dom";

export default function BannerContato() {
  return (
    <section className="flex justify-center md:items-center">
      <div className="md:flex md:items-center w-[100vw] md:w-[90vw] flex-row h-auto">
        
        {/* Imagem principal - Desktop */}
        <figure className="w-full md:w-[55vw] hidden md:block">
          <img
            src={Banner}
            alt="Bibliotech - conectados pela leitura"
            className="w-[100%] h-full"
          />
        </figure>

        {/* Versão Mobile */}
        <div className="flex-col w-full items-center md:w-[65vw] flex md:hidden">
          <div className="w-[100%] flex flex-col items-center justify-center">
            <img
              src={Banner}
              alt="Bibliotech - conectados pela leitura"
              className="w-[100vw]"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-[#414141] p-10 text-3xl mt-15 mb-15">
              Explore o acervo online do Colégio Estadual Piranema, reserve seu
              livro e retire com facilidade na biblioteca.
            </p>
          </div>
          <div className="flex justify-center mt-25">
            <img
              src={Bannermb}
              alt="Logo da Bibliotech"
              className="w-[50%]"
            />
          </div>
        </div>

        {/* Texto e botão */}
        <div className="flex flex-col items-center md:h-full justify-center md:w-[35vw] pt-1">
          <div className="flex flex-col md:content-center items-center p-6 md:ml-1 md:h-full md:w-auto w-[90vw] md:rounded-md rounded-2xl mt-5 mb-15">
            
            {/* Texto destaque desktop */}
            <h2 className="text-[#414141] text-left md:text-[#0456BF] text-[1.6rem] font-bold hidden md:block">
              Explore o acervo online do Colégio Estadual Piranema, reserve seu
              livro e retire com facilidade na biblioteca.
            </h2>

            {/* Texto destaque mobile */}
            <p className="text-[#414141] text-center md:text-[#1755C2] text-[1.6rem] font md:mt-2 mt-[-50px] block md:hidden">
              Encontre sua próxima leitura em nosso catálogo
            </p>

            {/* CTA */}
            <Link to="/catalogo">
              <button className="text-white text-[1.5em] bg-[#FC951E] font-bold cursor-pointer rounded-xl p-2 pl-5 pr-5 hover:bg-[#d6780c] duration-300 mt-5">
                Ir para o acervo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

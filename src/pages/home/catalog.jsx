import CardCatalog from "../../components/CardCatalog";
import Livro from "../../assets/home/livro.png";
import Carousel from "./Carousel";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../../assets/home/capasDeLivro/img1.png";
import img2 from "../../assets/home/capasDeLivro/img2.png";
import img3 from "../../assets/home/capasDeLivro/img3.png";
import img4 from "../../assets/home/capasDeLivro/img4.png";
import img5 from "../../assets/home/capasDeLivro/img5.png";

export default function Catalog() {
  return (
    <main className="flex justify-center md:mt-2 mb-15">
      <div className="md:flex w-[90vw] justify-center">
        
        {/* Coluna esquerda */}
        <aside className="catalog-left flex-col basis-[30%]">
          <figure className="catalog-left-top hidden md:block">
            <img src={Livro} alt="Ícone de livro aberto" />
          </figure>

          <div className="h-auto hidden md:block">
            <Carousel />
          </div>

          <section className="hidden md:flex">
            <div className="flex-col content-center p-6 text-[#414141] ml-1 mb-1 bg-[#ffffff] text-[1.2rem] h-[48%] rounded-[10px]">
              <h2 className="text-[1.2em] font-bold text-[#1E6FA9]">
                Entre em contato
              </h2>
              <address className="not-italic">
                <p className="flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]">
                  <FaWhatsapp className="mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9]" />
                  +55 21 98415-4881
                </p>
                <p className="flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]">
                  <FaEnvelope className="mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9]" />
                  clickleiturapiranema@gmail.com
                </p>
                <p className="flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]">
                  <FaPhone className="mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9]" />
                  +55 21 98415-4881
                </p>
                <p className="flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]">
                  <FaMapMarkerAlt className="mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9]" />
                  Rua 12, Piranema - Itaguaí - Rio de Janeiro
                </p>
              </address>
              <div className="flex flex-col items-center">
                <Link to="/catalogo">
                  <button className="text-white text-[1em] bg-[#FC951E] font-bold cursor-pointer rounded-xl p-2 pl-5 pr-5 hover:bg-[#d6780c] duration-300 mt-5">
                    Contate-nos
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </aside>

        {/* Coluna direita */}
        <section className="catalog-right flex-col md:basis-[70%] w-[92vw]">
          <header>
            <h2 className="text-[#1e6fa9] text-3xl font-bold ml-3 mt-5">
              Destaques
            </h2>
          </header>

          <div className="flex">
            <div className="md:flex w-[100%]">
              <section className="catalog-cards flex overflow-x-auto flex-wrap">
                {[img1, img2, img3, img4, img5, img1, img1, img1, img1, img1, img1, img1, img1, img1, img1].map(
                  (img, index) => (
                    <article key={index}>
                      <CardCatalog
                        img={img}
                        titulo="Título do livro"
                        descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                        to={"catalogo/reserva"}
                      />
                    </article>
                  )
                )}
              </section>

              {/* Botão ver mais (mobile) */}
              <div className="flex justify-center block md:hidden">
                <Link to="/catalogo">
                  <button className="text-white text-[1.5em] bg-[#FC951E] font-bold cursor-pointer rounded-xl p-2 pl-5 pr-5 hover:bg-[#d6780c] duration-300 mt-5">
                    Ver mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

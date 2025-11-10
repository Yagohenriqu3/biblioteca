import CardCatalog from "../components/CardCatalog";
import img1 from '../assets/home/capasDeLivro/img1.png'
import img2 from '../assets/home/capasDeLivro/img2.png'
import img3 from '../assets/home/capasDeLivro/img3.png'
import img4 from '../assets/home/capasDeLivro/img4.png'
import img5 from '../assets/home/capasDeLivro/img5.png'
import bannerlivros from '../assets/bannerlivros.jpg'



export default function CatalogPage() {
  return (
    <div className="mb-20">
        <div >
          <img src={bannerlivros} alt="" />
        </div>
        <div className="m-10">
          <h1 className="text-[#414141] text-3xl font-bold ">Catálogo de livros</h1>
        </div>
        <div className="mb-15">
      
          <h2 className="text-[#1e6fa9] ml-10 text-2xl font-bold">Ficção</h2>
          <div className="flex overflow-auto">
              <CardCatalog 
              titulo={'Título do livro'}
                img={img1}
                to="reserva"
              />
              <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img3}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img4}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img5}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img1}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>

          </div>
        </div>

        <div className="mb-15">
      
          <h2 className="text-[#1e6fa9] ml-10 text-2xl font-bold">Aventura</h2>
          <div className="flex overflow-auto">
              <CardCatalog 
              titulo={'Título do livro'}
                img={img3}
                to="reserva"
              />
              <CardCatalog
              titulo={'Título do livro'}
                img={img5}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img4}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img3}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img1}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img5}
                to="reserva"/>

          </div>
        </div>

        <div className="mb-15">
      
          <h2 className="text-[#1e6fa9] ml-10 text-2xl font-bold">Romance</h2>
          <div className="flex overflow-auto">
              <CardCatalog 
              titulo={'Título do livro'}
                img={img1}
                to="reserva"
              />
              <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img3}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img4}
                to="reserva"/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img5}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img1}
                to="reserva"/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img2}
                to="reserva"/>

          </div>
        </div>

        <div className="mb-15">
      
          <h2 className="text-[#1e6fa9] ml-10 text-2xl font-bold">Ação</h2>
          <div className="flex overflow-auto">
              <CardCatalog 
              titulo={'Título do livro'}
                img={img3}
              />
              <CardCatalog
              titulo={'Título do livro'}
                img={img5}/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img4}/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img3}/>
              <CardCatalog
              titulo={'Título do livro'}
                img={img2}/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img1}/>
                <CardCatalog
              titulo={'Título do livro'}
                img={img5}/>

          </div>
        </div>

       

    </div>
  )
}

import CardCatalog from "./CardCatalog";
import Livro from '../assets/home/livro.png'
import Bannerlivros from '../assets/home/Bannerlivros.png'

import img1 from '../assets/home/capasDeLivro/img1.png'
import img2 from '../assets/home/capasDeLivro/img2.png'
import img3 from '../assets/home/capasDeLivro/img3.png'
import img4 from '../assets/home/capasDeLivro/img4.png'
import img5 from '../assets/home/capasDeLivro/img5.png'

import './Catalog.css'

export default function catalog() {
  return (
    <div className="catalog">
        <div className="catalog-left">
            <div className="catalog-left-top">
                <img src={Livro} alt="" />
            </div>
            <div className="catalog-left-bottom">
                <img src={Bannerlivros} alt="" />
            </div>
        </div>
        <div className="catalog-right">
            <div>
                pesquisa
            </div>

            <div>
                <div className="catalog-cards">
                    <CardCatalog
                    img={img1}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img2}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img3}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img4}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img5}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img1}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                </div>
                
                <div className="catalog-cards">
                    <CardCatalog
                    img={img1}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img2}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img3}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img4}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img5}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                    <CardCatalog 
                    img={img1}
                    titulo="Título do livro"
                    descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti enim dolorem beatae consequuntur"
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

import Catalog from './home/catalog'
import InfoContato from './home/InfoContato';
import Leitura from '../assets/home/leitura.jpg'
import BannerContato from './home/BannerContato';
import { Link } from 'react-router-dom'
export default function HomePage() {

    return(
        
        <div className='container-home'>
            <BannerContato/>
            <Catalog/>
             <article className="flex flex-col md:flex-row md:w-[80vw] justify-center items-center  mx-auto bg-white rounded-2xl m-10  ">
                <img src={Leitura} alt="livros"  className='md:w-[30vw]'/>
                <p className="text-[#414141] text-2xl p-2 m-2 mb-10 text-center">
                    A leitura é uma ferramenta essencial para o crescimento pessoal e acadêmico. Ela amplia o conhecimento, estimula a imaginação, desenvolve a criatividade e fortalece a capacidade de comunicação. Ler abre portas para novas ideias, promove o pensamento crítico e prepara cada estudante para os desafios do futuro.
                </p>
            </article>

            <InfoContato/>
           
        </div>
    )
}


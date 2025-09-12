import CardCatalog from "../../components/CardCatalog";
import Livro from '../../assets/home/livro.png'
import Carousel from './Carousel'

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom'

import img1 from '../../assets/home/capasDeLivro/img1.png'
import img2 from '../../assets/home/capasDeLivro/img2.png'
import img3 from '../../assets/home/capasDeLivro/img3.png'
import img4 from '../../assets/home/capasDeLivro/img4.png'
import img5 from '../../assets/home/capasDeLivro/img5.png'



export default function catalog() {
  return (
    <div className="flex justify-center  md:mt-2 mb-15">
        <div className="md:flex w-[90vw] justify-center">
            <div className="catalog-left flex-col basis-[30%] "> 
                <div className="catalog-left-top hidden md:block">
                    <img src={Livro} alt="" />
                </div>
                <div className="h-auto hidden md:block">
                    <Carousel/>
                </div>
                <div className="flex hidden md:block ">
                        <div className="flex-col content-center  p-6 text-[#414141]  ml-1 mb-1 bg-[#ffffff]  text-[1.2rem] h-[48%] rounded-[10px] ">
                                  <h2 className='text-[1.2em] font-bold text-[#1E6FA9] '>Entre em contato</h2>
                                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaWhatsapp className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] font' /> +5521984154881</p>
                                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaEnvelope className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] ' />clickleiturapiranema@gmail.com</p>
                                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaPhone className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] ' />+5521984154881</p>
                                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaMapMarkerAlt className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] ' />Rua 12, Piranema - Itaguaí - Rio de Janeiro</p>
                                  <div className="flex flex-col items-center">
                                    <Link to='/catalogo'>
                                    <button className='text-white text-[1em] bg-[#FC951E] font-bold cursor-pointer rounded-xl p-2 pl-5 pr-5 hover:bg-[#d6780c] duration-300 mt-5'>Contate-nos</button>
                                    </Link>
                                  </div>
                        </div>
                    </div>
            </div>
            <div className="catalog-right flex-col basis-[70%]">
                <div>
                    <h2 className="text-[#1e6fa9] text-3xl font-bold ml-3 mt-5">
                        Destaques
                    </h2>
                </div>

                <div className="flex">
                    <div className="md:flex w-[100%]">
                        <div className="catalog-cards flex md:flex-col  overflow-x-auto" >
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
                        
                        <div className="catalog-cards flex md:flex-col overflow-auto ">
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

        </div>
    </div>
  )
}

import Banner from '../../assets/home/banner.png'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import '../home.css'

export default function BannerContato() {
  return (
    <div className='home'>

                <div className="coluna home-left">
                    <div className='home-left-top'>
                        <p>Um projeto do Colégio Estadual Piranema que usa tecnologia e inteligência artificial para tornar o acesso à biblioteca mais fácil, rápido e inovador. Descubra, explore e leia de forma prática!</p>
                    </div>

                    <div className='home-left-bottom'>
                        <h2>Entre em contato</h2>
                        <p><FaWhatsapp className='contato-icon' /> +5521984154881</p>
                        <p><FaEnvelope className='contato-icon' />clickleiturapiranema@gmail.com</p>
                        <p><FaPhone className='contato-icon' />+5521984154881</p>
                        <p><FaMapMarkerAlt className='contato-icon' />Rua 12, Piranema - Itaguaí - Rio de Janeiro</p>
                    </div>
                </div>

                <div className="coluna home-right"> 
                <img src={Banner} alt="Seu livro favorito em um clique" />
                </div>
                
            </div>
  )
}

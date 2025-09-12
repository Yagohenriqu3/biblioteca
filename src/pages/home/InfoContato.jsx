import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function InfoContato() {
  return (
    <div className="flex block md:hidden ">
        <div className="flex-col content-center  p-6 text-[#414141]  ml-1 mb-1 bg-[#ffffff]  text-[1.2rem] h-[48%] ">
                  <h2 className='text-[1.2em] font-bold text-[#1E6FA9] '>Entre em contato</h2>
                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaWhatsapp className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] font' /> +5521984154881</p>
                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaEnvelope className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] ' />clickleiturapiranema@gmail.com</p>
                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaPhone className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] ' />+5521984154881</p>
                  <p className='flex items-center pb-1 pt-1 text-[1rem] md:text-[1em]'><FaMapMarkerAlt className='mr-1 md:mr-2 md:text-[1em] text-[1rem] text-[#1e6fa9] ' />Rua 12, Piranema - Itaguaí - Rio de Janeiro</p>
                  <div className="flex flex-col items-center">
                    <button className='text-white text-[1.5em] bg-[#FC951E] font-bold cursor-pointer rounded-xl p-2 pl-5 pr-5 hover:bg-[#d6780c] duration-300 mt-5'>Contate-nos</button>
                  </div>
        </div>
    </div>
  )
}

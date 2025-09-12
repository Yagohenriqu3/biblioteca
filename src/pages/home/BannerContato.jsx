import Banner from '../../assets/home/bibliotechimg3.png'
import Bannermb from '../../assets/home/livrologo.png'
import { Link } from 'react-router-dom'


export default function BannerContato() {
  return (
    <div className="flex justify-center">
        <div className="md:flex w-[100vw] md:w-[90vw] flex-row  h-auto  md:bg-white">
            <div className='w-full md:w-[65vw] hidden md:block'>
              <img src={Banner} alt="Bibliotech - conectados pela leitura" className='w-[100%] h-full' />
          </div>
           
           <div className=' flex flex-col  p-2 w-full items-center  md:w-[65vw] block md:hidden'>
             <div className='w-[100%] flex flex-col items-center justify-center'> 
                <img src={Bannermb} alt="Bibliotech - conectados pela leitura" className='w-[50vw]' />
             </div>
              <div className='flex flex-col text-center'>
                  <h1 className='text-[#1e6fa9] font-bold text-5xl pt-4'>Bibliotech</h1>
                  <h2 className='text-[#414141] text-2xl'>Conectados pela leitura</h2>
                  
                  <p className='text-[#414141] text-2xl mt-15 mb-15'>Explore o catálogo online do Colégio Estadual Piranema, reserve seu livro e retire com facilidade na biblioteca.</p>
                  
              </div>
          </div>
          
          <div className='flex flex-col items-center  md:h-full justify-center  md:w-[35vw]
           pt-1'>
            <div className="flex flex-col md:content-center items-center  p-6 md:ml-1 bg-[#ffffff83]  md:h-full md:w-auto w-[90vw]    md:rounded-md rounded-2xl mt-5 mb-15">
                  <p className=' text-[#414141] text-left md:text-[#1755C2] text-[1.6rem] font-bold text-center  hidden md:block'>Explore o catálogo online do Colégio Estadual Piranema, reserve seu livro e retire com facilidade na biblioteca.
                    
                  </p>

                  <p className=' text-[#414141] text-center md:text-[#1755C2] text-[1.6rem] font text-center mt-2 block md:hidden'>Encontre sua próxima leitura em nosso catálogo</p>

                  <Link to='/catalogo'><button className='text-white text-[1.5em] bg-[#FC951E] font-bold cursor-pointer rounded-xl p-2 pl-5 pr-5 hover:bg-[#d6780c] duration-300 mt-5'>Ir para o catálogo</button></Link>
            </div> 
               
          </div>
              
      </div>
    </div>
  )
}

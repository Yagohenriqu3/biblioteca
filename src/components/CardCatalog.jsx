import { Link } from 'react-router-dom'
export default function CardCatalog({img, titulo, descricao, to}) {
  return (
    <div>
       <Link to={to}>
    <div className='flex bg-white p-3 m-2 rounded-[10px] shadow-2xs w-[10em] h-[15em] md:w-[13em]  md:h-[20em] hover:scale-105 duration-150'>
        <div className='flex-col w-[100vw]  md:w-[100%] items-center'>
         
            <div className='  h-full'>
              <img src={img}  alt="Imagem do card" className=' h-[90%] w-full' />
              <h2 className='text-[#1e6fa9] font-bold text-center pt-2'>{titulo}</h2>
            </div>
            {/* <div className='flex-col p-1  ml-2'>
                
                {/*<p className='text-[#414141]'>
                    {descricao} 
                </p>
                
                
                <button className='text-white text-[1.2em] bg-[#FC951E]  cursor-pointer rounded-xl p-1 pl-3 pr-3 hover:bg-[#d6780c] duration-300 mt-5'>Reservar</button>
               
            </div>
            */}
             
        </div>
       
    </div>
     </Link>
    </div>
    
    
  )
}

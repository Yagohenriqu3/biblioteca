
export default function CardCatalog({img, titulo, descricao}) {
  return (
    <div className='CardCatalog flex bg-white p-3 m-2 rounded-2xl shadow-2xs w-[90vw] md:w-[auto]'>
        <div className='flex w-[100vw]  md:w-auto items-center'>
            <div className='basis-[30%]  '>
              <img src={img}  alt="Imagem do card" />
            </div>
            <div className='flex-col p-1  basis-[70%] ml-2'>
                <h2 className='text-[#1e6fa9] font-bold'>{titulo}</h2>
                <p className='text-[#414141]'>
                    {descricao} 
                </p>
                <button className='text-white text-[1.2em] bg-[#FC951E]  cursor-pointer rounded-xl p-1 pl-3 pr-3 hover:bg-[#d6780c] duration-300 mt-5'>Reservar</button>
            </div>
        </div>
    </div>
  )
}

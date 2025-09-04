import './CardCatalog.css'

export default function CardCatalog({img, titulo, descricao, link}) {
  return (
    <div className='CardCatalog'>
        <div>
            <div>
              <img src={img} alt="Imagem do card" />
            </div>
            <div >
                <h2 >{titulo}</h2>
                <p>
                    {descricao} 
                </p>
                <button>
                Reservar
                </button>
            </div>
        </div>
    </div>
  )
}

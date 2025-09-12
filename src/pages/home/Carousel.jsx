import img1 from '../../assets/home/capasDeLivro/img1.png'
import img2 from '../../assets/home/capasDeLivro/img2.png'
import img3 from '../../assets/home/capasDeLivro/img3.png'
import img4 from '../../assets/home/capasDeLivro/img4.png'

export default function Carousel() {
  return (
    <div className='flex justify-center m-5'>
      <div className="carousel w-[80vw] md:w-auto md:h-auto">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button 
              onClick={() => document.getElementById("slide4").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❮
            </button>
            <button 
              onClick={() => document.getElementById("slide2").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❯
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button 
              onClick={() => document.getElementById("slide1").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❮
            </button>
            <button 
              onClick={() => document.getElementById("slide3").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❯
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button 
              onClick={() => document.getElementById("slide2").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❮
            </button>
            <button 
              onClick={() => document.getElementById("slide4").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❯
            </button>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button 
              onClick={() => document.getElementById("slide3").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❮
            </button>
            <button 
              onClick={() => document.getElementById("slide1").scrollIntoView({ behavior: "smooth" })} 
              className="btn btn-circle">❯
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

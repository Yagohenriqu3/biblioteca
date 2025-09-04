import Catalog from '../components/catalog'
import './home.css'
import BannerContato from './home/BannerContato';

const HomePage = () =>{


    return(
        
        <div className='container-home'>
            <BannerContato/>
            <Catalog/>
        </div>
    )
}

export default HomePage
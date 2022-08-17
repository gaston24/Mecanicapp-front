import { useParams } from 'react-router-dom';
import Slider from './Slider';
import Articles from './Articles';
import Sidebar from './Sidebar';

const Parametros = ()=>{
    
    let { search } =useParams();
    
    return(
      
        <div id="blog">
        <Slider
            title={'Busqueda :'+ search}
            size="slider-small"
        />
        <div className='center'>
            <div id="content">
             <Articles 
             busqueda={search}
             />
            </div>
            <Sidebar
                blog="true" />
        </div>
    </div>

    )
}
export default Parametros;
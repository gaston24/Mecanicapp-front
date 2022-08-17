import React, { Component } from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from "./Articles";
import Params from "./Params";
import { useParams } from 'react-router-dom';


// Parametros();
class Search extends Component {
 
    render() {
   
        // let Params = useParams();
  

    //     console.log( "acacacaac",this.props )
    //     return this.props.params
    // let busqueda = this.props.match.params.search
        return (
         

            <div id="blog">
                <Slider
                    title={'Busqueda :'}
                    size="slider-small"
                />
                <div className='center'>
                    <div id="content">
                     <Articles   />
                    </div>
                    <Sidebar
                        blog="true" />
                </div>
            </div>
        )
    }
}
export default Search;    
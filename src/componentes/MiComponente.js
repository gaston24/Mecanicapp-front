import React,{Component, Fragment} from "react";


class MiComponente extends Component{

    render () {
        let receta ={
            nombre:"pizza",
            ingredientes:['Tomate','Queso','Harina'],
            calorias:400

        }


        return (
            <React.Fragment>
            <h1>{receta.nombre}</h1>
            <h2>{'calorias' + receta.calorias}</h2>
            <ol>
            {
                receta.ingredientes.map((ingrediente,i) =>{
                 
                    return (
                    <li >
                        {ingrediente}
                    </li>
                    );  
                })
            }
            </ol>
            <hr/>
            </React.Fragment>
        )
    }
     
}

export default MiComponente;
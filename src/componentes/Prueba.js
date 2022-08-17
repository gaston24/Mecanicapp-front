import React,{Component} from "react";
// import MiComponente from '../componentes/MiComponente';



class Prueba extends Component{
     contador = 0;
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         contador : 0
    //     };
    state = {
    contador : 0
    };
    
    sumar = ()=>{
    //    this.state.contador =this.state.contador+1
    this.setState({
        contador:(this.state.contador + 1)
    })    ;
    // this.contador = this.contador +1;
    }
    
    restar = ()=>{
        // this.contador = this.contador -1;
        // this.state.contador =this.state.contador-1
        this.setState({
            contador:(this.state.contador - 1)
        });
    }


    texto=(a,b)=>{
        let presentacion = 
         (
             <div>
             <h2>hola,como estas {a}</h2>
             <h3>tengo {b}</h3>
             </div>
         )
        return presentacion
       }
       


    render(){
        let nombre  = "Hamelin"
        return(
            <section id="content">
            <h2 className="subheader">Últimos artículos</h2>
            <p>
                Hola bienvenido Hamelin
            </p>
            <h2 className="subheader">Funciones y JSX Basico</h2>

            {
            this.texto(nombre,21)
            }
            <h2 className="subheader">Componentes</h2>
  
            <section className='componentes'>  
              {/* <MiComponente />     */}
           
            </section>
            <h2 className="subheader">Estado</h2>
            <p>
            Contador :{this.state.contador}    
            </p>
            <p>
            <input type="button" value="sumar" onClick={this.sumar}></input>
            <input type="button" value="restar" onClick={this.restar}></input>

            </p>
        </section>  
        );
    }
}

export default Prueba;
import React, { Component } from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';


class Blog extends Component {

    NombreRef = React.createRef();
    ApellidoRef = React.createRef();
    BioRef = React.createRef();
    HRef = React.createRef();
    MRef = React.createRef();
    ORef = React.createRef();
    state= {
        user:  {}
    };


    recibirFormulario = (e) => {
        e.preventDefault()
        let genero= "hombre"
        if (this.MRef.current.checked){
        genero= "mujer"   
        }else if(this.ORef.current.checked){
        genero ="otro"    
        }

        var user = {
            nombre:this.NombreRef.current.value,
            Apellido:this.ApellidoRef.current.value,
            Bio:this.BioRef.current.value,
            genero:genero

        }
        this.setState({
            user:user
        });
        console.log(user)
    }
    render() {

        return (
            <div id="Formulario">
                <div className='center'>
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {this.state.user.nombre &&
                        <div id="userData">
                            <p>Nombre:<strong>{this.state.user.nombre}</strong></p>
                            <p>Apellido:<strong>{this.state.user.Apellido}</strong></p>   
                            <p>Biografia:<strong>{this.state.user.Bio}</strong></p>   
                            <p>genero:<strong>{this.state.user.genero}</strong></p>   

                        </div>

                        }


                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre" >Nombre</label>
                                <input type="text" name="nombre" ref={this.NombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.ApellidoRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.BioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.HRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.MRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.ORef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>

                    </div>
                    <Sidebar
                    />
                </div>
            </div>
        )
    }
}
export default Blog;
import React, { Component, Fragment } from "react";
import './Pelicula';
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
    state = {};
    favorita = (pelicula) => {

        this.setState({
            favorita: pelicula
        })


    }
    cambiarTitulo = () => {
        var { peliculas } = this.state;

        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }
    componentWillMount() {
        // alert("se va a montar el componente ")
        this.setState({
            peliculas: [
                {
                    titulo: "Batman vs Superman",
                    image: "https://pasionporelcine.net/wp-content/uploads/2016/08/Batman-y-Superman.jpg"

                },
                {
                    titulo: 'Gran torino',
                    image: "https://www.artmajeur.com/medias/hd/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg"
                },
                {
                    titulo: 'looper',
                    image: 'https://i.ytimg.com/vi/saFTX1pG_7Q/hqdefault.jpg'
                }
            ],
            nombre: 'Hamelin',
            favorita: {}
        })


    }
    // componentDidMount(){
    //     alert("se monto el componente")
    // }
    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        return (
            <div>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">listado de Peliculas</h2>
                        <p>Seleccion de Las Peliculas Favoritas de {this.state.nombre}</p>
                        <div>
                            <button onClick={this.cambiarTitulo}>Cambiar batititulo</button>
                        </div>
                        {this.state.favorita.titulo ? (

                            <p className="Favorita" style={pStyle}>
                                <strong>La Pelicula favorita es: </strong>
                                <span>{this.state.favorita.titulo}</span>
                            </p>
                        ) : (
                            <p>No Hay Pelicula Favorita</p>
                        )
                        }
                        <div id='articles' className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            marcarFavorito={this.favorita}
                                        />
                                    )

                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                    />
                </div>
            </div>
        );

    }



}

export default Peliculas; 

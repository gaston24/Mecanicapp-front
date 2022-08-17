import axios from "axios";
import React, { Component } from "react";

import Global from "../Global";
import Moment from "react-moment";
import 'moment/locale/es';



class Articles extends Component {
    url = Global.url
    state = {
        articles: {},
        status: "failed"
    }
    token = this.props.token
    
    componentWillMount() {
        var search = this.props.busqueda
       
        if(search && search != "null"){
          
            this.getArticlesBySearch(search);
        }else{
 
            this.getArticles();    
        }
        }

    getArticlesBySearch = (search) => {
        axios.get(this.url+'search/'+search)
            .then(res => {

                    
                this.setState({
                    articles: res.data.articles,
                    status: "succes"
                    
                })
    
            })
            .catch(err=>{
                this.setState({
                    articles: [],
                    status: "succes"
                    
                })
            })
            
    }


    getArticles = () => {
      
        let token = localStorage.getItem('token')
            
        
      

        const config = {
            method: 'get',
            url: this.url+'article',
            headers : {
                "Content-Type": "application/json",
                "auth-token": token
              }
        }


        axios(config)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: "succes"
                    
                })
            });
    }
   

    render() {
        if (this.state.articles.length >= 1) {
      
            let listarticle = this.state.articles.map((article) => {
                return (
                    <article key={article._id} className="article-item" id="article-template">
                        <div className="image-wrap">
                            {article.image !== null ? (
                                <img src={this.url+'get-image/'+article.image} alt={article.title} />
                                ) : (
                                <img src="https://www.artmajeur.com/medias/hd/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg" alt={article.title} />

                                )
                            }
                        </div>

                        <h2>{article.title}</h2>
                        <span className="date">
                          <Moment locale="es" fromNow>{article.date}</Moment>
                        </span>
                        
                        <a href={'/blog/articulo/'+article._id} >Leer más</a>

                        <div className="clearfix"></div>
                    </article>
                );
            })
            return (
                <div id="articles">
                    {listarticle}
                </div>

            )
        } else if (this.state.articles.length === 0 && this.state.status === "succes") {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay Articulos</h2>
                    <p>Todavia no Hay contenido en esta seccion</p>
                </div>

            )

        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>

            )
        }



    }

}
export default Articles;
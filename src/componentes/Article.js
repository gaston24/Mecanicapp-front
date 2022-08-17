import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import Global from '../Global';
import Sidebar from "./Sidebar";
import Pruebaparams from "./pruebaparams"
import Parametros from "./Params";

// import { useParams } from "react-router-dom";







class Article extends Component {

    // params = useParams();
    // idV = this.idV
    // id = Hola();



    state = {
        article: {},
        status: null
    };

    componentWillMount() {
        this.getArticle();

        // this.YourComponent();
    }






    getArticle = () => {
        // Opción 1 -> localStorage.getItem(name, content)
// Opción 2 -> localStorage.name

    // Obtenemos los datos y los almacenamos en variables

    // lastName  = localStorage.Apellido
     

        //   let hola = this.traer()
        // const  id  = params

        // let id = this.props.params
        // axios.get(this.url + 'article/' + id)
        //     .then(res => {
        //         this.setState({
        //             article: res.data.article,
        //             status: 'succes'
        //         })
    }



      render() {

        // console.log(this.id)
        return  (
            <div className="center">
                <section id="content">


                    <article className="article-item article-detail">
                    
                         <Pruebaparams />



                       
                    {/* <h1 className="subheader">hola</h1> */}
                       
                        <div className="clearfix"></div>
                    </article>

                    


                   
                </section>
                <Sidebar />

            </div>

        );

    }


}

export default Article;
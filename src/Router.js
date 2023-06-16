import React, { Component } from "react";
import { Route, Routes, } from 'react-router-dom';


import Error from "./componentes/Error";
import Home from "./componentes/Home";
import Blog from "./componentes/Blog";
import Peliculas from "./componentes/Peliculas";
import Formulario from "./componentes/Formulario";

import Params from './componentes/Params';
import Article from "./componentes/Article";
import CreatedArticle from "./componentes/CreatedArticle";
import Store from "./componentes/Stores";
import Client from "./componentes/Client";

import EditarArticle from "./componentes/EditarArticle";
import Register from "./componentes/Register";
import Registrar from "./componentes/Registrar";

import StoreDetail from "./componentes/StoreDetail";
import Maps from "./componentes/maps";
import HorariosModal from "./componentes/HorariosModal";

class Router extends Component {
    render() {


        return (
            // <BrowserRouter>
            <Routes>


                <Route exact path='/' element={<Register />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/blog' element={<Blog />} />
                <Route exact path="/blog/articulo/:id/" element={<Article />} />
                <Route exact path="/blog/crear" element={<CreatedArticle />} />
                {/* yop */}
                <Route exact path="/stores" element={<Store />} />
                <Route exact path="/client" element={<Client />} />
                <Route exact path="/storeDetail/:id" element={<StoreDetail />} />
                <Route exact path="/maps" element={<Maps />} />
                <Route exact path="/horarios" element={<HorariosModal />} />


                <Route exact path="/blog/editar/:id" element={<EditarArticle />} />

                <Route exact path='/blog/busqueda/:search' element={<Params />} />
                <Route exact path='/redirect/:search' element={<Params />} />
                {/* <Route exact path='/blog/busqueda/:search' element={<Search />} /> */}

                <Route exact path='/blog/registrar' element={<Registrar />} />

                <Route exact path='/formulario' element={<Formulario />} />
                <Route exact path='/peliculas' element={<Peliculas />} />


                <Route path="/a" element={<Error />} />

                <Route path='/pagina' element={
                    <h1>hola desde el exact pag</h1>
                }
                />


            </Routes>


            // </BrowserRouter>

        )
    }
}

export default Router;
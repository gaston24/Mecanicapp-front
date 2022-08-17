import React, { Component } from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Link } from "react-router-dom";
import logo from '../assests/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>


                    <nav id="menu">
                        <ul>

                            <li>
                                <NavLink to="home" activeclassname="active">Home</NavLink>
                            </li>

                            <li>

                                <NavLink to="/blog" activeclassname="active">Blog</NavLink>

                            </li>
                            <li>
                                <NavLink to="/formulario" activeclassname="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" activeclassname="active">peliculas</NavLink>
                            </li>
                            <li>
                                <a href="a">Pagina 1</a>
                            </li>
                            <li>
                                <a href="a">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>



                    <div className="clearfix"></div>
                </div>
            </header>


        );

    }
}

export default Header; 
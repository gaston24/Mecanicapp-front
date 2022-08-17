import React, { Component } from "react";
import { Navigate } from 'react-router-dom'
import { Link } from "react-router-dom";





class Sidebar extends Component {
    searchRef = React.createRef();

    state = {
        prueba: '',
        status: false
        
    };


    redirectSearch = (e) => {
        (e).preventDefault();
  
      this.cont = 0
        this.setState({
            prueba:this.searchRef.current.value,
            status: true,
            
        })
    };
    render() {

        if (this.state.status ) {
            
        
            this.state.status = false    
        


             return <Navigate to={'/redirect/' + this.state.prueba}  />
            
     
        
        
        }
       
   
        return (
            
            <aside id="sidebar">
                {this.props.blog === "true" &&

                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <Link to = {'/blog/crear'} className="btn btn-success">Crear artículo</Link>
                    </div>

                }
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form onSubmit={this.redirectSearch}>
                        <input type="text" name="search" ref={this.searchRef} />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );

    }
}



export default Sidebar;
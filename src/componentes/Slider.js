import React,{Component} from "react";
import { NavLink, Link } from "react-router-dom";


class Slider extends Component{

    render(){
        console.log("aca", this.props.user)
        if(this.props.user == "1"){
            return (
                <div id="slider" className={this.props.size}>
                    <h1>{this.props.title}</h1>
                   <div> 
                    {this.props.btn2 &&
                     <NavLink to="./stores" activeclassname="active" className="btn-white">stores</NavLink>
                    // <a href="#" className="btn-white">{this.props.btn2}</a> 
                    }
                    {this.props.btn3 &&
                     <NavLink to="./client" activeclassname="active" className="btn-white">Clients</NavLink>
                    }
                    </div>
                   
                </div>
            )

        }else{
        
            return (
                <div id="slider" className={this.props.size}>
                    <h1>{this.props.title}</h1>
                <div> 
                    {this.props.btn2 &&
                    <NavLink to="./stores" activeclassname="active" className="btn-white">stores</NavLink>
                    // <a href="#" className="btn-white">{this.props.btn2}</a> 
                    }
                    </div>
                
                </div>
            )
        }
        
    }

}

export default Slider;
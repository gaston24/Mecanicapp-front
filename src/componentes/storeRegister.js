import axios from "axios";
import React,{Component} from "react";
import { Navigate, Router, Routes } from "react-router-dom";
import Global from "../Global";
import Blog from "./Blog";
import Slider from "./Slider";
import Home from "./Home";
import Header from "./Header";

class Register extends Component {
    urle = Global.url
     nameRef = React.createRef();
     emailRef = React.createRef();
     passRef = React.createRef()
     state = {
        token:null,
        status:"failed"
       
    }

           
render(){
   
    if(this.state.status === "succes"){
        return <Home token ={this.state.token}/>
     
    }

  
        return (
            
            <div>
              
       
                     <form onSubmit={this.saveArticle}>
                        <label htmlFor="subheader" aria-hidden="true">Login</label>
                        {/* <input type="text" name="txt" placeholder="User name" ref={this.nameRef}></input> */}
                        <input type="text" name="name" placeholder="name" ref={this.emailRef}></input>
                        <input type="password" name="pswd" placeholder="Password" ref={this.passRef}></input>
                        <a href="/blog/registrar">Registrar</a>
                        <button>Login</button>
                    </form> 
    


            </div>



      )

    }

}


export default Register;

// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Slide Navbar</title>
// 	<link rel="stylesheet" type="text/css" href="slide navbar style.css">
// <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
// </head>
// <body>
// 	<div class="main">  	
// 		<input type="checkbox" id="chk" aria-hidden="true">

// 			<div class="signup">
// 				<form>
// 					<label for="chk" aria-hidden="true">Sign up</label>
// 					<input type="text" name="txt" placeholder="User name" required="">
// 					<input type="email" name="email" placeholder="Email" required="">
// 					<input type="password" name="pswd" placeholder="Password" required="">
// 					<button>Sign up</button>
// 				</form>
// 			</div>
// 	</div>
// </body>
// </html>
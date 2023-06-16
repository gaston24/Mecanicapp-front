import axios from "axios";
import React,{Component} from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Global from "../Global";



class Registrar extends Component {
    url = Global.url
    passRef = React.createRef();
    emailRef = React.createRef();
    nameRef = React.createRef();

    registerUser = (e) => {
    e.preventDefault()
    const date =
            {
                email:this.emailRef.current.value,
                password:this.passRef.current.value,
                name:this.nameRef.current.value

            }
        
           
        const config = {
            method: 'post',
            url: this.url+'register',
            data:date
        }

        const headers = {
            "Content-Type": "application/json",
          };
      
        
        //   axios.get(url, { headers });
        axios(config,{ headers })
        .then(res=>{
            alert("registrado")
            window.location.reload(true);
            <Route>
             <Navigate to="/"></Navigate>
            </Route>
        })
    
        
    } 
    render(){
        return(
        <div className="signup">
            <form onSubmit={this.registerUser}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required=""  ref={this.nameRef}></input>
            {/* <input type="email" name="email" placeholder="Email" required="" ref={this.emailRef}></input> */}
            <input type="password" name="pswd" placeholder="Password" required="" ref={this.passRef}></input>
         	<button>Registrar</button>
         	</form>
        </div>
          
             				
           
        )


    }
}
export default Registrar;
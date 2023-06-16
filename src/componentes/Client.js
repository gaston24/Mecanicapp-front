import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

class Client extends Component {
    url = Global.url
    state = {
        users: {},
        status: "failed"
    }
    getStores = () => {
      
        let token = localStorage.getItem('token')
            
        
      

        const config = {
            method: 'get',
            url: this.url+'user',
            headers : {
                "Content-Type": "application/json",
                "auth-token": token
              }
        }

        axios(config)
            .then(res => {
                this.setState({
                    users: res.data.users,
                    status: "succes"
                    
                })
            })
            .catch(err=>{
                this.setState({
                    users: [],
                    status: "succes"
                    
                })
            })
    }
    componentWillMount() {
            this.getStores();
        }
   
    render() {
        
        if(this.state.status == "succes" ){
            console.log(this.state.users)
            let users = this.state.users;
            // stores.forEach(x => {
            //     console.log(x)
            // });
            let isActive = "false"
            if(users.isActive == true){  isActive = "true" }
            let allUsers = users.map((users) => {
                
                return (
                    <div className="store-item" id="store-template">
                        <div colSpan="2">name : {users.name}</div>
                        <div colSpan="2">role : {users.role}</div>
                        {/* <div colSpan="2">wsp : {users.contact.wsp}</div> */}
                        {/* <div colSpan="2">opening{store.name}</div> */}
                        <div colSpan="2">isActive : {isActive}</div>
                        --------------------------------------------------
                    </div>
                );
            })
            return (
                <div id="articles">
                    {allUsers}
                </div>

            )
        };
        // if (this.state.articles.length >= 1) {
        return "hasta aca"
    }
}
export default Client;
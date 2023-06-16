import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import ReactDOM from 'react-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableStores from './TableStores';

class Store extends Component {
      
    searchRef = React.createRef();
    url = Global.url
    state = {
        stores: {},
        status: "failed"
    }

    getStores = () => {
        let token = localStorage.getItem('token')
        const config = {
            method: 'get',
            url: this.url+'store',
            headers : {
                "Content-Type": "application/json",
                "auth-token": token
              }
        }
        axios(config)
            .then(res => {
                this.setState({
                    stores: res.data.stores,
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
    
    change(value,stores){

        let names = stores.map(e => {
            return e.name 
        });

        let res = [];
        
        stores.forEach((x) => {
            const values = Object.values(x);
            let pre = values.filter((y) => {
            let val = Object.values(y);
            console.log(value)
            return val.includes("a");
            });
            console.log("pre", pre);
            return 1
            if (pre.length>0) {
            res.push(x);
            }
        });

        
    }


    
    

    componentWillMount() {
            // this.tick()
            this.getStores();
        }
   
    render() {
        
        if(this.state.status == "succes" ){

            let stores = this.state.stores;
                
                return (
                  <div id="root">
                    <h2>Stores</h2>
                    <input type={"text"} ref={this.searchRef} onChange={x => this.change(this.searchRef.current.value,stores)}></input>
                    
                  <TableStores store={stores}/>
                  </div>
                );
            // return (
            //     <div id="articles">
            //         {allStores}
            //     </div>

            // )
        };
        // if (this.state.articles.length >= 1) {
        return "hasta aca"
    }
}
export default Store;
import React,{Component,} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Global from "../Global";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Maps from "./maps";
import Stores from "./Stores";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faWrench } from '@fortawesome/free-solid-svg-icons'


class Pelicula extends Component{
    
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
                // console.log(res.data.stores)
                 this.setState({
                     stores: res.data.stores,
                     status: "succes"
                    
                 })
            })
            .catch(err=>{
                // this.setState({
                //     stores: [],
                //     status: "succes"
                    
                // })
            })
    }


    changeStateActive(id){
        let token = localStorage.getItem('token')
        const config = {
            method: 'post',
            url: this.url+'storeActive/'+id,
            headers : {
                "Content-Type": "application/json",
                "auth-token": token
            }
        }
        
        axios(config)
        .then(res => { 
                this.getStores();
            })
            .catch(err=>{
                console.log("acaee");

            })
    }

    changeStateDesactive(id){

        let token = localStorage.getItem('token')

        const config = {
            method: 'delete',
            url: this.url+'store/'+id,
            headers : {
                "Content-Type": "application/json",
                "auth-token": token
              }
        }

        axios(config)
            .then(res => {
                this.getStores();
            })
            .catch(err=>{
            })
  

    }

    retornarBtn(userId,userLevel){

        if( userLevel == "1"){
           return <div><button  name="btnA" onClick={x => this.changeStateActive(userId)}>activar</button><button name="btnD" onClick={x => this.changeStateDesactive(userId)}>desactivar</button></div>
        }

        return "";
        
    } 

    render(){

        let stores = this.props.store
        if (this.state.status == "succes"){
        stores = this.state.stores;
        }
        let allActive = [];

        let userLevel = localStorage.getItem('userLevel')

        let tableActive = <TableCell align="right"> </TableCell>

        if( userLevel == "1"){
            tableActive = <TableCell align="right">Active</TableCell>

            allActive = stores.map(x => {
                if (x.isActive == true){

                    return "Estado Activado"
                }else{
                    return "Estado Inactivo"
                }
            });

        }

        return (
            <TableContainer component={Paper} id="tableC">
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Store Type</TableCell>
                            {tableActive}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stores.map((store ,index) => (
                        <TableRow
                            key={store.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">{store.name}

                            </TableCell>
                            <TableCell align="right">{store.address.address}</TableCell>
                            <TableCell align="right">{store.store_type}</TableCell>
                            <TableCell align="right">{allActive[index]}</TableCell>
                            <TableCell align="right">{this.retornarBtn(store._id,userLevel)}</TableCell>     
                            <TableCell align="right">{<Maps />}</TableCell>     
                            <TableCell align="right"><a href={'/storeDetail/'+store._id} ><FontAwesomeIcon icon={faWrench} /></a></TableCell>  
                               
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
export default Pelicula;
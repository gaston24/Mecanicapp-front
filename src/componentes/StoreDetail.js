import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from 'react';
import Global from "../Global";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { f073 } from '@fortawesome/react-fontawesome'



const StoreDetail = () => {
    let params = useParams();
    let url = Global.url;

    const [state, setState] = useState(0);

    const [modal, setModal] = useState(0);

    const getStoreById = () => {
        let token = localStorage.getItem('token')
        const config = {
            method: 'get',
            url: url+'store/'+params.id,
            headers : {
                "Content-Type": "application/json",
                "auth-token": token
              }
        }
        axios(config)
            .then(res => {
                setState(res.data.store[0]);
                console.log(res.data.store[0]);    
            })
            .catch(err=>{
                console.log(err)
            })
    }
    useEffect( () => {
        getStoreById();
     }, []);

    const openModal = ()=> {
        setModal(1);
    }
    const closeModal = ()=> {
        setModal(0);
    }

   if(state){
       console.log(modal)
        if(modal == "1" ){
            return (
            <div className="div-Modal">
            <div>Lunes:{state.opening.lunes}</div>
            <div>Martes:{state.opening.martes}</div>
            <div>Miercoles:{state.opening.miercoles}</div>
            <div>Jueves:{state.opening.jueves}</div>
            <div>Viernes:{state.opening.viernes}</div>
            <button onClick={x => closeModal()}>cerrar</button>
            </div>
            )
        };

        return (
            <TableContainer component={Paper} id="tableC">
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">store type</TableCell>
                        <TableCell align="right">Wsp</TableCell>
                        <TableCell align="right">Horarios</TableCell>
                        

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key={state.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{state.name}

                        </TableCell>
                        <TableCell align="right">{state.address.address}</TableCell>
                        <TableCell align="right">{state.store_type}</TableCell>   
                        <TableCell align="right">{state.contact.wsp}({state.contact.contact_name})</TableCell>   
                        <TableCell align="right"><button onClick={x => openModal()} >Horarios</button></TableCell>    
                        {/* <TableCell align="right">{<Maps />}</TableCell>      */}         
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        
        );
    };
}

export default StoreDetail;
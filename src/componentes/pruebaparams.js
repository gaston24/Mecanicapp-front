import { useParams } from 'react-router-dom';

import axios from 'axios';
import Global from "../Global";
import Moment from 'react-moment';
import 'moment/locale/es';
import { Navigate } from 'react-router-dom';
import Header from './Header';
const Parametros =  ()=>{
    let url = Global.url
    let  {id}  =useParams();

    let token = localStorage.getItem('token')
            
    const config = {
        method: 'get',
        url: url+'article/'+id,
        // headers{ // }
        headers:{
            "Content-Type": "application/json",
            "auth-token":token,
        }
    }
  

   ;
    
    let prueba =  axios(config)
    .then(response => response)
      .then(data => {
         
   
        document.querySelector("#titulo").textContent = data.data.article.title;
        document.querySelector("#data").textContent =  data.data.article.created_at;
        document.querySelector("#a").textContent = data.data.article.content;
        document.querySelector("#ida").textContent = data.data.article._id;

        if(data.data.article.image){
            document.querySelector("#image").setAttribute("src",url+'get-image/'+data.data.article.image)
            document.querySelector("#image").setAttribute("alt",data.data.article.title)

        }else{
            document.querySelector("#image").setAttribute("src","https://www.artmajeur.com/medias/hd/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg")
            document.querySelector("#image").setAttribute("alt","dataa")
            
        }
      

       
     


      })

 
   
    // .then(res => res.data)
    // )
    // let prueba1= prueba.then(
    //   result => {
    
    //     let final_data = result;
    //     return final_data;
      
    //     // .then(res => {
    //     // return res.data
    // //    this.setestado = (state.article.article._id)

    let deleteArticle=(id)=>{


        const config = {
            method: 'delete',
            url: url+'article/'+id,
            headers:{
                "Content-Type": "application/json",
                "auth-token":token,
            }
        }
       axios(config)
       .then(res=>{
        console.log("aca");
        return <Navigate to="/blog"></Navigate>
        
       })
    }

//  console.log(prueba)
     return  ( 
       
        <div>
                <div className="image-wrap">
                    
                            
                     
                    <img id='image' />

                 

            </div>
        {prueba &&
        <h1 id ="titulo"></h1>
       
        }
        <span className="date">
         <Moment  locale='es' fromNow id="data"></Moment>
        </span>
        <p id="a">
      
        </p>
        <span id="ida" hidden></span>
        <button onClick={
            ()=>{
                let id= document.querySelector("#ida").textContent
            
               
                deleteArticle(id);
            
            }
        } className='btn btn-danger' id="b">Borrar</button>
        <a href='#' className='btn btn-warning'>Editar</a>
       
        </div>
    )
}




export default Parametros;


// const Element = () => {
//     async function getEndData() {
//         const data = (await getEnd());
//         return data;
//     }
// }

// const getEnd = async () => {
// return await axios.get('http://localhost:8080/end').then(res => res.data);
// }
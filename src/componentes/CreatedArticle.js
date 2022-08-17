import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import SimpleReactValidator from "simple-react-validator";
import swal from "sweetalert";
class CreatedArticle extends Component {
    url = Global.url
    titleRef = React.createRef();
    contentRef = React.createRef();
    state = {
        article: {},
        status: null,
        selectedFile: null
    };
    componentWillMount(){
        this.validator = new SimpleReactValidator();
    }
    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        })

    }

    saveArticle = (e) => {
        e.preventDefault()

        this.changeState();
        if(this.validator.allValid()){

            let token = localStorage.getItem('token')
            
            const config = {
                method: 'post',
                url: this.url+'article/',
                data:{article:this.state.article}
                ,
                headers:{
                    "Content-Type": "application/json",
                    "auth-token":token,
                }
            }
          
            
            axios(config)
                .then(res => {
                    if (res.data.article) {
                        let articleId = res.data.article._id;

                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        swal(
                            'Articulo creado',
                            'El articulo ha sido creado correctamente',
                            'succes'
                        )
                        if (this.state.selectedFile !== null) {
                        
                            const formData = new FormData();

                            formData.append(
                                'image',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );
                            
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'succes'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                }
                                )

                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }
                    } else {
                        this.setState({
                            status: 'fail'
                        });
                    }
                })
        }else{
                
             
                this.validator.showMessages();
                this.forceUpdate();
                this.setState({
                    status: 'fail'
                });
        }
    }
    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });

    }

    render() {
        if (this.state.status === "succes") {
            return <Navigate to="/blog"></Navigate>
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">
                        Crear Articulo
                    </h1>
                    <form className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}></input>
                            {this.validator.message('title',this.state.article.title, 'required|alpha_num_space')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Titulo</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                            {this.validator.message('content',this.state.article.content, 'required')}
                     
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" id="file0" onChange={this.fileChange}></input>
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success"></input>

                    </form>
                </section>
                <Sidebar></Sidebar>
            </div>
        );
    }


}
export default CreatedArticle;
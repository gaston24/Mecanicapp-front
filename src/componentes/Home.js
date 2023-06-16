import React, { Component } from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

    render() {
        console.log(this.props.user)
        return (
            <div>
                <Slider
                    title="Bienvenido"
                    btn2 = "Stores"
                    btn3 = "Clients"
                    user = {this.props.user}
                    size="slider-big"
                />
                
                <div className='center'>
                    <div id="content">
                        {/* <h1 className="Subheader">Ultimos articulio</h1> */}
                        {/* <Articles  token={this.props.token} /> */}
                    </div>
                    {/* <Sidebar /> */}
                </div>
            </div>
        )
    }
}
export default Home;
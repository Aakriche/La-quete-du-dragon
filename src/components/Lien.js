import React from 'react';
import {Link} from "react-router-dom";
import "../styles/stylesAccueil.css";



class Lien extends React.Component {

    constructor (props){

        super(props)
        this.stylelien = ""
        this.lienvers =""
        
        };
        
    

    render() {

        return <div>
            <Link to={this.props.lienvers}><div className={this.props.stylelien}></div></Link>
            </div>
            
               
    }
}

export default Lien;
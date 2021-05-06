import React from 'react'
import "../styles/stylesAccueil.css"
import arrowr from "../assets/arrowr.png"
import arrowl from "../assets/arrowl.png"



class Arrow extends React.Component {

    constructor (props){

        super(props)
        this.classposition = ""
        this.position = ""
    }




isLeft = () => {
        if(this.props.position === "left"){
           return arrowl
        }else {
           return arrowr
        }
    }



    render() {

        return <img id={this.props.classposition} src={this.isLeft()} alt="arrow" className="arrow"/>
    }
}

export default Arrow;
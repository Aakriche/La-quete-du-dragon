import React from 'react'
import "../styles/stylesRoue.css"
import Item from './Item'
import persos from "../datas/Persos"
import greenItems from "../datas/GreenItems"
import blueItems from "../datas/BlueItems"
import Slide from "./Slide"



class Roue extends React.Component {

   

    constructor (props){

        super(props)
        this.color = ""
        this.anim = null
        this.state = {
            count: 0
        };
        
    }


    

    render() {

       
        let datas

        if (this.props.color === "red"){
            datas = persos
        }else if (this.props.color === "green"){
            datas = greenItems
        }else {
            datas = blueItems
        }

        return <div className={`roue ${this.props.anim}`}  id={this.props.color} 
        // onClick={() => Slide}
        >
            {datas.map(({ color, ind, cover, name, target}) => (
        <Item colorItem={color} 
        ind={ind}
        cover={cover}
        name ={name}
        target={target}
        />
            ))}
   
       
        </div>
                
    }
}

export default Roue;
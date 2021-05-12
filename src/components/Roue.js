import React from 'react'
import "../styles/stylesRoue.css"
import Item from './Item'
import persos from "../datas/Persos"
import greenItems from "../datas/GreenItems"
import blueItems from "../datas/BlueItems"




function Roue ({color, anim, index, clickItem }) {

 

        
       
        let datas
        

        if (color === "red"){
            datas = persos
        }else if (color === "green"){
            datas = greenItems
        }else {
            datas = blueItems
        }


        return <div className={`roue ${anim}`}  id={color}
        onClick={() => clickItem(index === datas.length ? 0 : index +1)}
        >
            {datas.map(({ color, cover, name, target}) => (
        <Item colorItem={color} 
        ind={index}
        cover={cover}
        name ={name}
        target={target}
        />
            ))}
   
       
        </div>
                
    
}

export default Roue;
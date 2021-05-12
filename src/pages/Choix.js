import React from 'react'
import "../styles/stylesChoix.css"
import "../styles/stylesLien.css"
import Lien from "../components/Lien"
import Arrow from "../components/Arrow"
import Roue from "../components/Roue"







function Choix({blueIndex, clickBlueItem, redIndex, clickRedItem, greenIndex, clickGreenItem, yellowIndex, clickYellowItem}) {


    return <div className="Choix">
        <Arrow classposition="continue" position="right" />
            <Lien stylelien="suite" lienvers="/Village" />
            <Roue color="blue" index={blueIndex} clickItem={clickBlueItem} />
            <Roue color="red" anim="rightanim" index={redIndex} clickItem={clickRedItem}/>
            <Roue color="yellow" index={yellowIndex} clickItem={clickYellowItem}/>
            <Roue color="green" index={greenIndex} clickItem={clickGreenItem}/>

       
    </div>
            
            
    
    
}

export default Choix;
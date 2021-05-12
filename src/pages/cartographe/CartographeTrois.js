import React from 'react'
import "../../styles/stylesVillage.css"
import Roue from "../../components/Roue"
import Lien from "../../components/Lien"






function CartographeTrois ({blueIndex, clickBlueItem, redIndex, clickRedItem, greenIndex, clickGreenItem, yellowIndex, clickYellowItem}) {


    return <div className="Game">
        <div className="cartographeTrois pageIG">
            <Lien stylelien='deuxPagesBas' lienvers="/Foret" />
            <Roue color="blue" index={blueIndex} clickItem={clickBlueItem} />
            <Roue color="red" index={redIndex} clickItem={clickRedItem}/>
            <Roue color="yellow" index={yellowIndex} clickItem={clickYellowItem}/>
            <Roue color="green" anim="leftanim" index={greenIndex} clickItem={clickGreenItem}/>
        </div>
        </div>
      
            
            
    
    
}

export default CartographeTrois;
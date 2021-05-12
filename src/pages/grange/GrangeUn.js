import React from 'react'
import "../../styles/stylesVillage.css"
import Roue from "../../components/Roue"
import Lien from "../../components/Lien"






function GrangeUn ({blueIndex, clickBlueItem, redIndex, clickRedItem, greenIndex, clickGreenItem, yellowIndex, clickYellowItem}) {


    return <div className="Game">
        <div className="grangeUn pageIG">
            <Lien stylelien='unePageMilieu' lienvers="/GrangeDeux" />
            <Lien stylelien='deuxPagesMilieu' lienvers="/GrangeTrois" />
            <Roue color="blue" index={blueIndex} clickItem={clickBlueItem} />
            <Roue color="red" index={redIndex} clickItem={clickRedItem}/>
            <Roue color="yellow" index={yellowIndex} clickItem={clickYellowItem}/>
            <Roue color="green" index={greenIndex} clickItem={clickGreenItem}/>
        </div>
        </div>
      
            
            
    
    
}

export default GrangeUn;
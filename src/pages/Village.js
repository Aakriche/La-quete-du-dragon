import React from 'react'
import "../styles/stylesVillage.css"
import Roue from "../components/Roue"
import Lien from "../components/Lien"






function Village ({blueIndex, clickBlueItem, redIndex, clickRedItem, greenIndex, clickGreenItem, yellowIndex, clickYellowItem, clickPage, page}) {

    
    return <div className="Game">
        <div className="Village">
            <Lien stylelien="lienHaut" lienvers="/MeuniereUn" />
            <Lien stylelien="lienMilieu" lienvers="/GrangeUn" />
            <Lien stylelien="lienBas" lienvers="/CartographeUn" />
            <Roue color="blue" index={blueIndex} clickItem={clickBlueItem} />
            <Roue color="red" index={redIndex} clickItem={clickRedItem}/>
            <Roue color="yellow" index={yellowIndex} clickItem={clickYellowItem}/>
            <Roue color="green" index={greenIndex} clickItem={clickGreenItem}/>
        </div>
        </div>
            
            
    
    
}

export default Village;
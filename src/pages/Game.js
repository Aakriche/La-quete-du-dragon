import React from 'react'
import "../styles/stylesGame.css"
import Choix from "./Choix"




function Game ({redIndex, greenIndex, blueIndex, yellowIndex,
    clickRedItem, clickBlueItem, clickGreenItem, clickYellowItem}) {

  
    return <div class="Game">
            <Choix redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
        clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem} clickYellowItem={clickYellowItem}/>
            
            </div>
            
            
    
    
}

export default Game;
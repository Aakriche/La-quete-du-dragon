import React from 'react'
import "../styles/stylesForet.css"
import logoQuete from "../assets/Logo_Dragon_FR.png"
import gameFlow from "../assets/index.png"

function FinalBox () {

        return <div className="finalBox">
            <div className="fondblanc gameAnim"><a href="http://www.game-flow.fr"><img src={gameFlow} alt="GameFlow"></img></a></div>
            <a href="http://www.game-flow.fr/premiereAventure"><img className="logoDragon logoAnim" src={logoQuete} alt="En quête du dragon"></img></a>
            <a className="gameAnim" href="https://www.linkedin.com/in/amaury-akriche-8748a6149"><p>App Amaury AKRICHE</p></a>

            
            

        </div>

}

export default FinalBox;
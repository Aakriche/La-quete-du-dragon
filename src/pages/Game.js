import React from 'react'
import "../styles/stylesGame.css"
import Roue from "../components/Roue"
import Choix from "./Choix"
import Village from "./Village"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Accueil from "./Accueil"



class Game extends React.Component {
    render(){
    return <div class="Game">
        <Router>
      <Switch>
        <Route path="/Village" exact component={Village}/>
        <Route path="/Choix" exact component={Choix}/>
        <Route path="/" component={() => <div>Erreur 404</div>} />
      </Switch>
    </Router>
            
            <Choix>
            </Choix>
            <Roue color="blue" />
            <Roue color="red" anim="redanim"/>
            <Roue color="yellow"/>
            <Roue color="green" />
            </div>
            
            
    
    }
}

export default Game;
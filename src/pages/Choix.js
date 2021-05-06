import React from 'react'
import "../styles/stylesChoix.css"
import "../styles/stylesLien.css"
import Lien from "../components/Lien"
import Arrow from "../components/Arrow"





class Choix extends React.Component {
    render(){
    return <div className="Choix">
        <Arrow classposition="continue" position="right" />
            <Lien stylelien="suite" lienvers="/Village" />
       
    </div>
            
            
    
    }
}

export default Choix;
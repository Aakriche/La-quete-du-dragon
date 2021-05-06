import Lien from '../components/Lien'
import Arrow from '../components/Arrow'
import React from 'react'
import "../styles/stylesAccueil.css"
import "../styles/stylesLien.css"


class Accueil extends React.Component {
    render(){
    return <div className ="Accueil">
            <Lien stylelien="begin" lienvers="/Game"> </Lien>
            <Arrow classposition="arrowright" position="right" />
            <Arrow classposition="arrowleft" position="left" />
        </div>
 
    }
}

export default Accueil;
import React from 'react'
import "../styles/stylesItem.css"




function Item ({colorItem, ind, name, target, cover }){

    

    

        return (

            <div key={target.toString()} className={`item ${ind === 0 && 'visible'}` }
              id={colorItem}>
              <img alt={name} 
              src={cover}/>
              </div> 
        )
      
}

export default Item;
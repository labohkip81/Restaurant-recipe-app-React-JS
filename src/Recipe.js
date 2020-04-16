import React from 'react'


const Recipe = ({label,calories,image}) => {
    return(
        <div>
            <h1> {label}</h1>
            <p> {calories} </p>
            <img src={image} alt=""></img>
        </div>
    )
}



export default Recipe;
import React from 'react';
import './App';
import '../src/components.css';

function Components(props) {
    return(
        <>
        <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center'}}>
        <img src={props.image} alt='Image'></img>
        <h2 style={{color : 'white'}}>{props.title}</h2>
        <p style={{color : 'white'}}>{props.text}</p>
        </div>
        </>
    )
}

export default Components;
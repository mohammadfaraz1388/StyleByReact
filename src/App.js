import React from 'react';
import './App.css';
import Components from './Components';
import firstPicture from '../src/Assets/diomnd.png';
import secondtPicture from '../src/Assets/icons8-square-100.png';
import thirdPicture from '../src/Assets/icons8-triangle-64.png';

function App() {
  return (
    <div style={{display : 'flex' , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center' , width : '500px' , borderRadius : '10px' , marginTop : '200px' , backgroundColor : '#1a1f1f' , padding : '10px'}}>
      <div style={{display : 'flex' , flexDirection : 'column' , height : '150px'}}>
        <div style={{display : 'flex' , justifyContent : 'space-between'}}>
        <h1 style={{color : 'white' , }}>City of geometric shapes</h1>
        </div>
        <span style={{color : 'gray'}}>Here you can find your favorite shape</span>
      </div>
      <div style={{display : 'flex' , gap : '80px' , alignItems : 'center' , justifyContent : 'center'}}>
      <Components image={firstPicture} title="Diamond" text="Just a Diamond"/>
      <Components image={secondtPicture} title="square" text="Just a square"/>
      <Components image={thirdPicture} title="triangle" text="Just a triangle"/>
      </div>
    </div>
  );
}

export default App;

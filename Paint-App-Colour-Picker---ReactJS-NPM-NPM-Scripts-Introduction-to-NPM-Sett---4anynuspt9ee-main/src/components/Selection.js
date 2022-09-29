import '../styles/Child.css';
import React, { useState } from "react";

const Selection = (props) => {
let [style, setStyle] = useState({ background: "" });

 let applyColor= props.applyColor;
 let selectNextBackground = props.selectNextBackground;
 //console.log(applyColor)
 

  return (
    <div className='fix-box' style={style}  onClick={()=>applyColor(setStyle)}>
      <h2 className="subheading">Selection</h2> 
    </div>
  )
}
export default Selection;


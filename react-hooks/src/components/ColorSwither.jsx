import { useState } from "react";

function Colorswitcher(){

    const[bgColor , setBgColor] = useState('');

    const handleColorChange = (event) => {
        setBgColor(event.target.value);
    }


    return(
        <>
        <h1>Change color of div when select color from dropdown</h1>
        <select value={bgColor} onChange={handleColorChange}>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Pink">Pink</option>
        </select><br />
        <div style={{backgroundColor : bgColor , height:"100px" , width : "100px"}}></div>
        </>
    )
}

export default Colorswitcher;
import { useState } from "react";

function Controlled(){

    const[text , setText] = useState('');

    const inputHandler = (event) => {
        setText(event.target.value);
    }

    const[isVisible , setIsVisible] = useState(false);

    const toggle = () => {
        setIsVisible(!isVisible);
    }

    

    return(
        <>
        <h1>Controlled Input Field</h1>
        <input type="text" value={text} onChange={inputHandler}/>
        <h4>Input text : {text}</h4>
        <h2>Toggle Visibility</h2>
        <button onClick={toggle}>Hide/Show Text</button>
        {isVisible && <p>Toggle me!</p>}
        </>
    )

}

export default Controlled;
import { useState } from "react";

function Counter(){

    const[count , setCount] = useState(0);

    const[textCount , setTextCount] = useState('');

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function reset(){
        setCount(0);
    }

    const handleText = (event) => {
        setTextCount(event.target.value);
    }

    return(
        <>
            <h1>counter application using react useState() hook</h1>
            <h2>count : {count}</h2>
            <button onClick={increment}>Increment</button>&nbsp;&nbsp;
            <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;
            <button onClick={reset}>Reset</button><br /><br />

            <h2>Character counter</h2>
            <textarea onChange={handleText} value={textCount}></textarea>
            <h3>Text Count : {textCount.length}</h3>
        </>
    )
}

export default Counter;
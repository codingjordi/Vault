import { useState } from "react";
import './App.css';

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(n => n + 1);
    }

    return (
        <>
                <p>Click the buttons</p>
                <p>Result: {counter}</p>
                <button onClick={() => increment()}>+1</button>
                <button onClick={() => {
                    increment();
                    increment();
                    increment();
                }}>+3</button>
        </>
    );

}

export default Counter;
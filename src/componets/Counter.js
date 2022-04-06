import React, { useState } from 'react';

function Counter(props) {

    const [count, steCounter] = useState(0)

    const incrementcounter = () =>{
        steCounter(() => count+1);
    }
    
    const decrementcounter = () =>{
        steCounter(() => count-1);
    }

    return (
        <div>
            <button onClick={() => incrementcounter()}> + </button>
            <span>{count}</span>
            <button onClick={() => decrementcounter()}> - </button>
        </div>
    );
}

export default Counter;
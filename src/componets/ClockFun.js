import React, { useEffect, useState } from 'react';

function ClockFun(props) {
const [time , setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(
        () => {
            const timerID = setInterval(() => tick(), 1000);

            return() => {
                clearInterval (timerID);
            }
        },
    [time]);

    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default ClockFun;
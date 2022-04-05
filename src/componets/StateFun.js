import React, { useState } from 'react';

function StateFun(props) {

    const [city , setCity] = useState("Surat");
    const [state , setState] = useState("Gujarat");

    const changeCity = () => {
        setCity("Rajkot");
    } 

    return (
        <>
            <div>
               {city}
               <button onClick={() => changeCity()}>Change City</button> 
            </div>
            <div>
               {state}
               <button onClick={() => setState("Rajsthan")}>Change State</button> 
            </div>
        </>
    );
}

export default StateFun;
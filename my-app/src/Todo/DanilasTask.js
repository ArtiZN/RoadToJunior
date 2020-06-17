import React, { useState } from 'react'





function DanilasTask (){
    const [q, setQ] = useState(1)
    

    function Increment(){
        setQ(q+1)
        console.log(q)
    }

    return (
        <>
            <div>
                <button onClick={Increment}>Нажми на меня</button>
                <div style={{display: 'inline-block', marginLeft: '1rem'}}>{q}</div>
            </div>      
        </>
    )




}


export default DanilasTask
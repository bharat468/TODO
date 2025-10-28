import React, { useState } from 'react'

function ControlledComponent() {
    const [num, setNum] = useState("")
    function handleControlled(e) {
        setNum(e.target.value)
    }
    return (
        <> 
            <input type="text" onChange={handleControlled} value={num} ></input>
            <p>{num}</p>
        </>

    )
}

export default ControlledComponent

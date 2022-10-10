import React, { useState } from "react";

const HiddenText = (props) => {
    const [hidden, setHidden] = useState(true);
    return (
        <div onClick={() => setHidden(false)} style={{color: hidden ? "#f76565" : "#ffffff"}}>
            { hidden ? <p>Click to reveal...</p> : props.text }
        </div>
    )
}

export default HiddenText;
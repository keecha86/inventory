import React from "react";

function Button(prop) {
    return (
        <div>
            <button onClick={()=> {
                prop.clickHandler(prop.itemInput)
                }}>{prop.btnName}</button>
        </div>
    )
}

export default Button;
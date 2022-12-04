import React from "react";

function Item(prop) {
    return(
        <div >
            <h3>{prop.item.item_name}</h3>
            <h3>{prop.item.quantity}</h3>
        </div>
    )
}

export default Item;
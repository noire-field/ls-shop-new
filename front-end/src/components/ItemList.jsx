import React from "react";

import ItemSingle from "./ItemSingle";

function ItemList(props) {
    var renderContent = props.items.map((item, index) => <ItemSingle key={index}/>)

    return (
        <div className={`row ${props.className}`}>
            {renderContent}
        </div>
    )
}

export default React.memo(ItemList);
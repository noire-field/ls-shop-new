import React, { useCallback } from "react";

import Logger from './../utils/logger';

import ItemSingle from "./ItemSingle";

function ItemList(props) {
    Logger.Log(`[App][HomeStore][StoreContent][ItemList] Render`);

    const onClickItem = useCallback((item) => {
        console.log(item);
    }, []);

    var renderContent = props.items.map((item, index) => <ItemSingle onClick={onClickItem.bind(this, item)} key={index} title={item.title} price={item.price} image={item.image}/>)

    return (
        <div className={`row ${props.className}`}>
            {renderContent}
        </div>
    )
}

export default React.memo(ItemList);
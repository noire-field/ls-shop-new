import React from "react";
import { useSelector } from "react-redux";

import GuideAndTerms from "./GuideAndTerms";
import MyAccount from "./MyAccount";
import ItemList from "./ItemList";

import Logger from './../utils/logger';

function StoreContent() {
    const viewingPageId = useSelector(state => state.store.viewingPageId);
    const items = useSelector(state => (viewingPageId >= 0 && state.store.categories.length > 0)? state.store.categories[viewingPageId].items : []);

    Logger.Log(`[App][HomeStore][StoreContent] Render (Page ID: ${viewingPageId})`);

    var renderContent = null;

    switch(viewingPageId) {
        case -2: renderContent = <MyAccount className="simple-fade-in"/>; break;
        case -1: renderContent = <GuideAndTerms className="simple-fade-in"/>; break;
        default: renderContent = <ItemList className="simple-fade-in" items={items}/>; break;
    }

    return (
        <div className="col-lg-10 mt-lg-5 mt-3">
            {renderContent}
        </div>
    )
}

export default React.memo(StoreContent);
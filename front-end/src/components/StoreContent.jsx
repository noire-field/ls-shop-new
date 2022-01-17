import React from "react";
import { useSelector } from "react-redux";

import GuideAndTerms from "./GuideAndTerms";
import ItemList from "./ItemList";

function StoreContent() {
    const viewingPageId = useSelector(state => state.store.viewingPageId);
    

    var renderContent = null;
    switch(viewingPageId) {
        case -1: renderContent = <GuideAndTerms className="simple-fade-in"/>; break;
        default: renderContent = <ItemList className="simple-fade-in" items={[1,2,3,4,5]}/>; break;
    }

    return (
        <div className="col-lg-10">
            {renderContent}
        </div>
    )
}

export default React.memo(StoreContent);
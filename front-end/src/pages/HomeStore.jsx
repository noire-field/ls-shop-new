import React from 'react';

import Sidebar from '../components/Sidebar';
import StoreContent from '../components/StoreContent';

function Store() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar className="mb-2"/>
                <StoreContent/>
            </div>
        </div>
    )
}

export default React.memo(Store);
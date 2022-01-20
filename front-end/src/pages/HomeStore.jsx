import React from 'react';

import Sidebar from '../components/Sidebar';
import StoreContent from '../components/StoreContent';

import Logger from './../utils/logger';

function Store() {
    Logger.Log(`[App][HomeStore] Render`);

    return (
        <div className="container-fluid simple-fade-in">
            <div className="row">
                <Sidebar className="mb-2"/>
                <StoreContent/>
            </div>
        </div>
    )
}

export default React.memo(Store);
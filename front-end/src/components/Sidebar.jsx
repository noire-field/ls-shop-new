import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Logger from './../utils/logger';

import Header from './../components/Header';

import { StoreSetViewPage } from './../store/actions/store.action';


function Sidebar(props) {
    const categories = useSelector(state => state.store.categories);
    const viewingPageId = useSelector(state => state.store.viewingPageId);
    const dispatch = useDispatch();

    Logger.Log(`[App][HomeStore][Sidebar] Render (Page ID: ${viewingPageId})`);

    const onClickCategory = useCallback((id) => {
        if(id == viewingPageId) return;
        dispatch(StoreSetViewPage(id));
    }, [dispatch, viewingPageId]);

    return (
        <div className={`col-lg-2 ${props.className}`}>
            <Header className="mb-5"/>
            <h6 className="text-center text-success bg-dark-semi py-2 px-1">
                <span className="badge badge-danger mr-1">NEW</span>
                <span>We now accept <span className="font-weight-bold">SMS Payment</span>!</span>
            </h6>
            <div className="bg-dark-semi px-2 pt-2 pb-1 mb-2">
                <div className="text-warning text-center">
                    <span>Please read before purchasing!</span>
                </div>
                <div className="nav d-flex justify-content-center align-items-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className={`nav-link ${viewingPageId == -1 ? 'active' : ''}`}  data-toggle="pill" href="#" onClick={onClickCategory.bind(this, -1)}>
                        <span className="font-weight-bold text-danger">
                            <i className="fas fa-exclamation-triangle mr-1"></i>Guide & Terms of Service
                        </span>
                    </a>
                </div>
            </div>
            <div className="bg-dark-semi p-2">
                <div className="nav flex-sm-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {categories.map((item, index) => <a onClick={onClickCategory.bind(this, index)} key={item.title} className={`nav-link ${index == viewingPageId ? 'active' : ''}`} data-toggle="pill" href="#" role="tab" >{item.title}</a>)}
                { categories.length <= 0 &&
                <p className="mb-0 text-center text-white">No categories or items</p>
                }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Sidebar);
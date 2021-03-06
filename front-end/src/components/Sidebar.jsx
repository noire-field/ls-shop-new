import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Logger from './../utils/logger';

import Header from './../components/Header';
import AuthInfo from './../components/AuthInfo';

import { AppSetLoading } from './../store/actions/app.action';
import { UserLogout, UserSetCodeList } from './../store/actions/user.action';

import { StoreSetViewPage } from './../store/actions/store.action';

import axios from './../utils/axios';

function Sidebar(props) {
    const dispatch = useDispatch();

    const logged = useSelector(state => state.user.logged);
    const userId = useSelector(state => state.user.id);
    const categories = useSelector(state => state.store.categories);
    const viewingPageId = useSelector(state => state.store.viewingPageId);
    const allowedCountries = useSelector(state => state.store.allowedCountries);
    console.log(allowedCountries);
    Logger.Log(`[App][HomeStore][Sidebar] Render (Page ID: ${viewingPageId})`);

    const onClickCategory = useCallback((id) => {
        if(id == viewingPageId) return;
        dispatch(StoreSetViewPage(id));
    }, [dispatch, viewingPageId]);

    const onClickLogout = (e) => {
        e.preventDefault();

        if(window.confirm('Do you really want to sign out?') != true)
            return;

		dispatch(AppSetLoading(true));
		axios.post('/shop-api.php?act=Logout', {
            userId
        }).then(() => {
			
		}).catch(() => {
			
		}).finally(() => {
            dispatch(UserLogout());
			dispatch(AppSetLoading(false));
            dispatch(UserSetCodeList([]));
		})
    }

    return (
        <div className={`col-lg-2 ${props.className}`}>
            <div className="sticky-top pt-lg-5 pt-5">
                <Header className="mb-5"/>
                <AuthInfo className="mb-3"/>
                <h6 className="text-center text-success bg-dark-semi py-2 px-1">
                    <span className="badge badge-danger mr-1">NEW</span>
                    <span>We now accept <span className="font-weight-bold">SMS Payment</span> </span> 
                    <span>from { allowedCountries.map((url, index) => <img key={index} src={url}/>) } </span> 
                    <span>If your country is not here, visit our <a href="https://lsgamerz.net" className="font-weight-bold text-warning">forum</a> and make request!</span>
                </h6>
                <div className="bg-dark-semi px-2 pt-2 pb-1 mb-2">
                    <div className="text-warning text-center">
                        <span>Please read before purchasing!</span>
                    </div>
                    <div className="nav d-flex justify-content-center align-items-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className={`btn btn-outline-danger ${viewingPageId == -1 ? 'active' : ''} py-1`}  data-toggle="pill" href="#" onClick={onClickCategory.bind(this, -1)}>
                            <span className="font-weight-bold">
                                <i className="fas fa-exclamation-triangle mr-1"></i>How To Buy & Terms
                            </span>
                        </button>
                    </div>
                </div>
                <div className="bg-dark-semi p-2 mb-2">
                    <div className="nav flex-sm-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {categories.map((item, index) => <a onClick={onClickCategory.bind(this, index)} key={item.title} className={`nav-link ${index == viewingPageId ? 'active' : ''}`} data-toggle="pill" href="#" role="tab" >{item.title}</a>)}
                    { categories.length <= 0 &&
                    <p className="mb-0 text-center text-white">No categories or items</p>
                    }
                    </div>
                </div>
                { logged &&
                    <button onClick={onClickLogout} className="btn btn-outline-danger btn-block btn-sm"><i className="fas fa-sign-in-alt mr-1"></i>Sign Out</button>
                }
            </div>
        </div>
    )
}

export default React.memo(Sidebar);
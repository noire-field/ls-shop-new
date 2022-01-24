import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalLogin from './Modal/Login';
import ModalRegister from './Modal/Register';
import ModalRegisterCompleted from './Modal/RegisterCompleted';

import { StoreSetViewPage } from './../store/actions/store.action';
import { ModalLoginToggle } from './../store/actions/modal.action';

import { FormatNumber } from './../utils/shared';
import Logger from './../utils/logger';

function AuthInfo(props) {
    const dispatch = useDispatch();
    const viewingPageId = useSelector(state => state.store.viewingPageId);
    const logged = useSelector(state => state.user.logged);
    const credits = useSelector(state => state.user.credits);
    const payUrl = useSelector(state => state.store.payUrl);
    const username = useSelector(state => state.user.username);

    Logger.Log(`[App][HomeStore][Sidebar][AuthInfo] Render (Viewing Page ID: ${viewingPageId})`);

    const onClickLogin = () => {
        dispatch(ModalLoginToggle(true));
    }

    const onClickMyAccount = (e) => {
        e.preventDefault();

        if(viewingPageId == -2) return;
        dispatch(StoreSetViewPage(-2));
    }

    return (
        <div className={props.className}>
            { logged &&
            <React.Fragment>
                <div className="d-flex justify-content-between align-items-center text-bigger-115 mb-2">
                    <p className="mb-0 text-white line-height-125">Welcome, <b className="text-white">{username}</b></p>
                    <p className="mb-0 text-white line-height-125">
                        <span className="font-weight-bold text-warning">{FormatNumber(credits)} <i className="fas fa-coins"></i></span>
                    </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <a href={payUrl} className={`btn btn-warning btn-block btn-sm mr-1`}><i className="fas fa-mobile-alt mr-1"></i>Buy Credits</a>
                    <p className="my-2"></p>
                    <button onClick={onClickMyAccount} className={`btn btn-primary btn-block btn-sm ml-1`} disabled={viewingPageId == -2}><i className="fas fa-user mr-1"></i>My Account</button>
                </div>
            </React.Fragment>
            }
            { !logged &&
            <div className={`d-flex justify-content-between align-items-center ${props.className}`}>
                <p className="mb-0 text-white line-height-125">Welcome, <b>Guest</b></p>
                <button onClick={onClickLogin} className="btn btn-success btn-sm text-uppercase"><i className="fas fa-sign-in-alt mr-1"></i>Sign In</button>
            </div>
            }
            <ModalLogin/>
            <ModalRegister/>
            <ModalRegisterCompleted/>
        </div>
    )
}

export default React.memo(AuthInfo);
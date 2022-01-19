import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalLogin from './Modal/Login';
import ModalRegister from './Modal/Register';


import { ModalLoginToggle } from './../store/actions/modal.action';

import { FormatNumber } from './../utils/shared';

function AuthInfo(props) {
    const dispatch = useDispatch();
    const logged = useSelector(state => state.user.logged);
    const credits = useSelector(state => state.user.credits);

    const onClickLogin = () => {
        dispatch(ModalLoginToggle(true));
    }

    return (
        <div className={`d-flex justify-content-between align-items-center ${props.className}`}>
            { logged &&
            <React.Fragment>
                <p className="mb-0 text-white line-height-125">Welcome, <b className="text-white">Noirefield</b><br/>
                    <span><span className="small">Credits:</span> <span className="font-weight-bold text-warning">{FormatNumber(credits)} <i className="fas fa-coins"></i></span></span>
                </p>
                <button className="btn btn-danger btn-sm"><i className="fas fa-sign-in-alt mr-1"></i>Sign Out</button>
            </React.Fragment>
            }
            { !logged &&
            <React.Fragment>
                <p className="mb-0 text-white line-height-125">Welcome, <b>Guest</b></p>
                <button onClick={onClickLogin} className="btn btn-success btn-sm text-uppercase"><i className="fas fa-sign-in-alt mr-1"></i>Sign In</button>
            </React.Fragment>
            }
            <ModalLogin/>
            <ModalRegister/>
        </div>
    )
}

export default React.memo(AuthInfo);
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import Error from './../Error';

import { AppSetLoading } from './../../store/actions/app.action';
import { UserLogin } from './../../store/actions/user.action';
import { ModalLoginToggle, ModalRegisterToggle } from './../../store/actions/modal.action';

import { StyleCompact } from './../../utils/modal';
import Logger from './../../utils/logger';
import axios from './../../utils/axios';

function Login() {
	Logger.Log(`[App][HomeStore][Sidebar][AuthInfo][Login] Render`);

    const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const refUsername = useRef();
	const refPassword = useRef();

    const show = useSelector(state => state.modal.login.show);

    const closeModal = () => {
        dispatch(ModalLoginToggle(false));
    }

	const onClickSignUp = (e) => {
		e.preventDefault();
		closeModal();
		dispatch(ModalRegisterToggle(true));
	}

	const onClickSignIn = (e) => {
		e.preventDefault();

		setErrors([]);

		if(refUsername.current.value.length <= 0 || refPassword.current.value.length <= 0)
			return;

		dispatch(AppSetLoading(true));
		axios.post('/shop-api.php?act=Login', {
			username: refUsername.current.value,
			password: refPassword.current.value
		}).then(({ data }) => {
			if(data.success) {
				dispatch(UserLogin(data.user_id, data.username, data.credits, data.token));
				dispatch(ModalLoginToggle(false));
			} else {
				setErrors([data.message]);
			}
		}).catch(() => {
			setErrors(['Unable to connect to server.']);
		}).finally(() => {
			dispatch(AppSetLoading(false));
		})
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="Login Modal">
			<div className="px-lg-5 py-lg-4 px-3 py-4">
				<h3 className="text-center mb-4">Sign In</h3>
				<form className="mb-3">
					<div className="form-group">
						<label htmlFor="login-username">Username</label>
						<input ref={refUsername} type="text" className="form-control" id="login-username" placeholder="Username"/>
					</div>
					<div className="form-group">
						<label htmlFor="login-password">Password</label>
						<input ref={refPassword} type="password" className="form-control" id="login-password" placeholder="Password"/>
						<small id="login-password-help" className="form-text">Your password is encrypted and stored safely.</small>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<a href="#" onClick={onClickSignUp} className="mb-0 text-warning line-height-125">No account? <b>Click here to sign up</b></a>
						<button onClick={onClickSignIn} type="submit" className="btn btn-success text-uppercase"><i className="fas fa-sign-in-alt mr-1"></i>Sign In</button>
					</div>
				</form>
				<Error errors={errors}/>
			</div>
      	</Modal>
    );
}

export default React.memo(Login);
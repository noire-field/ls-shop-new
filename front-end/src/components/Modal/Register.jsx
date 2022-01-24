import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import Error from './../Error';

import { AppSetLoading } from './../../store/actions/app.action';
import { ModalRegisterToggle, ModalLoginToggle, ModalRegisterComplatedToggle } from './../../store/actions/modal.action';
import { StyleCompact } from './../../utils/modal';
import axios from './../../utils/axios';
import Logger from './../../utils/logger';

function Register() {
	Logger.Log(`[App][HomeStore][Sidebar][AuthInfo][Register] Render`);

    const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const refUsername = useRef();
	const refPassword = useRef();
	const refPassword2 = useRef();

    let show = useSelector(state => state.modal.register.show);

    const closeModal = () => {
		setErrors([]);
        dispatch(ModalRegisterToggle(false));
    }

	const onClickSignIn = (e) => {
		e.preventDefault();

		closeModal();
		dispatch(ModalLoginToggle(true));
	}

	const onClickSignUp = (e) => {
		e.preventDefault();

		setErrors([]);

		if(refUsername.current.value.length <= 0 || refPassword.current.value.length <= 0 || refPassword2.current.value.length <= 0)
			return;
		if(refPassword.current.value !== refPassword2.current.value) {
			setErrors(['Password and Password Confirmation don\'t match.']);
			return;
		}

		dispatch(AppSetLoading(true));
		axios.post('/shop-api.php?act=RegisterUser', {
			username: refUsername.current.value,
			password: refPassword.current.value
		}).then(({ data }) => {
			if(data.success) {
				dispatch(ModalRegisterToggle(false));
				dispatch(ModalRegisterComplatedToggle(true));
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
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="Register Modal">
			<div className="px-lg-5 py-lg-4 px-3 py-4">
				<h3 className="text-center mb-4">Sign Up</h3>
				<form className="mb-3">
					<div className="form-group">
						<label htmlFor="login-username">Username</label>
						<input ref={refUsername} type="text" className="form-control" id="login-username" maxLength={16} placeholder="Username" required/>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="login-password">Password</label>
								<input ref={refPassword} type="password" className="form-control" id="login-password" maxLength={64} placeholder="Password" required/>
								<small id="login-password-help" className="form-text">Your password is encrypted and stored safely.</small>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="login-password-confirm">Password Confirmation</label>
								<input ref={refPassword2} type="password" className="form-control" id="login-password-confirm" maxLength={64} placeholder="Password" required/>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<a href="#" onClick={onClickSignIn} className="mb-0 text-white line-height-125 font-weight-bold">Already have an account?</a>
						<button onClick={onClickSignUp} type="submit" className="btn btn-primary text-uppercase"><i className="fas fa-user-plus mr-1"></i>Sign Up</button>
					</div>
				</form>
				<Error errors={errors}/>
			</div>
      	</Modal>
    );
}

export default React.memo(Register);
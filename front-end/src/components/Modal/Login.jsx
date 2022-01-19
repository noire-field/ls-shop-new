import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { ModalLoginToggle, ModalRegisterToggle } from './../../store/actions/modal.action';
import { AppSetLoading } from './../../store/actions/app.action';

import { StyleCompact } from './../../utils/modal';

function Login() {
    console.log('Login Modal');
    const dispatch = useDispatch();

    let show = useSelector(state => state.modal.login.show);

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
		dispatch(AppSetLoading(true));
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="Login Modal">
			<div className="px-lg-5 py-lg-4 px-3 py-4">
				<h3 className="text-center mb-4">Sign In</h3>
				<form>
					<div class="form-group">
						<label for="login-username">Username</label>
						<input type="text" class="form-control" id="login-username" placeholder="Username"/>
					</div>
					<div class="form-group">
						<label for="login-password">Password</label>
						<input type="password" class="form-control" id="login-password" placeholder="Password"/>
						<small id="login-password-help" class="form-text">Your password is encrypted and stored safely.</small>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<a href="#" onClick={onClickSignUp} className="mb-0 text-warning line-height-125">No account? <b>Click here to sign up</b></a>
						<button onClick={onClickSignIn} type="submit" class="btn btn-success text-uppercase"><i className="fas fa-sign-in-alt mr-1"></i>Sign In</button>
					</div>
				</form>
			</div>
      	</Modal>
    );
}

export default React.memo(Login);
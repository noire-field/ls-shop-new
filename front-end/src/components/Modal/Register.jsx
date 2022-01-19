import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { ModalRegisterToggle, ModalLoginToggle } from './../../store/actions/modal.action';

import { StyleCompact } from './../../utils/modal';

function Register() {
    console.log('Register Modal');
    const dispatch = useDispatch();

    let show = useSelector(state => state.modal.register.show);

    const closeModal = () => {
        dispatch(ModalRegisterToggle(false));
    }

	const onClickSignIn = (e) => {
		e.preventDefault();
		closeModal();
		dispatch(ModalLoginToggle(true));
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="Login Modal">
			<div className="px-lg-5 py-lg-4 px-3 py-4">
				<h3 className="text-center mb-4">Sign Up</h3>
				<form>
					<div class="form-group">
						<label for="login-username">Username</label>
						<input type="text" class="form-control" id="login-username" placeholder="Username"/>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div class="form-group">
								<label for="login-password">Password</label>
								<input type="password" class="form-control" id="login-password" placeholder="Password"/>
								<small id="login-password-help" class="form-text">Your password is encrypted and stored safely.</small>
							</div>
						</div>
						<div className="col-md-6">
							<div class="form-group">
								<label for="login-password-confirm">Password Confirmation</label>
								<input type="password" class="form-control" id="login-password-confirm" placeholder="Password"/>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<a href="#" onClick={onClickSignIn} className="mb-0 text-white line-height-125 font-weight-bold">Already have an account?</a>
						<button type="submit" class="btn btn-primary text-uppercase"><i className="fas fa-user-plus mr-1"></i>Sign Up</button>
					</div>
				</form>
			</div>
      	</Modal>
    );
}

export default React.memo(Register);
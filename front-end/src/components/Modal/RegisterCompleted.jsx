import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { ModalRegisterComplatedToggle, ModalLoginToggle } from '../../store/actions/modal.action';
import { StyleCompact } from '../../utils/modal';
import Logger from '../../utils/logger';

function RegisterCompleted() {
    Logger.Log(`[App][HomeStore][Sidebar][AuthInfo][RegisterCompleted] Render`);

	const dispatch = useDispatch();
    const show = useSelector(state => state.modal.register.showCompleted);

    const closeModal = () => {
        dispatch(ModalRegisterComplatedToggle(false));
    }

	const onClickSignIn = () => {
		closeModal();
		dispatch(ModalLoginToggle(true));
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="RegisterCompleted Modal">
			<div className="px-lg-5 py-lg-4 px-3 py-5">
				<h3 className="text-center text-success mb-3"><i class="fas fa-check-circle mr-1"></i>Registration Completed!</h3>
				<div className="text-center"><button onClick={onClickSignIn} className="btn btn-white"><i class="fas fa-sign-in-alt mr-1"></i>Click here to sign In</button></div>
			</div>
      	</Modal>
    );
}

export default React.memo(RegisterCompleted);
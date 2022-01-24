import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { ModalPaymentCreditCompletedToggle } from './../../store/actions/modal.action';

import { StyleCompact } from './../../utils/modal';
import Logger from './../../utils/logger';

function PaymentCreditCompleted() {
	Logger.Log(`[App][HomeStore][StoreContent][ItemList][PaymentCreditCompleted] Render`);

    const dispatch = useDispatch();

    const show = useSelector(state => state.modal.payment.showCreditCompleted);
	const item = useSelector(state => state.modal.payment.item);
	const code = useSelector(state => state.modal.payment.code);

	if(!item) return null;

	const closeModal = () => {
        dispatch(ModalPaymentCreditCompletedToggle(false));
    }

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="PaymentCreditCompleted Modal">
			<div className="px-lg-5 py-lg-5 px-3 py-4">
				<h4 className="text-left mb-1"><i className="far fa-check-circle mr-1"></i>Payment Completed</h4>

				<p className='mb-5'>You've purchased <span className='text-warning'>{item.title}</span> for <span className='text-warning'>{item.price.credit}<i className="fas fa-coins ml-1"></i></span></p>
				<h6 className='text-center'>IN-GAME REDEEM CODE</h6>
				<h2 className='text-center'>{code}</h2>
				<p className='text-center small'>(You can always view the code in <b>My Account</b> page)</p>
			</div>
      	</Modal>
    );
}

export default React.memo(PaymentCreditCompleted);
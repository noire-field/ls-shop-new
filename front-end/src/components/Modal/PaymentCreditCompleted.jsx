import config from './../../config.json';

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';


import { ModalPaymentToggle } from './../../store/actions/modal.action';

import { StyleCompact } from './../../utils/modal';
import Logger from './../../utils/logger';
import { FormatNumber } from './../../utils/shared';

function PaymentCreditCompleted() {
	Logger.Log(`[App][HomeStore][StoreContent][ItemList][Payment] Render`);

    const dispatch = useDispatch();

	const credits = useSelector(state => state.user.credits);
    const show = useSelector(state => state.modal.payment.show);
	const item = useSelector(state => state.modal.payment.item);

	if(!item) return null;

	const closeModal = () => {
        dispatch(ModalPaymentToggle(false));
    }

	const onClickPaypal = (e) => {
		e.preventDefault();

		let paypalLink = `${config.API_URL}/Purchase.php?item_id=${item.id}`;
		window.open(paypalLink, '_blank').focus();

		closeModal();
	}

	const onClickSMS = (e) => {
		e.preventDefault();

		closeModal();
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="PaymentCreditCompleted Modal">
			<div className="px-lg-5 py-lg-5 px-3 py-4">
				<h4 className="text-left mb-1"><i class="far fa-check-circle mr-1"></i>Payment Completed</h4>

				<p className='mb-5'>You've purchased <span className='text-warning'>{item.title}</span> for <span className='text-warning'>{item.price.credit}<i className="fas fa-coins ml-1"></i></span></p>
				<h6 className='text-center'>IN-GAME REDEEM CODE</h6>
				<h2 className='text-center'>52322</h2>
				<p className='text-center small'>(You can always view the code in <b>My Account</b> page)</p>
			</div>
      	</Modal>
    );
}

export default React.memo(PaymentCreditCompleted);
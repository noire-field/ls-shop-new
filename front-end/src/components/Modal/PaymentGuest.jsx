import config from './../../config.json';

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';


import { ModalLoginToggle, ModalPaymentGuestToggle } from './../../store/actions/modal.action';

import { StyleCompact } from './../../utils/modal';
import Logger from './../../utils/logger';

function PaymentGuest() {
	Logger.Log(`[App][HomeStore][StoreContent][ItemList][PaymentGuest] Render`);

    const dispatch = useDispatch();

    const show = useSelector(state => state.modal.paymentGuest.show);
	const item = useSelector(state => state.modal.paymentGuest.item);

	if(!item) return null;

	const closeModal = () => {
        dispatch(ModalPaymentGuestToggle(false));
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
		dispatch(ModalLoginToggle(true));
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="Guest Payment Modal">
			<div className="px-lg-5 py-lg-5 px-3 py-4">
				<h4 className="text-left mb-5"><i className="fas fa-info-circle mr-1"></i>Payment for {item.title}</h4>
				<div className="row">
					<div className="col-lg-6 mb-3">
						<div className="d-flex mb-1 justify-content-between align-items-center">
							<p className="mb-0 font-weight-bold">Pay with <span className='text-info'><i className="fab fa-paypal mr-1"></i>Paypal</span></p>
						</div>
						<a onClick={onClickPaypal} href="#" className="d-block mb-1">
							<div className="py-3 bg-white rounded shadow text-center">
								<img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"/>
							</div>
						</a>
						<h4 className='text-center mt-2'><span className=''>${item.price.dollar}</span></h4>
					</div>
					<div className="col-lg-6">
						<div className="d-flex mb-1 justify-content-between align-items-center">
							<p className="mb-0 font-weight-bold">Pay with <span className='text-warning'><i className="fas fa-coins mr-1"></i>Credits</span> via <span className='text-warning'>SMS</span></p>
							
						</div>
						<a onClick={onClickSMS} href="#" className="d-block mb-1">
							<div className="py-3 bg-warning rounded shadow text-center">
								<i className="fas fa-mobile-alt text-dark pay-with-sms mr-2"></i>
								<i className="fas fa-sms text-dark pay-with-sms"></i>
							</div>
						</a>
						<h4 className='text-center mt-2'><span className='text-warning'><i className="fas fa-coins mr-1"></i>{item.price.credit}</span></h4>
					</div>
				</div>
			</div>
      	</Modal>
    );
}

export default React.memo(PaymentGuest);
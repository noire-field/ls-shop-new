import config from './../../config.json';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import Error from '../Error';

import { AppSetLoading } from './../../store/actions/app.action';
import { UserSetCredits, UserSetCodeList } from '../../store/actions/user.action';
import { ModalPaymentToggle, ModalPaymentCreditCompletedToggle } from './../../store/actions/modal.action';

import axios from './../../utils/axios';
import { StyleCompact } from './../../utils/modal';
import Logger from './../../utils/logger';
import { FormatNumber } from './../../utils/shared';

function Payment() {
	Logger.Log(`[App][HomeStore][StoreContent][ItemList][Payment] Render`);

    const dispatch = useDispatch();

	const [errors, setErrors] = useState([]);
	const [showTopup, setShowTopup] = useState(false);

	const credits = useSelector(state => state.user.credits);
    const show = useSelector(state => state.modal.payment.show);
	const item = useSelector(state => state.modal.payment.item);
	const userId = useSelector(state => state.user.id);
	const payUrl = useSelector(state => state.store.payUrl);

	if(!item) return null;

	const closeModal = () => {
		setErrors([]);
		setShowTopup(false);
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

		setErrors([]);
		setShowTopup(false);

		if(window.confirm(`Buy ${item.title} with ${item.price.credit} credits?`) != true)
			return;

		dispatch(AppSetLoading(true));
		axios.post('/shop-api.php?act=PurchaseWithCredit', {
			itemId: item.id,
			userId
		}).then(({ data }) => {
			if(data.success) {
				dispatch(ModalPaymentToggle(false));
				dispatch(UserSetCredits(data.remainCredits));
				dispatch(UserSetCodeList(data.myCodes));
				dispatch(ModalPaymentCreditCompletedToggle(true, item, data.redeemCode));
			} else {
				setErrors([data.message]);
				if(data.topup == true) setShowTopup(true);
			}
		}).catch(() => {
			setErrors(['Unable to connect to server.']);
		}).finally(() => {
			dispatch(AppSetLoading(false));
		})
	}

    return (
        <Modal isOpen={show} onRequestClose={closeModal} style={StyleCompact} contentLabel="Guest Payment Modal">
			<div className="px-lg-5 py-lg-5 px-3 py-4">
				<h4 className="text-left mb-5"><i className="fas fa-info-circle mr-1"></i>Payment for {item.title}</h4>
				<div className="row">
					<div className="col-lg-6 mb-3">
						<div className="d-flex mb-1 justify-content-between align-items-center">
							<p className="mb-0 text-uppercase font-weight-bold">Pay with <span className='text-info'><i className="fab fa-paypal mr-1"></i>Paypal</span></p>
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
							<p className="mb-0 text-uppercase font-weight-bold">Pay with <span className='text-warning'><i className="fas fa-coins mr-1"></i>Credits</span> via <span className='text-warning'>SMS</span></p>
						</div>
						<a onClick={onClickSMS} href="#" className="d-block mb-1">
							<div className="py-3 bg-warning rounded shadow text-center">
								<i className="fas fa-mobile-alt text-dark pay-with-sms mr-2"></i>
								<i className="fas fa-sms text-dark pay-with-sms"></i>
							</div>
						</a>
						<h4 className='text-center mt-2'><span className='text-warning'><i className="fas fa-coins mr-1"></i>{item.price.credit}</span></h4>
						<p className='text-center mt-2'>(<small>MY CREDITS: </small><b className='text-warning'>{FormatNumber(credits)}<i className="fas fa-coins ml-1"></i></b>)</p>
					</div>
				</div>
				<Error errors={errors}/>
				{ showTopup && 
				<a href={payUrl} target='_blank' className={`btn btn-warning btn-block btn-sm btn-block mt-2`}><i className="fas fa-mobile-alt mr-1"></i>Click here to buy Credits</a>
				}
			</div>
      	</Modal>
    );
}

export default React.memo(Payment);
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logger from './../utils/logger';

import ItemSingle from "./ItemSingle";
import PaymentGuest from "./Modal/PaymentGuest";
import Payment from "./Modal/Payment";

import { ModalPaymentGuestToggle, ModalPaymentToggle } from './../store/actions/modal.action';

function ItemList(props) {
    Logger.Log(`[App][HomeStore][StoreContent][ItemList] Render`);

    const dispatch = useDispatch();
    const logged = useSelector(state => state.user.logged);

    const onClickItem = useCallback((item) => {
        if(!logged) dispatch(ModalPaymentGuestToggle(true, item));
        else dispatch(ModalPaymentToggle(true, item));
    }, [logged]);

    var renderContent = props.items.map((item, index) => <div key={index} className="col-lg-3 col-md-4 col-12 mb-4"><ItemSingle onClick={onClickItem.bind(this, item)} title={item.title} price={item.price} image={item.image}/></div>)
    var payment = logged ? <Payment/> : <PaymentGuest/>
    return (
        <React.Fragment>
            <div className={`row ${props.className}`}>
                {renderContent}
            </div>
            {payment}
        </React.Fragment>
    )
}

export default React.memo(ItemList);
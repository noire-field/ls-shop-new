import React from "react";
import { useSelector } from 'react-redux';

import Logger from './../utils/logger';

function ItemSingle(props) {
    const logged = useSelector(state => state.user.logged);

    const onClick = (e) => {
        e.preventDefault();
        if(props.onClick) props.onClick();
    }

    Logger.Log(`[App][HomeStore][StoreContent][ItemList][ItemSingle] Render (Name: ${props.title} / Logged: ${logged})`);
    
    return (
        <a href="#" onClick={onClick} className="card card-item-new bg-dark bg-nice-dark text-white item-shadow">
            <div className="card-body p-0 pt-3 text-center">
                <img className="mb-3" src={props.image} alt={props.title}/>
                <h5 className="text-center bg-dark-semi p-2">{props.title}</h5>
                <div className="d-flex justify-content-between align-items-center px-3 mb-1">
                    <small className="ls-4">PRICE</small>
                    <h5 className="text-center mb-0">
                        { logged == true && 
                        <React.Fragment>
                            <span className="text-warning">{props.price.credit} <i className="fas fa-coins"></i></span>
                            <span className="text-white"> / </span>
                        </React.Fragment>
                        }
                        <span className="text-danger">{props.price.dollar}$</span>
                    </h5>
                </div>
            </div>
        </a>
    );
}


export default React.memo(ItemSingle);
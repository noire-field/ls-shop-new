import React from "react";

import ItemImage from './../assets/gold_admin.png';

function ItemSingle(props) {
    return (
        <div className="col-lg-3 col-md-4 col-12 mb-4">
            <a href="#" className="card card-item-new bg-dark bg-nice-dark text-white item-shadow">
                <div className="card-body p-0 pt-3 text-center">
                    <img className="mb-3" src={ItemImage} alt="Item Name"/>
                    <h5 className="text-center bg-dark-semi p-2">Silver Admin (30 days)</h5>
                    <div className="d-flex justify-content-between align-items-center px-3 mb-1">
                        <small className="ls-4">PRICE</small>
                        <h5 className="text-center mb-0">
                            <span className="text-warning">499 <i className="fas fa-coins"></i></span>
                            <span className="text-white"> / </span>
                            <span className="text-danger">4.99$</span>
                        </h5>
                    </div>
                </div>
            </a>
        </div>
    );
}


export default React.memo(ItemSingle);
import React from "react";
import { useSelector } from "react-redux";

function MyAccount() {
    const codes = useSelector(state => state.user.codes);

    var renderContent = <tr><td colSpan={7}>You don't have any items, let's buy one!</td></tr>;
    if(codes.length > 0) {
        renderContent = codes.map((item) => (
            <tr key={item.code}>
                <td>{item.code}</td>
                <td className="text-left">{item.item}</td>
                <td>{item.activationDate}</td>
                <td>{item.redeemedDate}</td>
                <td>{item.player}</td>
                <td>{item.server}</td>
                <td>{GetItemStatusText(item.status)}</td>
            </tr>
        ))
    }

    return (
        <div className="text-white">
            <h2 className="mb-5">My Account</h2>
            <h4>Your Redeem Codes</h4>
            <p className="mb-1"><i class="fas fa-info-circle mr-1"></i>Only most recent 15 codes will be shown. If you don't see your code, try refreshing the page.</p>
            <div className="table-responsive">
                <table class="table table-dark table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col" className="text-left">Item</th>
                            <th scope="col">Activation Date</th>
                            <th scope="col">Redeemed Date</th>
                            <th scope="col">Player</th>
                            <th scope="col">Server</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderContent}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function GetItemStatusText(status) {
    switch(status) {
        case 0: return (<span class="text-success">Unused</span>);
        case 1: return (<span class="text-danger">Used</span>);
        case 2: return (<span class="text-info">Active</span>);
        case 3: return (<span class="text-danger">Expired</span>);
        default: return (`-`);
    }
}

export default React.memo(MyAccount);
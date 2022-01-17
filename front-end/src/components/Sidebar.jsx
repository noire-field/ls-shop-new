import React from "react";

import Header from './../components/Header';

function Sidebar(props) {
    return (
        <div className={`col-lg-2 ${props.className}`}>
            <Header className="mb-5"/>
            <h6 className="text-center text-warning bg-dark-semi py-3 px-1"><span className="text-danger d-block font-weight-bold"><i className="fas fa-exclamation-triangle mr-1"></i>WARNING</span><br/>Please click on <b className="text-danger">Guide & Terms of Service</b> to read before purchasing!</h6>
            <div className="bg-dark-semi p-2">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link" id="v-pills-guide-tab" data-toggle="pill" href="#v-pills-guide" role="tab" aria-controls="v-pills-guide" aria-selected="false"><span className="font-weight-bold text-danger"><i className="fas fa-exclamation-triangle mr-1"></i>Guide & Terms of Service</span></a>
                    <a className="nav-link active" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">All Items</a>
                    <a className="nav-link" id="v-pills-zp-tab" data-toggle="pill" href="#v-pills-zp" role="tab" aria-controls="v-pills-zp" aria-selected="false">Zombie Plague</a>
                    <a className="nav-link" id="v-pills-ze-tab" data-toggle="pill" href="#v-pills-ze" role="tab" aria-controls="v-pills-ze" aria-selected="false">Zombie Escape</a>
                    <a className="nav-link" id="v-pills-zi-tab" data-toggle="pill" href="#v-pills-zi" role="tab" aria-controls="v-pills-zi" aria-selected="false">Zombie Invasion</a>
                    <a className="nav-link" id="v-pills-jb-tab" data-toggle="pill" href="#v-pills-jb" role="tab" aria-controls="v-pills-jb" aria-selected="false">Jailbreak</a>
                    <a className="nav-link" id="v-pills-vip-tab" data-toggle="pill" href="#v-pills-vip" role="tab" aria-controls="v-pills-vip" aria-selected="false">V.I.P</a>
                    <a className="nav-link" id="v-pills-admin-tab" data-toggle="pill" href="#v-pills-admin" role="tab" aria-controls="v-pills-admin" aria-selected="false">Game Admin</a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Sidebar);
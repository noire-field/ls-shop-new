import React from "react";
import Header from "../components/Header"

function Welcome() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Header/>
        </div>
    )
}

export default React.memo(Welcome);